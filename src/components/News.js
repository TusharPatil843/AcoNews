import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
// import Spinner from './Spinner';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

const News = (props) => {
  const [art, setArt] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const { query } = useParams();

  const capitalizeFirstLetter = (string) => {
    return string ? string.charAt(0).toUpperCase() + string.slice(1) : "";
  };

  const titleSecondary = query || props.category || props.countryName;
  const title = capitalizeFirstLetter(titleSecondary);
  document.title = `AcoNews - ${title}`;

  const updateNews = async () => {
    props.setProgress(10);
    // setLoading(true);

    const url = `https://gnews.io/api/v4/top-headlines?q=${query || ''}&category=${props.category}&country=${props.country}&lang=en&apikey=${props.apiKey}&max=10`;

    let data = await fetch(url);
    
    props.setProgress(40);

    let parsedData = await data.json();
    props.setProgress(70);

    setArt(parsedData.articles);  // Set fetched articles
    setTotalResults(parsedData.articles.length);  // Total articles fetched
    
    // setLoading(false);
    
    props.setProgress(100);
  };

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  }, [query]);

  // Function to handle previous page
  const handlePrevClick = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  // Function to handle next page
  const handleNextClick = () => {
    if (page < Math.ceil(totalResults / props.pageSize)) {
      setPage(page + 1);
    }
  };

  // Calculate the articles to display on the current page
  const displayedArticles = art.slice((page - 1) * props.pageSize, page * props.pageSize);
  const header = props.category || props.countryName || query;

  return (
    <div className='container mt-5'>
      <h2 className='text-center' style={{ marginTop: '75px', color: '#007bff' }}>
        Top {capitalizeFirstLetter(header)} Headlines
      </h2>

      {/* {loading && <Spinner />} */}

      <div className="row mx-3">
        {displayedArticles.map((element) => (
          <div className="col-md-4 my-2" key={element.url}>
            <NewsItem
              title={element.title ? element.title : ""}
              description={element.description ? element.description : ""}
              imgUrl={element.image ? element.image : "..." }
              newsUrl={element.url ? element.url : "/" }
              author={element.source.name ? element.source.name : "Unknown" }
              date={element.publishedAt}
            />
          </div>
        ))}
      </div>

      <button 
        disabled={page <= 1} 
        type="button" 
        className="btn btn-primary position-absolute"
        style={{ 
          top: '50%', 
          left: '1%', 
          transform: 'translateY(-50%)',
          margin: '10px',
          
        }} 
        onClick={handlePrevClick}
      >
        &larr; Previous
      </button>
      <button 
        disabled={page >= Math.ceil(totalResults / props.pageSize)} 
        type="button"  
        className="btn btn-primary position-absolute"
        style={{ 
          top: '50%', 
          right: '1%', 
          transform: 'translateY(-50%)',
          width: '6%', 
          margin: '10px',
        }} 
        onClick={handleNextClick}
      >
        Next &rarr;
      </button>
    </div>
  );
};

News.defaultProps = {
  country: '',
  pageSize: 6, // 6 articles per page
  category: '',
  searchQuery: ''
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  apiKey: PropTypes.string.isRequired,
};

export default News;