import React, { Component } from "react";
import API from "../../utils/API";
import {Row, Col} from "../Grid";
import {List, ListItem} from "../List";
import {Link} from "react-router-dom";
import { throws } from "assert";

class Search extends Component {
  state = {
    searchTerm: "",
    startYear: "",
    endYear: "",
    results: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  search = event => {
    event.preventDefault();
    let searchObj = {
      searchTerm: this.state.searchTerm,
      startYear: this.state.startYear,
      endYear: this.state.endYear
    }
    API.search(searchObj)
      .then(res => {
        console.log(res);
        this.setState({ results: res.data.response.docs })
      })
      .catch(err => console.log(err));
  };

  saveArticle = id => {
    console.log(id);
    API.saveArticle(this.state.results[id])
    .then(res => console.log("SUCCESS", res))
    .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
      <Row>
        <Col size="sm-12">
          <br />
          <div class="card">
            <div class="card-header">
              <strong>
                <i class="fa fa-list-alt"></i> Search Parameters</strong>
            </div>
            <div class="card-body">
              <form>
                <div class="form-group">
                  <label for="search">Search Term:</label>
                  <input 
                    type="text" 
                    name="searchTerm" 
                    value={this.state.searchTerm} 
                    onChange={this.handleInputChange} 
                    class="form-control" 
                  />
                </div>
                <div class="form-group">
                  <label for="start-year">Start Year (Optional):</label>
                  <input 
                    name="startYear" 
                    value={this.state.startYear} 
                    onChange={this.handleInputChange} 
                    type="text" 
                    class="form-control" 
                  />
                </div>
                <div class="form-group">
                  <label for="end-year">End Year (Optional):</label>
                  <input 
                    name="endYear" 
                    value={this.state.endYear} 
                    onChange={this.handleInputChange} 
                    type="text" 
                    class="form-control" 
                    id="end-year" />
                </div>

                <button type="submit" class="btn btn-default" id="run-search" onClick={this.search}>
                  <i class="fa fa-search"></i> Search</button>

              </form>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col size="sm-12">
          <br/>
          <div className="card">
            <div className="card-header">
              <strong>
                <i className="fa fa-table"></i> 
                Top Articles
              </strong>
            </div>
            {this.state.results.length ? (
              <List>
                {this.state.results.map((result, i) => (
                  <ListItem 
                    text="SAVE" 
                    buttonType="btn btn-primary" 
                    savearticle={this.saveArticle} 
                    results={result} 
                    key={i} 
                    index={i}>
                  </ListItem>
                ))}
              </List>
              ) : (
              <h3>No Results to Display</h3>
            )}
          </div>
        </Col>
      </Row>
      </div>
    );
  }
}

export default Search;
