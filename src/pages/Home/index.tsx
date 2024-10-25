import { FadeInWhenVisible } from "@/components/fades";
import { Button } from "@/components/ui/button";
import { CopyBlock } from "@/components/ui/copy-block";

export function Home() {
  return (
    <FadeInWhenVisible>
      <div className="flex flex-col gap-6 items-center pt-40 lg:max-w-[1280px] max-w-[90%] mx-auto">
        <h1 className="text-center md:text-[65px] text-[47px] font-[700] md:leading-[65px] leading-[47px] text-primary_1">
          <span className="bg-gradient-to-br from-gradient_from_1 to-gradient_to_1 text-transparent bg-clip-text">
            The Blockchain
          </span>
          <br /> Development Platform
        </h1>
        <h5 className="text-[20px] text-primary_1 text-center">
          Get everything you need to build your Web3 application.
        </h5>
        <div className="flex items-center md:flex-row flex-col gap-4">
          <CopyBlock text="npm i @tatumio/tatum" />

          <Button>Get Started</Button>
        </div>
      </div>
    </FadeInWhenVisible>
  );
}
