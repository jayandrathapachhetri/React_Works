import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date} = this.props;
    return (
      <div className="my-3" >
        
        <div className="card"> 
        <img src={!imageUrl?"https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg":imageUrl} className="card-img-top" alt="..."/>
          {/* <img src={imageUrl} className="card-img-top" alt="..." /> */}
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            {/* for Badges */}
            {/* <span className="position-absolute top-0 translate-centre badge rounded-pill text-primary " style={{zIndex: '1'}}> {source} </span> */}
            <p className="card-text">
              {description}
            </p>
            <p className="card-text"><small className="text-muted">By {!author?"unknown":author} on {new Date (date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
