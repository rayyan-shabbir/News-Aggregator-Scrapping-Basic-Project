import React, { useState, useEffect } from 'react';
import axios from 'axios';

function News() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define the URL of your Node.js backend API
    const apiUrl = 'http://localhost:5000/api/news';

    // Make a GET request to fetch news data from the backend
    axios
      .get(apiUrl)
      .then((response) => {
        setNewsData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching news data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Pakistan Politics News</h1>
      {loading ? (
        <p>Loading news data...</p>
      ) : (
        <ul>
          {newsData.map((article, index) => (
            <li key={index}>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default News;
