"use client"
import * as React from 'react';
import Card from './Card';

interface IContainerProps {
}

const Container: React.FunctionComponent<IContainerProps> = async (props) => {

    const res = await fetch("http://localhost:3000/api/menu")
    const data = await res.json()

    console.log(data);
    

  return (
    <>
    <div className=" flex flex-wrap gap-8">
        {
          data.data.map((item:any) => <Card/>)
        }
    </div>
    </>
  );
};

export default Container;
