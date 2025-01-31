import Image from "next/image";
import React from "react";

type sectionBannerProps = {
  image?: string;
  title?: string;
  route?: string;
};

const SectionBanner = ({ image, title, route }: sectionBannerProps) => {
  return (
    <div>
      {image && (
        <Image src={image} alt={title || "Banner"} width={500} height={300} />
      )}
      <h3>{title}</h3>
      <p>{route}</p>
    </div>
  );
};

export default SectionBanner;
