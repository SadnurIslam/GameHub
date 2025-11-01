import axios from "axios";
import { useEffect, useState } from "react";

const useProducts = () => {
  const [gameData, setGameData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; 
    const fetchData = async () => {
      const startTime = Date.now(); 
      const minDelay = 200; 
      try {
        const res = await axios("../gameData.json");
        if (!isMounted) return;
        setGameData(res.data);
      } catch (err) {
        if (!isMounted) return;
        setError(err.message);
      } finally {
        const elapsed = Date.now() - startTime;
        const remaining = Math.max(0, minDelay - elapsed);
        setTimeout(() => {
          if (isMounted) setLoading(false);
        }, remaining);
      }
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);

  return { gameData, loading, error };
};

export default useProducts;
