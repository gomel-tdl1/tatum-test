import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sleep = (delay: number) =>
  new Promise((res) => setTimeout(() => res(""), delay));

export const numericStringToFixedNoRounding = (
  num: string,
  decimals: number,
) => {
  const scale = Math.pow(10, decimals);
  return Math.trunc(Number(num) * scale) / scale;
};
