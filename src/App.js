import './App.css';

function Board(){
  return (
    <div className='justify-items-center' >
      <h1 className='text-sky-500 bg-lime-700'>TicTacToe</h1>
    </div>
  );
}

function App() {
  return (
    <div >
      <Board/>
    </div>
  );
}

export default App;
