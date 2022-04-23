import React, { useEffect, useRef } from 'react';
import './home.scss';
import headerBg from '../images/bigScreen.png'
import { Chart1 } from '../components/chart-1';


export const Home = () => {
  
  return (
    <div className='home' >
      <header style={{backgroundImage:`url(${headerBg})`}}/>
      <main>
        <section className="section1">
          <Chart1/>
        </section>
        <section className="section2 bordered">1</section>
        <section className="section3 bordered">1</section>
        <section className="section4 bordered">1</section>
        <section className="section5 bordered">1</section>
      </main>
    </div>
  );
};
