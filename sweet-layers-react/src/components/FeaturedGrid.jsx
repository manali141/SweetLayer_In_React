import { useQuery } from "@tanstack/react-query";
import { getCakes } from "../api/cakeApi";
import CakeCard from "./CakeCard";

function FeaturedGrid() {
  const { data: cakes = [] } = useQuery({
    queryKey: ["cakes"],
    queryFn: getCakes
  });

  return (
    <section className="grid container">

      {/* Title Section */}
      <div className="feature">

        <div className="featureLeft">
          <h1>Featured Creations</h1>
          <h5>Our most loved signature cakes.</h5>
        </div>

        <div className="featureRight">
          <a href="/cakes">
            View All →
          </a>
        </div>

      </div>

      <div className="sepration"></div>

      {/* Cards Grid */}
      <div className="cardDisplay">

        {cakes.slice(0, 4).map((cake) => (
          <CakeCard key={cake.id} cake={cake} />
        ))}

      </div>

    </section>
  );
}

export default FeaturedGrid;