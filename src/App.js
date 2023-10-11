import React, { useState } from 'react';
import './App.css';

function WordCounter() {
  const [text, setText] = useState('');
  const words = text.trim().split(/\s+/); // Split the text into words

  return (
    <div className='outer-box'>
      <h2>Responsive Paragraph Word Counter</h2>
      <textarea
        rows="5"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ width: '90%', border:"2px solid black", borderRadius:"5px" }}
      ></textarea>
      <p>
        Word Count: <strong>{words.length}</strong>
      </p>
    </div>
  );
}

export default WordCounter;