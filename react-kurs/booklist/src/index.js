

import React from 'react'
import  ReactDOM  from 'react-dom/client'

import './index.css';


const firrtBook = {
    title: 'Interesting Facts for Curious Minds',
    author: 'Sarah J',
    img: './images/book1.jpg',
};


const secondBook = {
    title:  'the Book',
    author:  'Tom T',
    img:  'https://m.media-amazon.com/images/I/51j8bRH5sDL._SY445_SX342_.jpg',
};






const Booklist = () => {
    return <section className='booklist'>
        <Book author={firrtBook.author} title={firrtBook.title} img={firrtBook.img}></Book>
        <Book author={secondBook.author} title={secondBook.title} img={secondBook.img}>
        <p>Lorem20afadfdafgsdfgsdegsdgsdfgsdgsegeswges</p>
        <button>click me</button>
        </Book>
    </section>
}



const Book = ({img, title, author, children}) => {
    //const {img, title, author} = props;
    return <article className='book'>
        <img src={img}></img>
        <h2>{title}</h2>
        <h4>{author}</h4>
        {children}
    </article>
}










const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Booklist></Booklist>)