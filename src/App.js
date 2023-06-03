import './App.css';

function TextHeader(){
  return (
    <div>
      <h1 className='text-indigo-800 bg-teal-300 w-48 h-24 mx-auto text-center'>TicTacToe</h1>
    </div>
  );
}

function Board(){
  function Area(i){
    return (
      <button className='w-24 h-24 border-4 border-indigo-200'></button>
    );
  }

  return (
    <div className='bg-teal-500 w-3/4 h- shadow-lg mx-auto'>
        <div className='flex justify-center'>
          <Area/>
          <Area/>
          <Area/>
        </div>
        <div className='flex justify-center'>
          <Area/>
          <Area/>
          <Area/>
        </div>
        <div className='flex justify-center'>
          <Area/>
          <Area/>
          <Area/>
        </div>
    </div>
  );
}

function App() {
  return (
    <div >
      <TextHeader/>
      <Board/>
    </div>
  );
}

export default App;
