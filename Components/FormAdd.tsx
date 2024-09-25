"use client"
import { useRouter } from 'next/navigation'
import React from 'react';
import { useForm } from 'react-hook-form';

interface ModalProps {
    setVisible: Function,
}   


const FormAdd: React.FC<ModalProps> = ({setVisible}) => {
  const { register, handleSubmit, reset } = useForm();

  async function onSubmit(formData:Object) {
    console.log(formData);
    reset();
    setVisible(false)

    try {
      const res = await fetch('http://localhost:3000/api/menu', {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const responseData = await res.json();
      console.log(responseData);
    } catch (error) {
      console.error('Ошибка при отправке данных:', error);
    }
  }


  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              className="popup-field"
              placeholder="Изображение"
              {...register('image')}
            />
            <input
              type="text"
              className="popup-field"
              placeholder="Название"
              {...register('title')}
            />
            <input
              type="number"
              className="popup-field"
              placeholder="Вес"
              {...register('weight')}
            />
            <input
              type="text"
              className="popup-field"
              placeholder="Цена"
              {...register('price')}
            />
            <textarea
              className="popup-textarea"
              placeholder="Состав"
              {...register('composition')}
            ></textarea>
            <textarea
              className="popup-textarea"
              placeholder="Описание"
              {...register('description')}
            ></textarea>
            <button type="submit" className="popup-submit-btn">Добавить</button>
          </form>
  );
};

export default FormAdd;