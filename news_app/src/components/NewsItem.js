import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className="my-3" >
          
        <div className="card">
        <div style={{display:'flex', justifyContent: 'flex-end', position:'absolute', right:'0'}}>
           <span className="  badge rounded-pill bg-success "> {source} </span>
           </div> 
           {/* <div className="d-flex justify-content-end position-absolute right-0">
  <span className="badge rounded-pill text-primary"> {source} </span>
</div> */}
        <img src={!imageUrl?"https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg":imageUrl} className="card-img-top" alt="..."/>
          {/* <img src={imageUrl} className="card-img-top" alt="..." /> */}
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
           
           
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
