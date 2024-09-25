import * as React from 'react';

export interface IAppProps {
}

export default function Categories (props: IAppProps) {
  return (
    <div className="cat py-2 px-3 flex items-center gap-2 bg-white rounded-full">
        <img src="/burgerrrr.png" alt="burger" />
        <span>Бургеры</span>
    </div>
  );
}
