import React from 'react';
import { Link } from 'react-router-dom';


function Error() {
  return (
    <div className='error-page'>
       <h2>Sorry, there is no such page</h2>
       <button className="btn"><Link to='/'>Back home</Link></button>
    </div>
  );
}
export default Error;