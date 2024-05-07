import { WalletType } from "graz";
import { axelar, cosmoshub, osmosis, sommelier, stargaze } from "graz/chains";

export const mainnetChains = [
   { ...cosmoshub, rpc: "https://localhost:3000/rpc-cosmos", rest: "https://rest-cosmos.kewrnode.com" },
  { ...osmosis, rpc: "https://localhost:3000/rpc-osmo", rest: "https://rest-osmo.kewrnode.com" },
];


export const listedWallets = {
    [WalletType.KEPLR]: {
      name: "Keplr",
      imgSrc: "/assets/wallet-icon-keplr.png",
    },
    [WalletType.WC_KEPLR_MOBILE]: {
        name: "Keplr Mobile",
        imgSrc: "/assets/wallet-icon-keplr.png",
        mobile: true,
      }
    }