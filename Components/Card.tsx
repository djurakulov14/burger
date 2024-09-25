"use client"
import { useState } from "react";
import MyModal from "./MyModal/MyModal";

type Props = {
    price?: Number
}

const Card = (props: Props) => {

  const [visible, setVisible] = useState(false)

  return (
    <>
        <div className="w-[23%] bg-white p-3 flex flex-col rounded-xl">
            <div className="top flex flex-col gap-2">
                <img  src='/photo.png' alt='burger'/>
                <span className=" font-semibold text-2xl">689₽</span>
                <h1 className="">Мясная бомба</h1>
            </div>
            <div className="bot flex flex-col gap-2">
                <span className="text-[#B1B1B1]">520г</span>
                <button className="bg-[#F2F2F3] rounded-xl py-3" onClick={() => setVisible(true)}>Добавить</button>
              <span>hello</span>
            </div>
        </div>
        <MyModal visible={visible} setVisible={setVisible}>
          <span>hello</span>
        </MyModal>
    </>
  )
}

export default Card;