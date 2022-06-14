import React, { useState } from 'react';
import data from './data';


function Item() {
    const [products, setProducts] = useState(data);
return <main>
  <section>
    {
      products.map((product)=>{
        const [id,name,title,category] = product;
        return (
          <div className="">{product.name}</div>
        )
      })
    }
  </section>
</main>
}

export default Item;
