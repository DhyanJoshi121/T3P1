import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ArrowDownToLine, CheckCircle, HelpCircle, Leaf } from "lucide-react";
import React from "react";

const featurePerks = [
  {
    name: "Instant Delivery",
    icon: ArrowDownToLine,
    description:
      "Get your products delivered within week to your desired address.",
  },
  {
    name: "Gurrenteed Quality",
    icon: CheckCircle,
    description:
      "Every product is checked by our team to ensure the best quality.",
  },
  {
    name: "For the Planet",
    icon: Leaf,
    description: "We donate a portion of our profits to help save the planet.",
  },
  {
    name: "Customer Support",
    icon: HelpCircle,
    description:
      "24/7 customer support to assist with your queries and issues.",
  },
];

const StaticCardSection = () => {
  return (
    <section className=" border-t border-gray-200 bg-gray-50">
      <MaxWidthWrapper className=" py-20">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
          {featurePerks.map((perk) => (
            <div
              key={perk.name}
              className=" text-center md:flex md:items-start md:text-left lg:block lg:text-center"
            >
              <div className=" md:flex-shrink-0 flex justify-center">
                <div className=" h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                  {perk.icon && <perk.icon className=" w-1/3 h-1/3" />}
                </div>
              </div>
              <div className="mt-6 md:ml-4 md:ml-0 lg:ml-0 lg:mt-6">
                <h3 className=" text-base font-medium text-gray-900">
                  {perk.name}
                </h3>
                <p className=" mt-3 text-sm text-muted-foreground">
                  {perk.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default StaticCardSection;
