import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor(){
    super();
    this.state ={
      articles : [], // Initialize articles as an empty array
      loading: false,
      page: 1
    }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=f31ca37e0d664a5b87ffa95ec0b79dd4";
    let data = await fetch(url);
    let paresdData = await data.json()
    console.log(paresdData);
    this.setState({articles : paresdData.articles})
  }
  render() {
    return (
      <div className="container my-3">
        <h2>Amazing News</h2>
        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4" key = {element.url}>
            <NewsItem title = {element.title?element.title:""} description= {element.description?element.description:""} imageUrl= {element.urlToImage} newsUrl={element.url} />
          </div>
          })}
        </div>
      </div>
    );
  }
}

export default News;
