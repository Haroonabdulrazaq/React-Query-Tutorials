import { useState } from 'react';
import { useSuperHeroesData } from '../Hooks/useSuperHeroesData';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const initialState = 3000;

export const RQSuperHeroesPage = () => {
  const [fetchTime, setFetchTime] = useState(initialState);

  const onSuccess = (data) => {
    console.log('Perform this action on successs');
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
        {data?.data.map((hero) => {
          return (
            <div key={hero.id}>
              <Link to={`rq-super-heroes/${hero.id}`}>{hero.name}</Link>
            </div>
          );
        })}
      </div>
    </>
  );
};
