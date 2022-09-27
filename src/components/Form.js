import React from "react";
import {useState, useRef, useEffect} from 'react';

function Form(props) {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [question, setQuestion]=useState('');
    const [lead, setLead] = useState([]);
    const ref = useRef('form');
    const {setShowForm, showForm} = props;
    const handleSubmit = (e) => {
        e.preventDefault();
        if(name&&email&&question) {
            const person = {name,email,question};
            setLead((lead) => {
                return [...lead,person];
            })
            setName('');
            setEmail('');
            setQuestion('');
            console.log(lead);
        } else {
console.log('empty values');
        }
        
    };
        useEffect(() => {
            
            const handleOutClick = (e) => {
                if(e.path[0].className!=="form-inner"&& 
                e.path[1].className!=="form-inner"&&
                e.path[2].className!=="form-inner"
                ) {
                   setShowForm(false)
                }
            };

            document.body.addEventListener('click', handleOutClick,true);
            return () => {
                document.body.removeEventListener('click', handleOutClick,true);
            };
        }, [ref,setShowForm]);
       
    
    return (
        <>
        <article className={showForm?'form-active form':'form form-closed'}>
        <form ref={ref} className="form-inner" onSubmit={handleSubmit}>
            <h2 className="form-title">
                Задайте вопрос
            </h2>
            <div className="form-control">
            <label htmlFor="name"> *Имя: </label>
            <input type="text"id="name" name="name" value={name} onChange={(e)=>setName(e.target.value)} />
            </div>
            <div className="form-control">
            <label htmlFor="email"> *E-mail: </label>
            <input type="text"id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="form-control">
            <label htmlFor="question">Вопрос: </label>
            <input type="text" id="question" name="question" value={question} onChange={(e)=>setQuestion(e.target.value)} />
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