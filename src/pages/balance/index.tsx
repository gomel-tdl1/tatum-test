import { FadeInWhenVisible } from "@/components/fades";
import Form from "@/pages/balance/form";
import { Toaster } from "@/components/ui/sonner";

export default function Balance() {
  return (
    <FadeInWhenVisible>
      <div className="flex flex-col gap-4 items-center pt-40">
        <h1 className="text-[24px] font-bold bg-gradient-to-br from-gradient_from_1 to-gradient_to_1 text-transparent bg-clip-text">
          Get Ethereum Wallet Balance
        </h1>
        <Form />
      </div>
      <Toaster />
    </FadeInWhenVisible>
  );
}
