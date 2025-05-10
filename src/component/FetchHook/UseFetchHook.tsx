import { useFetch } from "./useFetch";

const UseFetchHook = () => {
  const { data, loading, error, refetch } = useFetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
  );

  return (
    <div>
      {loading && <p>กำลังโหลด...</p>}
      {error && <p>เกิดข้อผิดพลาด: {error}</p>}

      {/* แสดงผลข้อมูลที่เป็น array ของ objects อย่างถูกต้อง */}
      {data && Array.isArray(data) && (
        <div>
          <h2>รายการ Cryptocurrency</h2>
          <ul>
            {data?.length &&
              data.map((coin) => (
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
        </div>
      )}

      <button onClick={refetch} disabled={loading}>
        โหลดข้อมูลใหม่
      </button>
    </div>
  );
};

export default UseFetchHook;
