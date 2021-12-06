import "./Characters.css";
import Modal from './Modal';
import { useState } from 'react'

const Characters = ({ name, image, desc, stories }) => {
    const [show, setShow] = useState(false)

    const comics = stories

  return (
    <div className="characters">
      <div className="char-card">
        <img src={image} alt="None" className='char-img' />
        <div className="char">
          <h1>{name}</h1>
          <p className='description'>{desc ? desc : 'Description not available :('}</p>
          <button className='show-btn' onClick={() => setShow(true)}>More</button>
        </div>
      </div>
      <Modal onClose={() => setShow(false)} show={show} komik ={comics} />
    </div>
  );
};

export default Characters;