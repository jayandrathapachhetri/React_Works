import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    pageSize:5,
    country: 'in',
    category:"science"
  }
  
  static propTypes = {
    pageSize : PropTypes.number ,
    country : PropTypes.string,
    category: PropTypes.string
  }

  constructor(props) {
    super();
    this.state = {
      articles: [], // Initialize articles as an empty array
      loading: false,
      page: 1,
      totalArticles: 0, // Initialize totalArticles as 0
    };
  }

  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f31ca37e0d664a5b87ffa95ec0b79dd4&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults, // Set the totalResults from the API response
      loading:false
    });
  }

  handlePrevClick = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f31ca37e0d664a5b87ffa95ec0b79dd4&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading:false
    });
  };
  
  handleNextClick = async () => {
    console.log("Next");
    if (this.state.page + 1 > Math.ceil(this.state.totalArticles / this.props.pageSize)) {
      // Handle the case when there are no more pages to fetch
      return;
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f31ca37e0d664a5b87ffa95ec0b79dd4&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading:false
      });
    }
  };
  

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center" style={{margin: '30px 0px'}} >Amazing News</h2>
       <div className="text-center">
       {this.state.loading && <Spinner/>}
       </div>
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between mt-3">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles / this.props.pageSize) }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;


