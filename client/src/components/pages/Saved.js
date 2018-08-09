import React from "react";
import API from "../../utils/API";
import {Row, Col} from "../Grid";
import {List, ListItem, ListItemSaved} from "../List";

class Saved extends React.Component {
  state = {
    results: [],
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getArticles()
      .then(res =>
        this.setState({ results: res.data, title: "", author: "", synopsis: "" })
      )
  }

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  render() {
    return (
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
                  <ListItemSaved 
                    text="DELETE"
                    buttonType="btn btn-danger" 
                    deletearticle={this.deleteArticle} 
                    results={result} 
                    key={i} 
                    index={result._id}>
                  </ListItemSaved>
                ))}
              </List>
              ) : (
              <h3>No Results to Display</h3>
            )}
          </div>
        </Col>
      </Row>
    );
  }
}
export default Saved;
