import React from 'react';
import ReactDOM from 'react-dom/client';


import './index.css'

const title = "Intersting facts For Curious Minds";
const author = "Jordan More"
const img = "./images/book1.jpg"


const Booklist = () => {
  return(
    <section className='booklist'>
      <Book author={author} title={title} img={img}></Book>
      <Book author={author} title={title} img={img}></Book>
    </section>
  )
}



const Book = (props) =>{
  return <article className='book'>
    <img src={props.img}/>
    <h2>{props.title}</h2>
    <h4>{props.author}</h4>
    <p></p>
  </article>
}






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Booklist></Booklist>
);


