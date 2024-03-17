import { EditDrawer } from "@/components/editDrawer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import * as WalkingDeadData from "./data";
import { TableDnd } from "@/components/screenDnd";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "陰屍路宇宙——洪偉的元年引擎小助手",
};

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
            sizes="100%; 192px;"
            priority
          />
          <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 p-4 flex justify-start items-end">
            <EditDrawer
              data={Object.values(WalkingDeadData)}
              screenKey="walkingDead"
            />
          </div>
          <div className="absolute top-0 left-0 p-4">
            <Link href="/">
              <Button
                variant="secondary"
                className="w-10 h-10 p-2 rounded-full -bottom-8"
              >
                <ArrowLeftIcon className="w-6 h-6" />
              </Button>
            </Link>
          </div>
          <h1 className="absolute text-2xl font-bold text-white p-4 right-0 bottom-0 drop-shadow-xl pointer-events-none">
            The Walking Dead
          </h1>
        </div>
        <div className="px-0 py-4 sm:px-6">
          <TableDnd screenKey="walkingDead" />
        </div>
      </div>
    </main>
  );
};

export default Page;
