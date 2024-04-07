import StaticCardSection from "@/OptionalComponents/StaticCardSection";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className=" py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className=" text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
          Welcome to your Next.js app!
          <span className=" text-violet-600"> highlight text</span>.
        </h1>
        <p className=" mt-6 text-lg max-w-prose text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
          excepturi eveniet quibusdam reprehenderit quos alias accusamus
          repellendus vel quae, perferendis vero animi nesciunt omnis. Ea
          dolorem eos ipsa alias obcaecati.
        </p>
        <div className=" flex flex-col sm:flex-row gap-4 mt-6 ">
          <Link href="/products" className={buttonVariants()}>
            Browse Trending
          </Link>
          <Button variant={"ghost"}>Combo packs &rarr;</Button>
        </div>
      </div>
      {/* TODO: add products and combo boxes */}
      <StaticCardSection />
    </MaxWidthWrapper>
  );
}
