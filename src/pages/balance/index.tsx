import preactLogo from "../../assets/tatum.jpeg";
import Form from "./form";

export function Home() {
  return (
    <div className="flex flex-col gap-4 items-center">
      <a href="https://preactjs.com" target="_blank" rel="noreferrer">
        <img src={preactLogo} alt="Preact logo" height="160" width="160" />
      </a>
      <h1 className="text-[22px] font-bold">Get Ethereum Wallet Balance</h1>
      <Form />
    </div>
  );
}
