import { useBalanceStaked } from "graz";

export const BalanceStaked = () => {
  const { data: balanceStaked, isLoading } = useBalanceStaked({
    bech32Address: "osmo1jajkjqnader7h7m6t83tst6z5k2v97u98yqnhl",
    chainId: ["osmosis-1"],
    multiChain: true,
  });

  return (
    <div>
      
      {isLoading ? (
        "Fetching staked balance..."
      ) : balanceStaked && Object.entries(balanceStaked).map(([chainId, coin]) => {
          // Tambahkan pengecekan apakah coin tidak null sebelum mengakses properti 'amount'
          return coin ? (
            <div key={chainId}>
              <p>{chainId} balance staked : {coin.amount} {coin.denom}</p>
            </div>
          ) : null;
        })
      }
    </div>
  );
};
