import React from 'react';
import './home.scss';
import headerBg from '../images/bigScreen.png'

export const Home = () => {
  return (
    <div className='home' >
      <header style={{backgroundImage:`${(headerBg)}`}}/>
    </div>
  );
};
