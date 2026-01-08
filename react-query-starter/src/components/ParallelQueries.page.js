import axios from 'axios';
import { useQuery } from 'react-query';

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes');
};
const fetchFriends = () => {
  return axios.get('http://localhost:4000/friends');
};

const ParallelQueries = () => {
  const {
    isLoading,
    data: superHeroes,
    isError,
    error,
  } = useQuery({
    queryKey: 'Parallel-superheroes',
    queryFn: fetchSuperHeroes,
  });
  const { data: friends } = useQuery({
    queryKeys: 'friends',
    queryFn: fetchFriends,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error}</p>;

  console.log('SuperHeroes', superHeroes);
  console.log('friends', friends);

  return <div>ParallelQueries</div>;
};

export default ParallelQueries;
