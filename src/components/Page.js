import React, { useState } from 'react';
import '../styles/style.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import { useActionData } from 'react-router-dom';

const Page = () => {
  const [newsData, setNewsData] = useState([]);
  const [question, setQuestion] = useState(null);



  const handleChange = (e) => {
    setQuestion(e.target.value);
  }

  const handleSubmit = () => {
    const apiUrl = `https://newsapi.org/v2/everything?q=${question}&apiKey=ed482945b1a64e268bc932304e4bc7a4`;

    axios.get(apiUrl)
      .then((response) => {
        console.log(response.data.articles)
        setNewsData(response.data.articles);
      })
      .catch((error) => {
        console.log('Error fetching data', error);
      });
  }

  return (
    <div className='bg_ground_image'>
      <div className='container'>
        <div className='First_div'>
          <input type='text' className='text_div' onChange={handleChange} />
          <button className='search_button' onClick={handleSubmit}>Search</button>
        </div>
      </div>

      {newsData.map((article, index) => (
        <div key={index} className='article'>
          <p className='article_data'>
            {new Date(article.publishedAt).toLocaleString()}
          </p>
          <div className='two_tag'>
            <Link to={`/News/${index}`} className='article-title' state={article} >
            
              {article.title}
            </Link>
            <p className='article-description'>{article.description}</p>
          </div>
          <div className='image_div'>
            <img src={article.urlToImage} alt={article.title} className='article-image' />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Page;
