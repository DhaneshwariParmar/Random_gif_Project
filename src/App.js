import React from 'react';
import './index.css';
import Random from './components/Random';
import Tag from './components/Tag';

function App() {
  return (
    <div className='h-full bg-blue-300 gap-y-5  flex flex-col justify-center items-center ' >
      <h2 className='w-10/12 bg-gray-100  mt-3 rounded-lg py-2 text-center text-3xl font-bold'>Random Gif</h2>
      <div className='flex gap-y-5 flex-col items-center w-full' >
        <Random />
        <Tag />
      </div>
      </div>
  );
}

export default App;
