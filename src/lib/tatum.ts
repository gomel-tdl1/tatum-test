import { env } from "@/env";
import { Ethereum, ITatumSdkChain, Network, TatumSDK } from "@tatumio/tatum";

const getTatumClient = <T extends ITatumSdkChain>(network: Network) =>
  TatumSDK.init<T>({
    network: network,
    apiKey: { v4: env.VITE_TATUM_API_KEY },
  });

export const tatumEthereumClient = () => getTatumClient<Ethereum>(Network.ETHEREUM)
