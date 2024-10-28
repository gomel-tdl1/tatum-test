import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useGetBalance } from "@/hooks/use-get-balance";
import { useMemo, useState } from "react";
import Loader from "@/assets/loader.svg";
import { numericStringToFixedNoRounding } from "@/lib/utils";

function Form() {
  const [inputValue, setInputValue] = useState(""); // State to hold the input value

  const { data, isPending, mutate } = useGetBalance();

  const isAddressSameAsFetched = useMemo(
    () => inputValue.toLowerCase() === data?.address.toLowerCase(),
    [inputValue, data],
  );

  // Convert balance data from Tatum API to readable format
  const balance = useMemo(() => {
    if (!data) return null;
    return `${numericStringToFixedNoRounding(data.balance, 6)} ${data.asset ?? ""}`;
  }, [data]);

  return (
    <div className="flex flex-col gap-6 items-center md:w-[360px] w-[90%]">
      <Input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue((e.target as HTMLInputElement).value)}
        placeholder="Enter ETH wallet address to get balance"
      />
      <Button
        variant="outline"
        className="min-w-[120px]"
        disabled={isPending || !inputValue}
        onClick={() => mutate(inputValue)}
      >
        {isPending && <img src={Loader} alt="loader" className="h-2" />}
        {!isPending && isAddressSameAsFetched ? "Update" : "Click Me"}
      </Button>
      {balance && (
        <p className="text-[18px]">
          <span className="font-[600]">Balance:</span> {balance}
        </p>
      )}
    </div>
  );
}

export default Form;
