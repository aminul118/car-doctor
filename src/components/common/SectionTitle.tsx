import React from "react";

type SectionProps = {
  sectionName?: string;
  title?: string;
  description?: string;
};
const SectionTitle = ({ sectionName, title, description }: SectionProps) => {
  return (
    <div className="text-center max-w-lg mx-auto space-y-3 py-8">
      <p className="text-red-600 font-bold">{sectionName}</p>
      <h3 className="text-4xl font-bold">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default SectionTitle;
