import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';


function News() {

const [news, setNews] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
useEffect(() =>{
    const url = 'https://date.nager.at/api/v2/publicholidays/2020/US'
    fetch(url).then(response => {
        if(response.ok) {
            return response.json();
        }
        throw response;
    })
    .then(news => {
        setNews(news);
        console.log(news);
    })
    .catch(error => {
        console.error('Error fetching data: ', error)
        setError(error)
    })
    .finally(()=>{
        setLoading(false);
    })
}, [])
 if (loading) {
    return <h3>Loading...</h3>
 }
 if (error) {
    return <h3>{error}</h3>
 }
return (
<div className='news-content'>
<h2 className='news-title'><Link to = '#'>Новости</Link></h2>
<div className="news-container">
   {
    news.map((item,id) => {
        return (
        <>
        <ul className="item-list" key={id}>
        <p className='news-date'>{item.date}</p>
        <h3 className='news-name'>{item.name}</h3>
        </ul>
        </>
        )
    })
   } 
</div>
</div>
)
}


export default News;