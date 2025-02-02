import React from "react";
import { ChildrenProps } from "../layout";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const MainLayout = ({ children }: ChildrenProps) => {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-288px)] container mx-auto px-2">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
