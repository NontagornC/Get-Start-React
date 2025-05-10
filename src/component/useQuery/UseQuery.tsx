/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";

export const GETDATA = async (signal: AbortSignal) => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`,
    {
      method: "GET",
      signal,
      // headers: {
      //   'Content-Type': 'application/json',
      //   Authorization: `Bearer ${token}`,
      // },
    }
  )
    .then(async (res) => {
      return await res.json();
    })
    .catch((e: any) => {
      console.log("Error : ", e);
      return false;
    });

  return response;
};

const UseQuery = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["GetRequestDetail"],
    queryFn: async ({ signal }) => {
      const data = await GETDATA(signal);
      return data;
    },
    refetchOnWindowFocus: false,
    enabled: true,
    //     retry: 1,
    //     staleTime: 1000 * 60 * 5, // 5 นาที
  });

  return (
    <div>
      <h2>รายการ Cryptocurrency</h2>
      {isLoading && <p>กำลังโหลด...</p>}
      {isError && <p>เกิดข้อผิดพลาด: {error.message}</p>}

      {Array.isArray(data) && data.length > 0 ? (
        <ul>
          {data.map((coin) => (
            <li key={coin.id}>
              <img
                src={coin.image}
                alt={coin.name}
                width="20"
                style={{ marginRight: "8px" }}
              />
              <strong>{coin.name}</strong> ({coin.symbol.toUpperCase()}) - $
              {coin.current_price.toLocaleString()}
            </li>
          ))}
        </ul>
      ) : (
        !isLoading && !isError && <p>ไม่พบข้อมูล</p>
      )}
    </div>
  );
};

export default UseQuery;
