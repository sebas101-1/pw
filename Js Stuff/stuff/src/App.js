import './App.css';
import React, {useState} from 'react';
let count = 0;
let arrval = 1
let turn = -1
let totNum = 0;
let lst = [];
function Square({setClass}){
  if(setClass==undefined){
    setClass='Square'
  }
  else{
    setClass+=' Square'
  }
  console.log(setClass)
    let sqrNum = totNum;
  totNum++;
  const [value,SetValue] = useState(null);
  lst[sqrNum] = value;
  return <button className={setClass}onClick={buttonClick}>{value}</button>
  function buttonClick(){
    lst[sqrNum] = value;
    if(lst[sqrNum] == null){
      turn*=-1
      if(turn>0){
        SetValue('X')
        
      }
      else{
        SetValue('O')
      }
    }
    if(lst[0]==lst[1] & lst[1]==lst[2] & lst[0]=='X' | lst[0] == 'O'){
      // setGameVal(lst[0] +" Has Won");
    }
    
  }
}
function Game(){
  let [gameVal, setGameVal] = useState('Click To start');
  return(
    <p>{gameVal}</p>
  );
}
function App() {
  return (
    <>
    <p>Tick Tack Toe</p>
    <hr/>
      <div className='Board'>
        <div>
          <Square setClass='tpL'/>
          <Square/>
          <Square setClass='tpR'/>
        </div>
        <div>
          <Square/>
          <Square/>
          <Square/>
        </div>
        <div>
          <Square setClass='btL'/>
          <Square/>
          <Square setClass='btR'/>
        </div>
      </div>
      <Game/>
    </>
  );
}

export default App;
