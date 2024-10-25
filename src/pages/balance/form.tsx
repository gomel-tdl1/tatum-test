import { useGetBalance } from "@/hooks/use-get-balance";
import { useMemo, useState } from "react";

function Form() {
  const [inputValue, setInputValue] = useState(""); // State to hold the input value

  const { data, isPending, isIdle, mutate } = useGetBalance();

  const balance = useMemo(() => {
    if (!data) return null;
    return `${data.balance} ${data.asset ?? ""}`;
  }, [data]);

  return (
    <div className="flex flex-col gap-6 items-start">
      <p>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter ETH wallet address to get balance"
          style={{ padding: "5px", width: "320px" }}
        />
      </p>
      <button onClick={() => mutate(inputValue)} style={{ padding: "5px" }}>
        Click Me
      </button>
    </div>
  );
}

export default Form;
