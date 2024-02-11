import { TableSelector } from "@/components/tableSelector";
import Image from "next/image";

const Page = () => {
  return (
    <main>
      <div className="lg:container lg:mx-auto">
        <div className="w-full h-48 relative">
          <Image
            className="object-cover"
            src="/images/cover/walking-dead.jpeg"
            alt="walking-dead-cover"
            fill
            sizes="width:100%, height: 192px"
            priority
          />
          <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 p-4 flex justify-start items-end">
            <TableSelector />
          </div>
          <h1 className="absolute text-4xl font-bold text-white p-4 right-0 bottom-0 drop-shadow-xl">
            The Walking Dead
          </h1>
        </div>
        <div>
          
        </div>
      </div>
    </main>
  );
};

export default Page;
