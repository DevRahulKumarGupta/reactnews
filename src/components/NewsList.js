import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
export default function NewsList(props) {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const [newsApiToken] = useState(
    process.env.REACT_APP_NEWS_API
  );
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  const [currentpage, setCurrentpage] = useState(1);
  const [status, setStatus] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)
  document.title = `${capitalizeFirstLetter(
    props.category
  )} - React News`;

  const fetchMore = async () => {
    
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${newsApiToken}&page=${currentpage+1}&pageSize=${props.dataLimit}`;
    let news = await fetch(url);
    setCurrentpage(currentpage + 1);
    let parsedNews = await news.json();
    setArticles(articles.concat(parsedNews.articles));
    setTotalResults(parsedNews.totalResults);
  };

  

  const updateNews = async () => {
    setLoading(true);
    props.chaneProgress(30);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${newsApiToken}&pageSize=${props.dataLimit}`;
    let news = await fetch(url);
    props.chaneProgress(50);
    let parsedNews = await news.json();
    setStatus(parsedNews.status)
    props.chaneProgress(90);
    if(parsedNews.status !== "error"){
      setArticles(parsedNews.articles);
    setTotalResults(parsedNews.totalResults);
    }else{
      setErrorMsg(parsedNews.message)
    }
    props.chaneProgress(100);
    setLoading(false);
  };

  useEffect(() => {
    updateNews()
  }, []);

  return (
    <>
      <div className="container my-3">
        <h1 className="text-center">
          Top Headlines on- {capitalizeFirstLetter(props.category)}
        </h1>
        {loading && <Loader />}
{status === "error" && 
<div className="container mt-5">
<p className="text-center text-danger">{errorMsg}</p>
</div>
}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMore}
          hasMore={totalResults > articles.length}
          loader={<Loader />}
        >
          <div className="row justify-content-center">
            {articles.map((news) => {
              return (
                <div key={news.url} className="col-md-3 col-sm-5 mx-1 my-1 p-2">
                  <NewsItem
                    title={news.title ? news.title.slice(0, 30) : ""}
                    desc={news.description ? news.description.slice(0, 90) : ""}
                    imgUrl={news.urlToImage}
                    newsurl={news.url}
                    date={news.publishedAt}
                    author={news.author}
                    src={news.source.name}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
}

NewsList.propTypes = {
  country: PropTypes.string,
  pageLimit: PropTypes.number,
  category: PropTypes.string,
};

NewsList.defaultProps = {
  country: "in",
  pageLimit: 10,
  category: "general",
};
