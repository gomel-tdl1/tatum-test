import CopyIcon from "@/assets/copy.svg";
import { cn, sleep } from "@/lib/utils";
import { FC, HTMLAttributes, useCallback, useRef } from "preact/compat";

interface ICopyBlock extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  text: string;
}

export const CopyBlock: FC<ICopyBlock> = ({ text, className, ...props }) => {
  const ref = useRef(null);

  const handleClick = useCallback(async () => {
    navigator.clipboard.writeText(text);
    ref.current.innerText = "Copied!";
    await sleep(1000);
    ref.current.innerText = text;
  }, [text]);

  return (
    <div
      className={cn(
        "bg-neutral_2 rounded-[5px] p-[14px] w-[280px] font-inconsolata text-primary_3 flex items-center justify-between",
        className,
      )}
      {...props}
    >
      <p ref={ref}>{text}</p>
      <img
        src={CopyIcon}
        alt="copy"
        className="h-[23px] cursor-pointer"
        onClick={handleClick}
      />
    </div>
  );
};
