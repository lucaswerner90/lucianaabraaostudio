import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface IPropsPage{
  children: React.ReactNode
}

export default function Page({children}:IPropsPage) {
  return (
    <React.Fragment>
      <Header/>
      {children}
      <Footer/>
    </React.Fragment>
  );
}