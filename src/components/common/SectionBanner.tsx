import Image from "next/image";
import React from "react";

type sectionBannerProps = {
  image?: string;
  title?: string;
  route?: string;
};

const SectionBanner = ({ image, title, route }: sectionBannerProps) => {
  return (
    <div className="relative w-full ">
      <figure className="relative">
        {image && (
          <Image
            className="object-cover"
            src={image}
            alt="Checkout Image"
            height={300}
            width={1900}
            priority
          />
        )}
        <div className="absolute h-full w-full bg-black/20 top-0 ">
          <div className="flex flex-col  justify-center h-full">
            <p className="text-white ml-20 text-3xl">{title}</p>
            <p>{route}</p>
          </div>
        </div>
      </figure>
    </div>
  );
};

export default SectionBanner;
