import React, { useState} from 'react';
import {FaAngleDown, FaAngleUp} from "react-icons/fa";
import materials from './pages/materials';
import {Link} from 'react-router-dom';


function ProductList() {
    const [product, setProduct] = useState(materials);
   const [filterIsOpen, setFilterIsOpen] = useState(true);
   
    function handleClick(){
      setFilterIsOpen(!filterIsOpen);
   }
   function handleChange(e) {
    if(e.target.checked) {
       console.log('checked');
       const name = e.target.name;
       console.log(name);
    }
   }
   function handleRadioChange(e) {
    if(e.target.checked) {
       console.log('checked');
       const name = e.target.id;
       console.log(name);
    }
   }
   function ClearFunc() {
    const checkbox = document.getElementsByTagName('input');
    console.log(checkbox[0]);
     for (let i = 0; i < checkbox.length; ++i) {
     checkbox[i].checked = false;
}  
   }
  
  
return (
  <>
  <div className="container">
    <h2 className="products-title">Материалы URSA</h2>
    <div className="products">
         <div className="productListFilter" >
                <div className="productListFilter_titleContainer">
                  <span className='productListFilter_icon' onClick={handleClick}>{filterIsOpen?<FaAngleUp/>:<FaAngleDown/>}</span><h5 className="productListFilter-mainTitle">Фильтр</h5>
                  </div> 
                 <div className={filterIsOpen?'productListFilter-content':'closed'}>
<div className="productListFilter-item">
                  <ul className="productListFilter-list">
                    <li>
                      <div className="filter-checkboxes">
                          <div className="checkbox-container">
                            <input type="checkbox" id="terra" name="terra" onChange={handleChange} />
                            <label htmlFor="terra">URSA TERRA</label>
                          </div>   
                        </div>
                    </li> 
                     <li>
                      <div className="filter-checkboxes">
                          <div className="checkbox-container">
                             <input type="checkbox" id="geo" name="geo" onChange={handleChange} />
                            <label htmlFor="geo">URSA GEO</label>
                          </div>   
                        </div>
                    </li> 
                     <li>
                      <div className="filter-checkboxes">
                          <div className="checkbox-container">
                            <input type="checkbox" id="pureone" name="pureone" onChange={handleChange} />
                            <label htmlFor="pureone">URSA PUREONE</label>
                          </div>   
                        </div>
                    </li> 
                     <li>
                      <div className="filter-checkboxes">
                          <div className="checkbox-container">
                            <input type="checkbox" id="xps" name="xps" onChange={handleChange}/>
                            <label htmlFor="xps">URSA XPS</label>
                          </div>   
                        </div>
                    </li> 
                     <li>
                     <div className="filter-checkboxes">
                          <div className="checkbox-container">
                            <input type="checkbox" id="seco" name="seco" onChange={handleChange}/>
                            <label htmlFor="seco">URSA SECO</label>
                          </div>   
                        </div>
                    </li> 
                  </ul>
                 </div>
                   <div className="productListFilter-item">
                    <h5 className="productListFilter-item_title">Области применения</h5>
                    <ul className="productListFilter-list" id='list'>
                      <li>
                            <div className="filter-checkboxes">
                            <div className="radio-container"> 
                            <input type="radio" id="Балконы и лоджии" name="category" className='radio' onChange={handleRadioChange}/>
                            <label htmlFor="Балконы и лоджии">Балконы и лоджии
                            </label> 
                            </div>
                        </div>     
                      </li>
                       <li>
                            <div className="filter-checkboxes">
                            <div className="radio-container"> 
                            <input type="radio" id = "Бани и сауны" name="category"  className='radio' onChange={handleRadioChange}/>
                            <label htmlFor="Бани и сауны">Бани и сауны
                            </label> 
                            </div>
                        </div>     
                      </li>
                       <li>
                            <div className="filter-checkboxes">
                            <div className="radio-container"> 
                            <input type="radio" id ="Наружные стены" name="category" className='radio' onChange={handleRadioChange}/>
                            <label htmlFor="Наружные стены">Наружные стены
                            </label> 
                            </div>
                        </div>     
                      </li>
                       <li>
                            <div className="filter-checkboxes">
                            <div className="radio-container"> 
                            <input type="radio" id='Перегородки и облицовки' name="category" className='radio' onChange={handleRadioChange}/>
                            <label htmlFor="Перегородки и облицовки">Перегородки и облицовки
                            </label> 
                            </div>
                        </div>     
                      </li>
                       <li>
                            <div className="filter-checkboxes">
                            <div className="radio-container"> 
                            <input type="radio" id='Перекрытия, полы и потолки' name="category" className='radio' onChange={handleRadioChange}/>
                            <label htmlFor="Перекрытия, полы и потолки">Перекрытия, полы и потолки
                            </label> 
                            </div>
                        </div>     
                      </li>
                       <li>
                            <div className="filter-checkboxes">
                            <div className="radio-container"> 
                            <input type="radio" id='Плоские крыши' name="category" className='radio' onChange={handleRadioChange}/>
                            <label htmlFor="Плоские крыши">Плоские крыши
                            </label> 
                            </div>
                        </div>     
                      </li>
                      <li>
                            <div className="filter-checkboxes">
                            <div className="radio-container"> 
                            <input type="radio" id='Скатные крыши' name="category" className='radio' onChange={handleRadioChange}/>
                            <label htmlFor="Скатные крыши">Скатные крыши
                            </label> 
                            </div>
                        </div>     
                      </li>
                      <li>
                            <div className="filter-checkboxes">
                            <div className="radio-container"> 
                            <input type="radio" id='Специальные области применения' name="category" className='radio' onChange={handleRadioChange}/>
                            <label htmlFor="Специальные области применения">Специальные области применения
                            </label> 
                            </div>
                        </div>     
                      </li>
                      <li>
                            <div className="filter-checkboxes">
                            <div className="radio-container"> 
                            <input type="radio" id='Техническая изоляция' name="category" className='radio' onChange={handleRadioChange}/>
                            <label htmlFor="Техническая изоляция">Техническая изоляция
                            </label> 
                            </div>
                        </div>     
                      </li>
                      <li>
                            <div className="filter-checkboxes">
                            <div className="radio-container"> 
                            <input type="radio" id='Фундаменты и стены подвалов' name="category" className='radio' onChange={handleRadioChange}/>
                            <label htmlFor="Фундаменты и стены подвалов">Фундаменты и стены подвалов
                            </label> 
                            </div>
                        </div>     
                      </li>
                    </ul>
                   </div>
                   <div className="productListFilter-item">
                     <h5 className="productListFilter-item_title">Эффективность теплоизоляции</h5>
                     <div className="table-content">
                      <div className='table-content_text'>λ
                      <div className="table-content_text-hover">Чем меньше значение λ, тем лучше материал защищает от холода.</div>
                      </div>
                      <div className='table-content_rectangle1' ></div>
                      <div className='table-content_rectangle2'></div>
                      <div className='table-content_rectangle3'></div>
                     </div>
                     <div className="table-text">0,044<span>ниже λ —эффективнее изоляция</span> 0,030</div>
                   </div>
                   <button className="btn btn_blue ProductListFilter_btn" type='submit' onClick={ClearFunc}>Сбросить</button>
                 </div>
                 
         </div>
         <div className="item">
    {product.map((item) => {  
      return (
        <>
          <Link to = '#' >
          <div className="item-container" key={item.id}>
          <div className="item-inner">
            <div className="item-img"><img src={item.img1} alt="productImage"/></div>
          <div className="item-content">
           <h3 className="item-title">{item.name}</h3>
           <div className="item-text">{item.descText}</div>
          </div>
          </div>
          </div>
          </Link>
        </>
      )          

    })}
   
         </div>
    </div>
  </div>
  </>
)
}

export default ProductList;
