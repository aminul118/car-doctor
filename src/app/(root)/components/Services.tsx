import SectionTitle from "@/components/common/SectionTitle";
import getAllServices from "@/lib/getAllServices";
import React from "react";
import ServiceCard from "./ServiceCard";

const Services = async () => {
  const services = await getAllServices();
  console.log(services);
  return (
    <>
      <SectionTitle
        sectionName="Services"
        title="Our Service Area"
        description="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
      />
      <div className="grid grid-cols-3 gap-6">
        {services?.map((service) => (
          <ServiceCard service={service} key={service._id.toString()} />
        ))}
      </div>
    </>
  );
};

export default Services;
