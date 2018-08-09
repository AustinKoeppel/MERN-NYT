import axios from "axios";

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931&q=";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(searchObj) {
    let searchURL = BASEURL + searchObj.searchTerm.trim();
    if (parseInt(searchObj.startYear)) {
      searchURL = searchURL + "&begin_date=" + searchObj.startYear + "0101";
    }
  
    // If the user provides a startYear -- the endYear will be included in the queryURL
    if (parseInt(searchObj.endYear)) {
      searchURL = searchURL + "&end_date=" + searchObj.endYear + "0101";
    }

    return axios.get(searchURL);
  },
  getArticles: function() {
    return axios.get("/api/articles");
  },
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  saveArticle: function(articleData) {  
    console.log("Woof", articleData);
    let body = {
        title: articleData.headline.main,
        date: articleData.pub_date,
        url: articleData.web_url
    }
    console.log("Stuff", body);
    return axios.post("/api/articles", body);
  }
};
