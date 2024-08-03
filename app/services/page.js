import FAQs from "@/components/faqs/FAQs";
import Services from "@/components/services/Services";
import React from "react";

export const metadata = {
  title: "Services",
};

const page = () => {
  return (
    <>
      <Services />
      <FAQs/>
    </>
  );
};

export default page;
