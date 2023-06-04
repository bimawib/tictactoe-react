import './App.css';

function TextHeader(){
  return (
    <div>
      <h1 className='text-slate-100 bg-teal-900 w-1/4 mx-auto text-center text-5xl font-serif my-4 h-full rounded-lg'>Tic~Tac~Toe</h1>
    </div>
  );
}

function InfoPanel(){
  return (
    <div className='text-slate-100 bg-teal-900 w-1/4 mx-auto text-center text-5xl font-serif my-4 h-full rounded-lg py-6'>
      <h1>Next Turn : O</h1>
      <span className='rounded-sm bg-yellow-400'>
      <button>Reset</button>
      </span>
    </div>
  );
}

function Board(){
  function Area(i){
    return (
      <button className='w-32 h-32 border-4 text-white border-stone-400 border-x-stone-500 rounded-sm'>X</button>
    );
  }

  return (
    <div className='bg-slate-800 w-96 shadow-xl mx-auto rounded-lg h-full'>
        <div className='flex justify-center w-full'>
          <Area/>
          <Area/>
          <Area/>
        </div>
        <div className='flex justify-center w-full'>
          <Area/>
          <Area/>
          <Area/>
        </div>
        <div className='flex justify-center w-full'>
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
      <InfoPanel/>
    </div>
  );
}

export default App;
