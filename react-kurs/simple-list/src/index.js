import React from 'react';
import ReactDOM from 'react-dom/client';


const books =[
  {
    title: 'Interesting Facts for Curious Minds',
    author: 'Sarah J',
    img: 'https://m.media-amazon.com/images/I/51rBwNT0gEL._SY445_SX342',
    id:1,
  },
  {
    title:  'the Book',
    author:  'Tom T',
    img:  'https://m.media-amazon.com/images/I/51j8bRH5sDL._SY445_SX342',
    id:2,
  },
]





const Booklist = () => {
  
  const getBook = (id) => {
    const book = books.find((book)=> {
        book.id == id
        console.log(book)
    })
  }

  return (
    <section>
      <EventExamples></EventExamples>
     {books.map((book) =>{
      console.log(book)
      const{img, title, author, id} = book
      return(
        <Book book={book} key={book.id} getBook={getBook}></Book>
      )
     })
     }
    </section>
  )
}


const EventExamples = () => {
  const handleFormInput = (e) => {
    console.log(e.target)
    console.log('handle form input')
  }

  const handleButton = () => {
    console.log('Button')
  }

  const handleFormSubmission = (e) =>{
    e.preventDefault();
    console.log(' form submitted')
  }



  return <section>
    <form>
      <h2>Typcal Form</h2>
      <input onChange={handleFormInput}></input>
    </form>
    <div>
      <button>submit</button>
    </div>
    
  </section>
}



const Book = (props) => {
  const {img, title, author} = props.book;
  //console.log(props);
  
  return (
    <article className='book'>
      <img src='{img}'></img>
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button onClick={console.log('test')}>click me</button>
    </article>
  )
}







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Booklist></Booklist>
);


