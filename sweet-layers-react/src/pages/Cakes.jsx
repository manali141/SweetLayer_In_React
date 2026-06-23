import { useQuery } from "@tanstack/react-query";
import { getCakes } from "../api/cakeApi";
import CakeCard from "../components/CakeCard";

function Cakes() {
  const { data: cakes = [], isLoading, isError } = useQuery({
    queryKey: ["cakes"],
    queryFn: getCakes
  });

  if (isLoading) return <h2>Loading...</h2>;

  if (isError) return <h2>Error loading cakes</h2>;

  return (
    <div className='MenucardDisplay'>
      
        {cakes.map((cake) => (
          <CakeCard key={cake.id} cake={cake} />
        ))}
      
    </div>
  );
}

export default Cakes;