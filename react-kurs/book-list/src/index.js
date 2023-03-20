import React from 'react';
import ReactDOM from 'react-dom/client';


import './index.css'

const Booklist = () => {
  return(
    <section className='booklist'>
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
    </section>
  )
}

const Book = () =>{
  return <article className='book'>
    <Image></Image>
    <Title></Title>
    <Author></Author>
  </article>
}

const Image = () => <img src='./images/book1.jpg'></img>
const Title = () => <h2>Daisy Jones & The Six</h2>
const Author = () => {
  return <h4>Taylor Jenkins Reid</h4>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Booklist></Booklist>
);


