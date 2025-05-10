import { useEffect, useState } from "react";
import axios from "axios";

const AxiosFetching = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      )
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return <div>{data ? JSON.stringify(data) : "Loading..."}</div>;
};

export default AxiosFetching;
