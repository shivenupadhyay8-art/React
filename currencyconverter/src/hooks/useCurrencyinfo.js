import { useEffect, useState } from 'react';

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    // ✅ new URL format
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((data) => {
        // data[currency] ke andar rates hoti hain
        setData(data[currency]);
      })
      .catch((err) => console.error('fetch error:', err));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
