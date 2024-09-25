import Card from "../../Components/Card";
import { getDictionary } from "./dictionaries";


export default async function Home({
	params: { lang },
}: {
	params: { lang: string };
}) {

  const translation = await getDictionary(lang);

  const res = await fetch("http://localhost:3000/api/menu")
  const data = await res.json()
  
  console.log(data);
  

  return (
    <>
	<div className="main h-full">
		<h1 className="font-bold text-[40px]">{translation.header.mainTitle}</h1>
      <div className=" flex flex-wrap gap-8">
        {
          data.data.map((item:any) => {      
            <Card/>    
          })
        }
      </div>

	</div>
    </>
  );
}
