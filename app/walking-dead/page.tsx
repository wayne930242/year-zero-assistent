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
        </div>
      </div>
    </main>
  );
};

export default Page;
