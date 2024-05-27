import {useCallback, useState, useEffect, useRef} from 'react';

const DATA_URL: string = 'https://logiclike.com/docs/courses.json';

export interface IData {
  name: string;
  id: string;
  image: string;
  bgColor: string;
  tags: string[];
}

export const useFetchData = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<IData[]>([]);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(DATA_URL);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const jsonData: IData[] = await response.json();
      setData(jsonData);
    } catch (err) {
      setError(err as Error);
      setData([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const dataFetched = useRef(false);

  useEffect(() => {
    if (!dataFetched.current) {
      dataFetched.current = true;
      fetchData();
    }
  }, [fetchData]);

  return { loading, data, error };
};
