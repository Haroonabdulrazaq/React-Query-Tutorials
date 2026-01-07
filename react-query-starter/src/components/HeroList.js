import { useSuperHeroesData } from '../Hooks/useSuperHeroesData';

const HeroList = () => {
  const onSuccess = (data) => {
    console.log('Perform this onSuccess in HeroList', data);
  };
  const onError = () => {
    console.log('Perform this onError');
  };
  const { data, isLoading, isError, error } = useSuperHeroesData(
    onSuccess,
    onError
  );
  if (isLoading) return <p>isLoading...</p>;
  if (isError) return <p>{error}</p>;
  return (
    <>
      <h2>New Super Heroes List</h2>
      <div>
        {data?.map((heroName) => {
          return <div key={heroName}>{heroName}</div>;
        })}
      </div>
    </>
  );
};

export default HeroList;
