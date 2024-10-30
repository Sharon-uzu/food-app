import React from 'react';
import HomeContainer from './HomeContainer';

const MainContainer = () => {
  return (
    <div className='w-full md:h-[calc(100vh-100px)] flex flex-col items-center justify-center'>
      <HomeContainer/>
      
    </div>
  )
}

export default MainContainer