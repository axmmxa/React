import React from 'react';
import ReactDOM from 'react-dom/client';


const books =[
  {
    title: 'Interesting Facts for Curious Minds',
    author: 'Sarah J',
    img: './images/book1.jpg',
  },
  {
    title:  'the Book',
    author:  'Tom T',
    img:  'https://m.media-amazon.com/images/I/51j8bRH5sDL._SY445_SX342_.jpg',
  },
]
const names = ['john', 'peter', 'suzanne']

const newNames = names.map((name)=>{
  return <h1>{name}</h1>
})

console.log(newNames)
const Booklist = () => {
  return (
    <section>
        {newNames}
    </section>
  )
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Booklist></Booklist>
);


