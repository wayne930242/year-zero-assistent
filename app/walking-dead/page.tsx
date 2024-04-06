import Image from "next/image";
import * as tableData from "./table-data";
import { TableElementCategories } from "./schema-data";
import { TableDnd } from "@/components/screenDnd";
import { Metadata } from "next";
import { EditContent } from "@/components/editContent";
import { EditorAccordion } from "@/components/editorAccordion";

export const metadata: Metadata = {
  title: "陰屍路宇宙——洪偉的元年引擎小助手",
};

const Page = () => {
  return (
    <>
      <div className="w-full h-48 relative">
        <Image
          className="object-cover"
          src="/images/cover/walking-dead.jpeg"
          alt="walking-dead-cover"
          fill
          sizes="100%; 192px;"
          priority
        />
        <h1 className="absolute text-2xl font-bold text-white p-4 right-0 bottom-0 drop-shadow-xl pointer-events-none">
          The Walking Dead
        </h1>
      </div>
      <div className="lg:container lg:mx-auto bg-background">
        <div className="w-full">
          <EditorAccordion>
            <EditContent
              data={Object.values(tableData)}
              screenKey="walkingDead"
              searchData={{
                categories: TableElementCategories,
              }}
            />
          </EditorAccordion>
        </div>
        <div className="px-0 py-4 sm:px-6">
          <TableDnd screenKey="walkingDead" />
        </div>
      </div>
    </>
  );
};

export default Page;
