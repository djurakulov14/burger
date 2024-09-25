"use client"
import Card from '@/Components/Card';
import Container from '@/Components/Container';
import FormAdd from '@/Components/FormAdd';
import MyModal from '@/Components/MyModal/MyModal';
import * as React from 'react';
import { IoMdAdd } from "react-icons/io";

const Menu: React.FunctionComponent = () => {
  const [visible, setVisible] = React.useState(false)


  return (
    <>
    <header className='w-full bg-black p-5 text-white flex justify-center items-center'>
        <IoMdAdd size={40} onClick={() => setVisible(true)} className='cursor-pointer'/>
    </header>
    <div className="main h-full">
		<h1 className="font-bold text-[40px]">Burgers</h1>  
        <Container/>
	</div>
    <MyModal visible={visible} setVisible={setVisible}>
        <FormAdd setVisible={setVisible}/>
    </MyModal>
    </>
  );
};

export default Menu;
