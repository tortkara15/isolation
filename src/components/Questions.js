import React from 'react';
import { Link } from 'react-router-dom';

function Questions() {
    return (
      <>
      <div className="questions-content">
        <div className="questions-inner">
          <h2 className="questions-header"><Link to='#'>Вопросы и ответы</Link></h2>
          <p className='questions-title'><Link to='#' >Вопросы по применению продукции</Link></p>
          <p className='questions-title'><Link to='#' >Коммерческие вопросы</Link></p>
          <p className='questions-title'><Link to='#' >Общие вопросы</Link></p> 
        </div>
      </div>
      </>
    );
  }
  export default Questions;