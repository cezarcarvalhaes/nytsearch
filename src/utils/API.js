import axios from "axios";
const nytUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931&q='

export default {
  // Gets all articles from NYT API
  getArticles: function(query) {
    return axios.get(nytUrl + query)
  },
};
