import axios from 'axios';
import { useQuery } from 'react-query';

export const RQSuperHeroesPage = () => {
  const fetchSuperHeroes = () => axios.get('http://localhost:4000/superheroes');
  const { isLoading, data, isError, error, isFetching } = useQuery({
    queryKey: ['super-heroes'],
    queryFn: fetchSuperHeroes,
    cacheTime: 5000, // Default: 5min,The number of secs, it will hold the data before it's Garbage collected
    staleTime: 3000, // Default: 0, The number of seconds the data is fresh before the data becomes stale
  });

  console.log({ isFetching, isLoading });

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>{error.message}</h2>;
  return (
    <>
      <h2>React Query Super Heroes Page</h2>
      <div>
        {data?.data.map((hero) => {
          return <div key={hero.id}>{hero.name}</div>;
        })}
      </div>
    </>
  );
};
