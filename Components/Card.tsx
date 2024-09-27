"use client"
import { useState } from "react";
import MyModal from "./MyModal/MyModal";
import Image from "next/image";

type Props = {
    price?: Number,
    weight?: Number,
    title?: String,
    image?: String
}

const Card = (props: Props) => {

  const [visible, setVisible] = useState(false)

  return (
    <>
        <div className="w-[23%] bg-white p-3 flex flex-col rounded-xl">
            <div className="top flex flex-col gap-2">
                <Image width={280} height={220} src={props.image} alt='burger'/>
                <span className=" font-semibold text-2xl">{props.price}₽</span>
                <h1 className="">{props.title}</h1>
            </div>
            <div className="bot flex flex-col gap-2">
                <span className="text-[#B1B1B1]">{props.weight}г</span>
                <button className="bg-[#F2F2F3] rounded-xl py-3" onClick={() => setVisible(true)}>Добавить</button>
            </div>
        </div>
        <MyModal visible={visible} setVisible={setVisible}>
          <span>hello</span>
        </MyModal>
    </>
  )
}

export default Card;