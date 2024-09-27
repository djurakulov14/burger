import Image from 'next/image';
import * as React from 'react';

export interface IAppProps {
  image: string,
  title: string
}

export default function Categories (props: IAppProps) {
  return (
    <div className="cat py-2 px-3 flex items-center gap-2 bg-white rounded-full cursor-pointer">
        <Image width={35} height={35} src={props.image} alt="burger" />
        <span>{props.title}</span>
    </div>
  );
}
