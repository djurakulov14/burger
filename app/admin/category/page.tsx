"use client"
import CategoryLine from '@/Components/CategoryLine';
import AddCategory from '@/Components/ModalAddCategory';
import * as React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IoMdAdd } from 'react-icons/io';

interface ICategoryProps {
}

interface IFormInput {
    title: string;
    image: string;
  }

const Category: React.FunctionComponent<ICategoryProps> = (props) => {

 

  return (
    <>
    <header className='w-full p-5 flex justify-between items-center'>
		<h1 className=' text-5xl font-bold'>
			Menu
		</h1>
      <AddCategory>
        <IoMdAdd size={40} className='cursor-pointer'/>
      </AddCategory>
    </header>
    <div className="main h-full p-5">
		<h1 className="font-bold text-[40px]">Category</h1>
      <div className=" container m-auto flex flex-col gap-3">
				<CategoryLine/>
			</div>
	  </div>
    </>
  );
};

export default Category;
