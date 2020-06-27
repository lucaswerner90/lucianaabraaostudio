import React from 'react';
import Header from '../components/Header';

interface IPropsPage{
  children: React.ReactNode
}

export default function Page({children}:IPropsPage) {
  return (
    <React.Fragment>
        <Header/>
        {children}
    </React.Fragment>
  );
}