import React from 'react';

import  {useState} from 'react';
function Mycomponent({value,onSquareClick}) {
     return (
          <button className="square" onClick={onSquareClick}>
            {value}
          </button>
        );
}
  export default Mycomponent;