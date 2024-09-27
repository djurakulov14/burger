import * as React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface IFormInput {
    title: string;
    image: string;
  }

interface props {
    children: React.ReactNode,
  }

const AddCategory: React.FunctionComponent<props> = (props) => {
    const [visible, setVisible] = React.useState(false)

    const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormInput>();

  // Функция обработки отправки формы с типизацией данных
  const onSubmit: SubmitHandler<IFormInput> = async (data:Object) => {
    reset();

    setVisible(false)
    try {
      const res = await fetch('http://localhost:3000/api/category', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const responseData = await res.json();
      console.log(responseData);
    } catch (error) {
      console.error('Ошибка при отправке данных:', error);
    }
  };

  return (

    <>
			<div onClick={() => setVisible(true)}>{props.children}</div>

			{visible && (
				<div
					className="fixed top-0 left-0 w-full h-screen flex items-center justify-center text-black"
					style={{
						background: "rgba(0,0,0,0.5)",
						backdropFilter: "blur(10px)",
					}}
				>
					<div className="w-[500px] h-fit bg-white rounded-md p-4">
						<button onClick={() => setVisible(false)}>x</button>
						<form className='flex flex-col gap-5' onSubmit={handleSubmit(onSubmit)}>
              {/* Поле 1 */}
              <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Изображение"
            {...register('image')}
          />
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Название"
            {...register('title')}
          />
              {/* Кнопка отправки */}
              <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Добавить
            </button>
            </form>
					</div>
				</div>
			)}
		</>
    
  ) ;
};

export default AddCategory;
