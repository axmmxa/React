

import React from 'react'
import  ReactDOM  from 'react-dom/client'

import './index.css';


const Booklist = () => {
    return <section className='booklist'>
        <Book></Book>
        <Book></Book>
        <Book></Book>
    </section>
}



const Book = () => {

    const title  = 'Interesting Facts for Curious Minds'
    const author = 'Sarah J'

    return <article className='book'>

        <img src='./images/book1.jpg'></img>
        <h2>{title}</h2>
        <h4>{author.toLocaleUpperCase()}</h4>

        </article>
}










const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Booklist></Booklist>)