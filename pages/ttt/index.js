'use client'
import Navbar from '@/components/navbar/Navbar';
import './mycss.css'
import { useState } from 'react'




export default function Ttt() {
  console.log("updated");
  
  const [arr, setArr] = useState(
    [null,null,null,null,null,null,null,null,null]
  );
  const [turn,setTurn]=useState(1);
  const [winner,setWinner]=useState(0);


  function checkWinner(){

    if(arr[0] && arr[1] && arr[2] && arr[0]===arr[1] && arr[0]==arr[2]){
      console.log("winner1");
        //setWinner(1);
        return 1;
    }else if( arr[0] && arr[3] && arr[6] && arr[0]===arr[3] && arr[0]===arr[6] && arr[0] !=''){
      console.log("winner2");
      //setWinner(1);
      return 1;
    }else if(arr[0] && arr[4] && arr[8] && arr[0]===arr[4] && arr[0]===arr[8]  && arr[0] !=''){
      console.log("winner3");
      //setWinner(1);
      return 1;
    }else if( arr[1] && arr[4] && arr[7] && arr[1]===arr[4] && arr[1]===arr[7]  && arr[1] !=''){
      console.log("winner4");
      //setWinner(1);
      return 1;
    }else if(arr[2] && arr[5] && arr[8] && arr[2]===arr[5] && arr[2]===arr[8]  && arr[2] !=''){
      console.log("winner5");
      //setWinner(1);
      return 1;
    }else if(arr[3] && arr[4] && arr[5] &&  arr[3]==arr[4] && arr[3]===arr[5]  && arr[3] !=''){
      console.log("winner6");
      //setWinner(1);
      return 1;
    }else if(arr[6] && arr[7] && arr[8] && arr[6]===arr[7] && arr[6]===arr[8]  && arr[6] !=''){
      console.log("winner7");
      //setWinner(1);
      return 1;
    }else if(arr[6] && arr[4] && arr[2] && arr[6]===arr[4] && arr[6]===arr[2]  && arr[6] !=''){
      console.log("winner8");
      //setWinner(1);
      return 1;
    } else {
      return 0;
    }
  }
  const win=checkWinner();
  




  
  function handleupdate(index) {
    console.log("working");
    const updated = arr.map((c, i) => {
      if (i == index && turn%2==0 && !arr[i]) {
        setTurn(turn+1)
        return 'X';
      } else if(i==index && turn%2==1 && !arr[i]) {
        setTurn(turn+1)
        return 'O';
      } else{
        return c;
      }
    });
    setArr(updated);
    //checkWinner();
    // if(arr[0]===arr[1] && arr[0]==arr[2]  && arr[0] !=''){
    //   console.log("winner1");
    //      setWinner(1);
    // }else if(arr[0]===arr[3] && arr[0]===arr[6] && arr[0] !=''){
    //   console.log("winner2");
    //   setWinner(1);
    // }else if(arr[0]===arr[4] && arr[0]===arr[8]  && arr[0] !=''){
    //   console.log("winner3");
    //   setWinner(1);
    // }else if(arr[1]===arr[4] && arr[1]===arr[7]  && arr[1] !=''){
    //   console.log("winner4");
    //   setWinner(1);
    // }else if(arr[2]===arr[5] && arr[2]===arr[8]  && arr[2] !=''){
    //   console.log("winner5");
    //   setWinner(1);
    // }else if(arr[3]==arr[4] && arr[3]===arr[5]  && arr[3] !=''){
    //   console.log("winner6");
    //   setWinner(1);
    // }else if(arr[6]===arr[7] && arr[6]===arr[8]  && arr[6] !=''){
    //   console.log("winner7");
    //   setWinner(1);
    // }else if(arr[6]===arr[4] && arr[6]===arr[2]  && arr[6] !=''){
    //   console.log("winner8");
    //   setWinner(1);
    // }
    console.log(winner);
  }

  
  return (
      <>
      <Navbar/>
      <div className='maindiv'>
        
        <div>
      <div className='row'>
        <button onClick={() => {handleupdate(0);checkWinner();}} className='mydiv'>{arr[0]}</button>
        <button onClick={() => {handleupdate(1);checkWinner();}}  className='mydiv'>{arr[1]}</button>
        <button onClick={() => {handleupdate(2);checkWinner();}}  className='mydiv'>{arr[2]}</button>
      </div>
      <div className='row'>
        <button onClick={() => {handleupdate(3);checkWinner();}}  className='mydiv'>{arr[3]}</button>
        <button onClick={() => {handleupdate(4);checkWinner();}}  className='mydiv'>{arr[4]}</button>
        <button onClick={() => {handleupdate(5);checkWinner();}}  className='mydiv'>{arr[5]}</button>
      </div>
      <div className='row'>
        <button onClick={() => {handleupdate(6);checkWinner();}}  className='mydiv'>{arr[6]}</button>
        <button onClick={() => {handleupdate(7);checkWinner();}}  className='mydiv'>{arr[7]}</button>
        <button onClick={() => {handleupdate(8);checkWinner();}}  className='mydiv'>{arr[8]}</button>
      </div>
      </div>
      

      {win==1 && turn%2==0 && (<div className='winner'>Congratulation O,you are the winner &#128293;&#128293;&#128293;</div>)}
      {win==1 && turn%2==1 && (<div className='winner'>Congratulation X,you are the winner &#128293;&#128293;&#128293;</div>)}

      </div>
      </>
    
  )
}
