import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSuperHeroe = ({ queryKey }) => {
  const heroId = queryKey[1];
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

const useSuperHeroData = (heroId) => {
  const superHeroData = useQuery({
    queryKey: ['super-hero', heroId],
    queryFn: fetchSuperHeroe,
  });

  return superHeroData;
};

export default useSuperHeroData;
