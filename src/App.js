import './App.css';
// import { useState, useEffect, createContext, useContext } from 'react';
import store from './store';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { addInput, resetState, setWinner } from './reduxToolkit';

function TextHeader(){
  return (
    <div>
      <h1 className='text-slate-100 bg-teal-900 w-1/4 mx-auto text-center text-5xl font-serif my-4 h-full rounded-lg'>Tic~Tac~Toe</h1>
    </div>
  );
}

function InfoPanel(){
  const winner = useSelector((state) => state.game.winner);
  const turn = useSelector((state) => state.game.turn);

  return (
    <div className='text-slate-100 bg-teal-900 w-1/4 mx-auto text-center text-5xl font-serif my-4 h-full rounded-lg py-6'>
      {!winner && <h1>Next Turn : {turn%2 === 0 ? 'O' : 'X'}</h1>}
      <div className='rounded-sm'>
      {winner !== '' ? <WinnerModal/> :''}
      </div>
    </div>
  );
}

function WinnerModal(){
  const winner = useSelector((state) => state.game.winner);
  const dispatch = useDispatch();

  return (
    <div className=''>
      <h1>Winner : {winner}</h1>
      <span className='rounded-sm'>
      {winner && <button className='bg-blue-500 backdrop:text-slate-100 rounded-lg px-4 py-2 mt-4 border-cyan-950 border-4' onClick={() => dispatch(resetState())}>Play Again</button>}
      </span>
    </div>
  );
}

function Board(){
  const dispatch = useDispatch();
  const turn = useSelector((state) => state.game.turn);
  const playerInput = useSelector((state) => state.game.playerInput);
  const playerO = playerInput[0];
  const playerX = playerInput[1];
  const winner = useSelector((state) => state.game.winner);

  function CheckWinner(boxNumber){
    const winningCombos = [
      [1, 2, 3], [4, 5, 6], [7, 8, 9], // horizontal
      [1, 4, 7], [2, 5, 8], [3, 6, 9], // vertical
      [1, 5, 9], [3, 5, 7] // diagonal
    ];
    for(let i = 0; i < winningCombos.length; i++){
      if(playerO.includes(winningCombos[i][0]) && playerO.includes(winningCombos[i][1]) && playerO.includes(winningCombos[i][2])){
        dispatch(setWinner({winner: 'O'}));
      } else if(playerX.includes(winningCombos[i][0]) && playerX.includes(winningCombos[i][1]) && playerX.includes(winningCombos[i][2])){
        dispatch(setWinner({winner: 'X'}));
      } else if(turn === 9){
        dispatch(setWinner({winner: 'Draw'}));
      }
    }
  }

  function HandleClick(index){
    if(playerO.includes(index) || playerX.includes(index)){
      alert('This area is already taken');
    } else {
      CheckWinner(index);
      console.log(index);
      console.log(winner);
      console.log(playerO);
      console.log(playerX);
      dispatch(addInput({inputIndex: index, turn: turn}));
    }
  }

  function Area(i){
    const boxNumber = i.boxNumber;
    return (
      <button className='w-32 h-32 border-4 text-4xl text-white border-stone-400 border-x-stone-500 rounded-sm' onClick={() => HandleClick(boxNumber)}>
        {playerO.includes(boxNumber) ? 'O' : playerX.includes(boxNumber) ? 'X' : ''}
        {/* {i.boxNumber} */}
      </button>
    );
  }

  return (
    <div className='bg-slate-800 w-96 shadow-xl mx-auto rounded-lg h-full'>
        <div className='flex justify-center w-full'>
          <Area key={1} boxNumber={1}/>
          <Area key={2} boxNumber={2}/>
          <Area key={3} boxNumber={3}/>
        </div>
        <div className='flex justify-center w-full'>
          <Area key={4} boxNumber={4}/>
          <Area key={5} boxNumber={5}/>
          <Area key={6} boxNumber={6}/>
        </div>
        <div className='flex justify-center w-full'>
          <Area key={7} boxNumber={7}/>
          <Area key={8} boxNumber={8}/>
          <Area key={9} boxNumber={9}/>
        </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Provider store={store}>
        <TextHeader/>
        <Board/>
        <InfoPanel/>
      </Provider>
    </div>
  );
}

export default App;
