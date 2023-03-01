import '../sass/Heart.scss';
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useState } from 'react';


export const Heart = () => {
  
 const [like,setLike]=useState(false)
 
  const handleClick= () => {

    like == true? setLike(false): setLike(true);

  }
    
    return (
    <div onClick={handleClick} >

      {like == true?<FaHeart className='heart'/>:<FaRegHeart className='heart'/>}
    </div>
  )
}

