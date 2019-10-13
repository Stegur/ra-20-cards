import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './componets/Card';

function App() {

  const img = {
    link: '',
    class: 'card-img-top',
    alt: '',
    width: 100
  }

  const title = "Конь в пальто";
  const text = "Some quick example text to build on the card title and make up the bulk of the card's content.";
  const btnText = "Купить коня";

  return (
    <>
      <Card width='300px' title={title} text={text} btnText={btnText}>
        <img src={img.link || 'http://pbs.twimg.com/media/CdhK0waWoAAIpjz.jpg'} className={img.class || 'card-img-top'} alt={img.alt || 'Horse'} />
      </ Card >

    <hr />

      <Card width='300px' title={title} text={text} btnText={btnText} />
    </>
  )
}

export default App;
