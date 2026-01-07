import axios from 'axios';
import { useQuery } from 'react-query';

const fetchSuperHeroes = () => axios.get('http://localhost:4000/superheroes');

export const useSuperHeroesData = (onSuccess, onError, fetchTime) => {
  const superHeroesData = useQuery({
    queryKey: ['super-heroes'],
    queryFn: fetchSuperHeroes,
    onSuccess,
    onError,
    refetchInterval: fetchTime === 0 ? false : fetchTime, // When set to 0, it continuosly fetch
    // select: (data) => {
    //   const superHeroeName = data?.data.map((hero) => hero.name);
    //   return superHeroeName;
    // },
    // cacheTime: 5000, // Default: 5min,The number of secs, it will hold the data before it's Garbage collected
    // staleTime: 3000, // Default: 0, The number of seconds the data is fresh before the data becomes stale
    // refetchOnMount: false, // Options: true, false, always
    // enabled: false,
  });
  return superHeroesData;
};
