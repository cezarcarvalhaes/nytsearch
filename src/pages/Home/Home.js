import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Card from "../../components/Card";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Select from "../../components/Select";
import API from "../../utils/API";
import moment from "moment";

const searchDivStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
}

class Home extends Component {
  state = {
    articles: [],
    searchTerm: "",
    section: ""
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  //Passed to Select (dropdown)
  handleChange = event => {
    console.log("select change!");
    this.setState({ section: event.target.value }, ()=> this.handleFormSubmit(event));
  };

  componentDidMount() {
    let resultsArr = [];
    API.getArticles("home")
    .then(res => {
      console.log(res.data.results);
      //pushes only the first 10 articles
      for (let i = 0; i < 10; i ++) {
        resultsArr.push(res.data.results[i])
      }
      this.setState({ articles: resultsArr});
    })
    .catch(err => console.log(err));
  }

  //Sends section to API for GET request
  handleFormSubmit = event => {
    event.preventDefault();
    //
    let resultsArr = []
    API.getArticles(this.state.section)
    
      .then(res => {
        console.log(res.data.results);
        //pushes only the first 10 articles
        for (let i = 0; i < 10; i ++) {
          resultsArr.push(res.data.results[i])
        }
        this.setState({ articles: resultsArr});
      })
      .catch(err => console.log(err));
  };

  clearResults = () => this.setState({ articles: [] });

  render() {
    const filter = this.state.searchTerm;
    return (
      <div>
        <CssBaseline />
        <div title="Search for Articles" icon="fa  fa-list-alt">
          
          <div style ={searchDivStyle}>
              <Select onChange={this.handleChange} value={this.state.section} />
              <Input
                name="searchTerm"
                value={this.state.searchTerm}
                onChange={this.handleInputChange}
                label="Seach Term:"
              />          
              <Button
                icon="fa fa-trash"
                type="button"
                text="Clear Results"
                onClick={this.clearResults}
              />
            </div>
        </div>
        <p>Results: {this.state.articles.filter((data) => data.title.toLowerCase().includes(filter)).length}
</p>
        <br />
        <div>
          <Grid container spacing={40} style={{ padding: 8 }}>
            {this.state.articles
            .filter( (data) => data.title.toLowerCase().includes(filter))
            .map(article => (
              <Grid item xs={12} sm={6} lg={6} xl={4} key={article.short_url}>
                <Card
                  key={article._url}
                  title={article.title}
                  url={article.url}
                  imageUrl={
                    article.multimedia[4]
                      ? article.multimedia[4].url
                      : "https://nytimes.com/images/2018/07/12/opinion/12armitage/merlin_141135135_bbe5d0a8-ec28-4875-b4cf-8bc845bbf6ec-articleLarge.jpg"
                  }
                  date={moment(article.published_date).utcOffset(720).format("M/D/YYYY h:mm A") + " FJT"} 
                  snippet={article.abstract}
                  byline={article.byline}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    );
  }
}

export default Home;
