"use client"
import { Category } from '@/models/category';
import * as React from 'react';
import Categories from './Categories';

interface ICategoryLineProps {
}

const CategoryLine: React.FunctionComponent<ICategoryLineProps> = (props) => {
    const [categories, setCategories] = React.useState<Category[]>([]);

	React.useEffect(() => {
	  async function fetchCategories() {
		try {
		  const res = await fetch('http://localhost:3000/api/category');
		  const data = await res.json();
		  setCategories(data.data);
		} catch (error) {
		  console.error('Ошибка при загрузке категорий:', error);
		}
	  }
	  fetchCategories();
	}, []);

  return (
    <>
        {
            categories.map((item:any) => <Categories key={item._id} {...item}/>)
        }
    </>
  );
};

export default CategoryLine;
