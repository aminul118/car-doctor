import getAService from "@/lib/getAService";
import React from "react";

export type pramsProps = {
  params: {
    id: string;
  };
};

const ServiceDetails = async ({ params }: pramsProps) => {
  const { id } = await params;
  const service = await getAService(id);
  console.log(service);

  return <div>Service ID: {id}</div>;
};

export default ServiceDetails;
