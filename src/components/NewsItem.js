import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title, desc, imgUrl, newsurl, date, author, src}= this.props
    return (
      <>
      <div className="card">
      
  <img src={imgUrl ? imgUrl : "/react-news.png"} className="card-img-top" alt="..." />
  <div className="card-body">
  <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: "1" }}>
    {src}
  </span>
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{desc}...</p>
    <p class="card-text"><small class="text-body-secondary">By {author ? author : "unknown"} on {new Date(date).toGMTString()}</small></p>

    <a href={newsurl} target='_blank' className="btn btn-sm btn-primary">Read more</a>
  </div>
</div>
      </>
    )
  }
}
