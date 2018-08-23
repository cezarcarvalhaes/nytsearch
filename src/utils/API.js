import axios from "axios";
const nytUrlStart = "http://api.nytimes.com/svc/topstories/v2/"
const nytUrlEnd=".json?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931&q="
export default {
  // Gets all articles from NYT API
  getArticles: function(section) {
    const fullUrl = nytUrlStart + section + nytUrlEnd
    console.log(fullUrl)
    return axios.get(fullUrl)
  },
};
