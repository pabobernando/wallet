
import { useBalances } from "graz";


export const BalanceList = () => {
  const { data: balances, isRefetching, refetch } = useBalances();

  const REFRESH_BUTTON = (
    <button className="" onClick={() => void refetch()}>
      refresh
    </button>
  );
    
  return (
    <div>
      <h1>Balances ({isRefetching ? "loading..." : REFRESH_BUTTON}):</h1>

      {balances?.map(({ amount, denom }) => (
        <h1 key={denom} fontFamily="mono" fontSize="sm" ml={4}>
          {amount} {denom}
        </h1>
      ))}

      {!balances &&
        <ul>
          <li>no available balances</li>
        </ul>}
    </div>
  );
};