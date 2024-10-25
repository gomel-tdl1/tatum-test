import { tatumEthereumClient } from "@/lib/tatum";
import { useMutation } from "@tanstack/react-query";
import { isAddress } from "ethers";

export const useGetBalance = () => {
  return useMutation({
    mutationKey: ['get-balance'],
    mutationFn: async (address: string) => {
      if (!isAddress(address)) throw new Error("Invalid address");

      const tatum = await tatumEthereumClient();

      const balance = await tatum.address.getBalance({
        addresses: [address],
        tokenTypes: ["native"],
      });

      if (!balance || !balance.data || !balance.data[0]) {
        const err = balance.error && balance.error.message[0];
        throw new Error((err as string) || "Unknown error");
      }

      return balance.data[0];
    },
    onError: (error) => {
        console.error(error)
    }
  });
};
