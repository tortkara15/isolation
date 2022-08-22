import React from "react";
import {useState, useRef, useEffect} from 'react';

function Form(props) {
    
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [question, setQuestion]=useState('');
    const ref = useRef('form');
    const {setShowForm, showForm} = props;
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    
        useEffect(function (setForm) {
            
            const handleOutClick = (event) => {
                if (ref.current && !ref.current.includes(event.target)) {
                    setShowForm(false);
                }
            };

            document.addEventListener('click', handleOutClick, true);
            return () => {
                document.removeEventListener('click', handleOutClick, true);
            };
        }, [ref, setShowForm]);
       
    
    return (
        <>
        <article className={showForm?'form-active form':'form form-closed'}>
        <form className="form-inner" onSubmit={handleSubmit}>
            <h2 className="form-title">
                Задайте вопрос
            </h2>
            <div className="form-control">
            <label htmlFor="name"> *Имя: </label>
            <input type="text"id="name" name="name" value={name} />
            </div>
            <div className="form-control">
            <label htmlFor="email"> *E-mail: </label>
            <input type="text"id="email" name="email" value={email}/>
            </div>
            <div className="form-control">
            <label htmlFor="question">Вопрос: </label>
            <input type="text" id="question" name="question" value={question} />
            </div>
               <p className="form-text">
               Нажимая кнопку «Отправить» вы подтверждаете, что даете согласие на обработку персональных данных, указанных в данной форме.
               </p>
               <button type="submit" className="form-btn">Отправить</button>
        </form>
        </article>
        
        </>
        
    )
}
export default Form;