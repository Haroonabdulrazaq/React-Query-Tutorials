import React from 'react';
import useSuperHeroData from '../Hooks/useSuperHeroData';
import { useParams } from 'react-router-dom';

const RQSuperHero = () => {
  const { heroId } = useParams();
  const { isLoading, data, isError, error } = useSuperHeroData(heroId);

  if (isLoading) return <h3>Loading...</h3>;
  if (isError) return <h3>Error occured {error}</h3>;

  return (
    <>
      <h3>Super Hero details</h3>
      {
        <div>
          <p>
            {data?.data.alterEgo} - {data?.data.name}
          </p>
        </div>
      }
    </>
  );
};

export default RQSuperHero;
