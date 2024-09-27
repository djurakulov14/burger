import Card from '@/Components/Card';
import Container from '@/Components/Container';
import FormAdd from '@/Components/FormAdd';
import Modal from '@/Components/Modal';
import MyModal from '@/Components/MyModal/MyModal';
import * as React from 'react';
import { IoMdAdd } from "react-icons/io";

const Menu: React.FunctionComponent = () => {

  return (
    <>
    <header className='w-full p-5 flex justify-between items-center'>
		<h1 className=' text-5xl font-bold'>
			Menu
		</h1>
      <Modal>
        <IoMdAdd size={40} className='cursor-pointer'/>
      </Modal>
    </header>
    <div className="main h-full p-5">
		<h1 className="font-bold text-[40px]">Burgers</h1>  
        <Container/>
	  </div>

    </>
  );
};

export default Menu;
