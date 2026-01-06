import { useState } from 'react';
import { useSuperHeroesData } from '../Hooks/useSuperHeroesData';

const initialState = 3000;

export const RQSuperHeroesPage = () => {
  const [fetchTime, setFetchTime] = useState(initialState);

  const onSuccess = (data) => {
    console.log('Perform this action on successs', data);
    if (data.length === 4) {
      setFetchTime(0);
    } else {
      setFetchTime(initialState);
    }
  };

  const onError = (error) => {
    console.log('Perform this action on error', error);
    setFetchTime(0);
  };

  const { isLoading, data, isError, error, isFetching } = useSuperHeroesData(
    onSuccess,
    onError,
    fetchTime
  );

  if (isLoading || isFetching) return <h2>Loading...</h2>;
  if (isError) return <h2>{error.message}</h2>;
  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      <div>
        {data.map((heroName) => {
          return <div key={heroName}>{heroName}</div>;
        })}
      </div>
    </>
  );
};
