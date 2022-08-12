import React from "react";
import {useState} from 'react';

function Form() {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [question, setQuestion]=useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <>
        <article className="form">
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