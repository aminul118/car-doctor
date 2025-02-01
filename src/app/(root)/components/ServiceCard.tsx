import Image from "next/image";
import Link from "next/link";
import React from "react";

type serviceCardProps = {
  service: {
    img: string;
    title: string;
    price: string;
    _id: string;
  };
};

const ServiceCard = ({ service }: serviceCardProps) => {
  const { img, title, price, _id } = service;
  console.log(service);

  return (
    <div>
      <Link href={`/services/${_id}`} className="card bg-gray-100  ">
        <figure className="px-2 ">
          <Image
            className="w-full h-44 object-cover rounded-md"
            src={img}
            alt={service.title}
            height={600}
            width={1000}
            priority
          />
        </figure>
        <div className="px-2 ">
          <h2 className="text-xl">{title}</h2>
          <p>{price}</p>
        </div>
      </Link>
    </div>
  );
};

export default ServiceCard;
