"use client";

import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

import HomeLayout from "@/app/home/layout";

export default function HomePage() {
  const list = [
    {
      title: "Orange",
      img: "https://nextui.org/images/hero-card-complete.jpeg",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "https://nextui.org/images/album-cover.png",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      img: "https://nextui.org/images/fruit-8.jpeg",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "https://nextui.org/images/fruit-7.jpeg",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "https://nextui.org/images/fruit-6.jpeg",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "https://nextui.org/images/fruit-5.jpeg",
      price: "$8.00",
    },
    {
      title: "Banana",
      img: "https://nextui.org/images/fruit-4.jpeg",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: "https://nextui.org/images/fruit-3.jpeg",
      price: "$12.20",
    },
    {
      title: "Watermelon",
      img: "https://nextui.org/images/fruit-2.jpeg",
      price: "$12.20",
    },
    {
      title: "Watermelon",
      img: "https://nextui.org/images/fruit-1.jpeg",
      price: "$12.20",
    },
    {
      title: "Watermelon",
      img: "https://nextui.org/images/card-example-5.jpeg",
      price: "$12.20",
    },
    {
      title: "Watermelon",
      img: "https://nextui.org/images/card-example-6.jpeg",
      price: "$12.20",
    },
    {
      title: "Watermelon",
      img: "https://nextui.org/images/card-example-2.jpeg",
      price: "$12.20",
    },
    {
      title: "Watermelon",
      img: "https://nextui.org/images/card-example-3.jpeg",
      price: "$12.20",
    },
    {
      title: "Watermelon",
      img: "https://nextui.org/images/card-example-4.jpeg",
      price: "$12.20",
    },
    {
      title: "Watermelon",
      img: "https://blogback.yannqing.com/api/v2/objects/avatar/0vqxqul8pu2skmwokn.jpg",
      price: "$12.20",
    },
  ];

  return (
    <HomeLayout>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 m-4">
        {list.map((item, index) => (
          <Card
            key={index}
            isPressable
            shadow="sm"
            onPress={() => console.log("item pressed")}
          >
            <CardBody className="overflow-visible p-0">
              <Image
                alt={item.title}
                className="w-full object-cover h-[140px]"
                radius="lg"
                shadow="sm"
                src={item.img}
                width="100%"
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{item.title}</b>
              <p className="text-default-500">{item.price}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </HomeLayout>
  );
}
