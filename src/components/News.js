import React, { useEffect, useState } from "react";
import { Link , useLocation} from 'react-router-dom';
import '../styles/style.css';
import Page from "./Page";




const News =() =>
{
    const [newsContent, setnewsContent] = useState(null);

    const location=useLocation();
    console.log(location);

useEffect (()=>
{
    setnewsContent(location);
    console.log(setnewsContent);
},[]);


   
    
    return(
        <div className="news_data">
            <div className="news_content">
                <h3 className="news_title"> {newsContent && newsContent.state.title} </h3>
                <p className="news_descri"> {newsContent && newsContent.state.description} </p>


            </div>

            <div className="news_image">

            <img src={newsContent && newsContent.state.urlToImage} alt="News Image" />


            </div>

        </div>
    )

};

export default News;
