import { WalletType } from "graz";
import { axelar, cosmoshub, osmosis, sommelier, stargaze } from "graz/chains";

export const mainnetChains = [
  { ...cosmoshub, rpc: "http://localhost:3000/rpc-cosmos", rest: "http://localhost:3000/rest-cosmos" },
  { ...osmosis, rpc: "http://localhost:3000/rpc-osmo", rest: "http:localhost:3000/rest-osmo" },
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