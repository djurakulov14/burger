import type { Metadata } from "next";
import "../globals.css";
import Image from "next/image";
import Categories from "../../Components/Categories";
import { useEffect, useState } from "react";
import { Menu } from "@/models/menu";
import { Category } from "@/models/category";
import CategoryLine from "@/Components/CategoryLine";

export const metadata: Metadata = {
  title: "Burgers",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="ru">
      <body className=" bg-[#F9F9F9]">
        <div className="w-full">
			<header className=" text-white bg-[#FFAB08] flex flex-col items-center gap-12 pb-16 rounded-b-[80%]" >
				<div className="top w-full flex flex-col items-center  gap-12">
					<img src='/logo.png' alt="logo" width={200} height={40}/>
				</div>
				<div className="bot flex items-center">
					<img src='/pic.png' alt="logo"/>
					<div className="text w-[450px] flex flex-col gap-12">
						<h1 className="text-[50px] font-bold">Только самые <span className="text-[#FF5C00]">сочные бургеры!</span></h1>
						<span>Бесплатная доставка от 599₽</span>
					</div>
				</div>
			</header>
			<div className=" container m-auto flex justify-between">
				<CategoryLine/>
			</div>
			<div className="flex justify-between gap-5 items-start">
				<aside className="w-[18%] h-fit py-[24px] px-[16px] bg-white sticky left-6 top-10 mt-10 rounded-xl">
					<div className="top flex justify-between">
						<h1 className="text-xl font-bold">Корзина</h1>
						<div className="blok px-[16px] py-[2] flex justify-between bg-[#F2F2F3] rounded-lg">
							0
						</div>
					</div>
				</aside>
				<div className="container m-auto w-[80%]">
					{children}
				</div>
			</div>
		</div>
      </body>
    </html>
  );
}
 