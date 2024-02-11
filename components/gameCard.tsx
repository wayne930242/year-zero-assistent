import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export const GameCard = ({ name, image, description, url }: Props) => {
  return (
    <Link href={url}>
      <Card className="hover:bg-gray-100 cursor-pointer">
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full relative h-80">
            <Image
              className="object-cover"
              src={image}
              alt={name}
              fill
              sizes="width: 420px, height: 320px"
              priority
            />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

interface Props {
  name: string;
  image: string;
  description: string;
  url: string;
}
