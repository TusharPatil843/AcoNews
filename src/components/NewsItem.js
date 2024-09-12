import React from 'react';
// import noimg from './noimg.png'; // Ensure this path is correct

const NewsItem = (props) => {
  let { title, description, imgUrl, newsUrl, author, date } = props;

  const timeAgo = (date) => {
    const newsDate = new Date(date);
    const differenceInMillis = new Date() - newsDate;
    const differenceInSeconds = Math.floor(differenceInMillis / 1000);
    const differenceInMinutes = Math.floor(differenceInSeconds / 60);
    const differenceInHours = Math.floor(differenceInMinutes / 60);
    const differenceInDays = Math.floor(differenceInHours / 24);

    if (differenceInDays > 0) {
      return `${differenceInDays} day${differenceInDays > 1 ? 's' : ''} ago`;
    } else if (differenceInHours > 0) {
      return `${differenceInHours} hour${differenceInHours > 1 ? 's' : ''} ago`;
    } else if (differenceInMinutes > 0) {
      return `${differenceInMinutes} minute${differenceInMinutes > 1 ? 's' : ''} ago`;
    } else {
      return `${differenceInSeconds} second${differenceInSeconds > 1 ? 's' : ''} ago`;
    }
  };

  // const noimg = '../public/images/noimg'

  return (
    <div>
      <div 
        className="card border-primary border-0 shadow-lg"
        style={{ width: '320px', height: '510px', borderRadius: '10px', overflow: 'hidden', backgroundColor: '#e3f2fd' }}
      >
        <div className="image-container" style={{ height: '180px', position: 'relative', overflow: 'hidden' }}>
          {/* Conditionally render imgUrl or the placeholder image */}
          <img 
            src={imgUrl || 'https://via.placeholder.com/150?text=No+Image+Available'}  // Use imgUrl if available, otherwise use noimg
            className="card-img-top img-fluid hover-zoom" 
            style={{ height: '100%', width: '100%', objectFit: 'cover', transition: 'transform 0.3s ease-in-out' }} 
            alt={imgUrl ? title : "No Image Available"}  // Display alt text if no image
          />
        </div>
        <div className="card-body d-flex flex-column" style={{ padding: '15px' }}>
          <h5 className="card-title" style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#0d47a1', marginBottom: '10px' }}>
            {title.length > 80 ? title.slice(0, 80) + "..." : title}
          </h5>
          <p className="card-text text-muted" style={{ fontSize: '0.9rem', lineHeight: '1.4', marginBottom: '20px', flexGrow: 1 }}>
            <b>{description.length > 150 ? description.slice(0, 150) + "..." : description}</b>
          </p>
          <div className='mt-auto'>
            <p className="card-text text-muted" style={{ fontSize: '0.8rem', marginBottom: '15px' }}>
              <small>By {author}</small>
            </p>
            <a 
              href={newsUrl} 
              target='_blank' 
              rel="noreferrer" 
              className="btn btn-sm btn-primary"
              style={{ width: '100%', transition: 'background-color 0.3s ease' }}
            >
              Read more
            </a>
            <p className="text-muted mt-2" style={{ fontSize: '0.8rem' }}>
              {timeAgo(date)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
