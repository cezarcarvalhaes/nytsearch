import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Card from "../../components/Card";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import API from "../../utils/API";
import moment from "moment";


class Home extends Component {
  state = {
    articles: [],
    searchTerm: "",
    startYear: "",
    endYear: "",
  }

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  //Builds our query string and sends to API for GET request
  handleFormSubmit = event => {
    event.preventDefault();
    let query = "?q=" + this.state.searchTerm.toLowerCase();
    console.log(query)
    //Conditions allow for optional query parameters
    if (parseInt(this.state.startYear, 10)) {
      query += "&begin_date=" + this.state.startYear + "0101";
    }
    if (parseInt(this.state.endYear, 10)) {
      query += "&end_date=" + this.state.endYear + "0101";
    }
    API.getArticles(query)
      .then((res) => {
        console.log(res.data.response.docs)
        this.setState({ articles: res.data.response.docs })
      })
      .catch(err => console.log(err));
  };

  clearResults = () => this.setState({ articles: [] });


  render() {
    return (
      <div>
        <CssBaseline/>
        <div title="Search for Articles" icon="fa  fa-list-alt">
          <Form>
            <Input name="searchTerm" value={this.state.searchTerm} onChange={this.handleInputChange} label="Seach Term:" />
            <Input name="startYear" value={this.state.startYear} onChange={this.handleInputChange} label="Start Year (Optional):" />
            <Input name="endYear" value={this.state.endYear} onChange={this.handleInputChange} label="End Year (Optional):" />
            <Button icon="fa fa-search" type="submit" text="Search" onClick={this.handleFormSubmit} />
            <Button icon="fa fa-trash" type="button" text="Clear Results" onClick={this.clearResults} />
          </Form>
        </div>
        <br />
        <div>
        <Grid container spacing={40} style={{padding: 8}}>
          {this.state.articles.map(article => (
            <Grid item xs={12} sm={6} lg={6} xl={4} key = {article.id}>
              <Card
                key={article._id}
                title={article.headline.main}
                url={article.web_url}
                imageUrl = {article.multimedia[0].url}
                date={moment(article.pub_date).format("dddd, MMMM Do YYYY")}
                snippet={article.snippet}
            />
            </Grid>
          ))}
          </Grid>
        </div>
      </div>
    )
  }
}

export default Home;
