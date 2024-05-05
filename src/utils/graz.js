import { WalletType } from "graz";
import { axelar, cosmoshub, osmosis, sommelier, stargaze } from "graz/chains";

export const mainnetChains = [
  { ...cosmoshub, rpc: "https://rpc-cosmos.kewrnode.com", rest: "https://rest-cosmos.kewrnode.com" },
  { ...sommelier, rpc: "https://rpc.cosmos.directory/sommelier", rest: "https://rest.cosmos.directory/sommelier" },
  { ...stargaze, rpc: "https://rpc.cosmos.directory/stargaze", rest: "https://rest.cosmos.directory/stargaze" },
  { ...axelar, rpc: "https://rpc.cosmos.directory/axelar", rest: "https://rest.cosmos.directory/axelar" },
  { ...osmosis, rpc: "https://rpc-osmo.kewrnode.com", rest: "https://rest-osmo.kewrnode.com" },
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