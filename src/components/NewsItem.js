import React from 'react'


export default function NewsItem(props) {
  let {title, desc, imgUrl, newsurl, date, author, src}= props
  return (
    <>
    <div className="card">
    <span className="badge rounded-pill bg-danger" style={{ display: 'flex', justifyContent: "flex-end", position:'absolute', right:'0' }}>
  {src}
</span>
<img src={imgUrl ? imgUrl : "/react-news.png"} className="card-img-top" alt="..." />
<div className="card-body">

  <h5 className="card-title">{title}...</h5>
  <p className="card-text">{desc}...</p>
  <p className="card-text"><small className="text-body-secondary">By {author ? author : "unknown"} on {new Date(date).toGMTString()}</small></p>

  <a href={newsurl} target='_blank' rel="noreferrer" className="btn btn-sm btn-primary">Read more</a>
</div>
</div>
    </>
  )
}
