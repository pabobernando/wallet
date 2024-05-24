import { useBalances } from "graz";
import { osmosis, cosmoshub } from "graz/chains";

const denomAliases = {
  "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2": "ATOM",
  "ibc/56D7C03B8F6A07AD322EEE1BEF3AE996E09D1C1E34C27CF37E0D4A0AC5972516": "PICA",
  "ibc/6B2B19D874851F631FF0AF82C38A20D4B82F438C7A22F41EDA33568345397244": "DOT",
  "ibc/9BBA9A1C257E971E38C1422780CE6F0B0686F0A3085E2D61118D904BFE0F5F5E": "SOMM",
  "ibc/D79E7D83AB399BFFF93433E54FAA480C191248FC556924A2A8351AE2638B3877": "TIA",
  "uosmo": "OSMO",
};

export const BalanceList = () => {
  const { data: balances, isLoading } = useBalances({
    chainId: [osmosis.chainId, cosmoshub.chainId],
    multiChain: true,
  });

  return (
    <div className="container mx-auto p-4">
      {isLoading ? (
        <div className="text-center text-gray-500">Fetching balances...</div>
      ) : (
        balances &&
        Object.entries(balances).map(([chainId, coins]) => (
          <div key={chainId} className="mb-6 p-4 border border-gray-300 rounded-lg shadow-md">
            <p className="text-2xl font-semibold text-gray-800 mb-4">{chainId} Balances:</p>
            <ul className="list-disc pl-5">
              {coins?.map((coin) => (
                <li key={coin.denom} className="text-lg text-gray-700 mb-2">
                  {coin.amount} {denomAliases[coin.denom] || coin.denom}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};
