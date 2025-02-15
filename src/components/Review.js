import React, { useState } from 'react'

const Review = ({data}) => {
    const [Index, setIndex] = useState(0);
    const {id, name, job, image, text} =data[Index];

//     const checkNumber =(number)=>{
//        if(number>data.length-1){
//         return 0;
//        }
//        if(number<0){
//         return data.length -1;
//        }
//        return number;
//     }

//     const previouseBtnHandler = ()=>{
//          setIndex((Index)=>checkNumber(Index+1))
//     }
//    const nextBtnHandler =()=>{
//      setIndex((Index)=>checkNumber(Index-1))
//    }



const previouseBtnHandler = () => {
    if (Index <= 0) {
       setIndex(data.length-1);
    } else {
       setIndex(Index - 1);
    }
  };
  const nextBtnHandler = () => {
    if(Index>=data.length-1){
         setIndex(0)
    }else{
        setIndex(Index + 1);
    } 
  };



  return (
    <div className="review">
        <p className='author' id='author-id'>author's name: {name}</p>
        <p className='job'>job: {job}</p>
        <p className='info'>description: {text}</p>
        <p className='person-img'>
            <img src={image} alt='img' width={'300px'} height={'400px'}/>
        </p>
        <div>
            <button className='prev-btn' onClick={previouseBtnHandler}>Previous</button>
            <button className='next-btn' onClick={nextBtnHandler}>Next</button>
        </div>
    </div>
  )
}

export default Review