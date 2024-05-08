import { useBalances } from "graz";


export const BalanceList = () => {
  const { data: balances, isLoading } = useBalances({
    bech32Address: "osmo1syeqptfl0p0g6rqaw6g6erq03u8fn2vlvl6ahd",
    chainId: ["osmosis-1"],
    multiChain: true,
  });

    
  return (
    <div>
      Balances:
      {isLoading ? (
        "Fetching balances njing"
      ) : balances && Object.entries(balances).map(([chainId, coins]) => {
          return(
            <div>
              <p>{chainId} balances</p>
              <ul>
                {coins?.map((coin) => (
                  <li key={coin.denom}>
                    {coin.amount} {coin.denom}
                  </li>
                ))}
              </ul>
            </div>
          );
        })
      }
    </div>
  );
};