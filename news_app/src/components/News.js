import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
// import InfiniteScroll from "react-infinite-scroller";

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

  capitalizeFirstLetter = (str) =>{
    return str.charAt(0).toUpperCase() + str.slice(1);
    }

  constructor(props) {
    super(props);
    this.state = {
      articles: [], // Initialize articles as an empty array
      loading: false,
      page: 1,
      // totalArticles: 0, // Initialize totalArticles as 0
      totalResults: 0
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - News`;
  }

  async updateNews() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f31ca37e0d664a5b87ffa95ec0b79dd4&page=1&pageSize=${this.props.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      // totalArticles: parsedData.totalResults, // Set the totalResults from the API response
      totalResults: parsedData.totalResults,
      loading:false
    });
}


  async componentDidMount() {
    this.updateNews();
  }

  handlePrevClick = async () => {
    console.log("Previous");
    this.setState({ page: this.state.page + 1 });
    this.updateNews()
  }
  
  handleNextClick = async () => {
    console.log("Next");
    this.setState({ page: this.state.page + 1 });
        this.updateNews()
  }
  

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center" style={{margin: '30px 0px'}} >News - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
       <div className="text-center">
       {this.state.loading && <Spinner className="text-center"/>}
       </div>
       {/* <InfiniteScroll 
       dataLength = {this.state.articles.length}
       next={this.fetchMoreData}
       hasMore={this.state.articles.Length !== this.state.totalResults}
       loader={<Spinner/>}> */}
       
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
        {/* </InfiniteScroll> */}
        {/* <div className="container d-flex justify-content-between mt-3">
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
        </div> */}
      </div>
    );
  }
}

export default News;


