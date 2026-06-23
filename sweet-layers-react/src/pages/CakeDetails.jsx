import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCakeById } from "../api/cakeApi";

const CakeDetails = () => {
  const { id } = useParams();

  const { data: cake, isLoading } = useQuery({
    queryKey: ["cake", id],
    queryFn: () => getCakeById(id)
  });

  if (isLoading) return <h2 className="loading">Loading cake...</h2>;

  return (
    <div className="cake-page">

      <div className="cake-card">

        {/* IMAGE */}
        <div className="cake-image">
          <img src={cake.image} alt={cake.title} />
        </div>

        {/* DETAILS */}
        <div className="cake-info">

          <h1>{cake.title}</h1>

          <p className="desc">{cake.description}</p>

          <div className="meta">
            <p><span>Category:</span> {cake.category}</p>
            <p><span>Price:</span> ${cake.price}</p>
            <p><span>Flavor:</span> {cake.flavor}</p>
            <p><span>Rating:</span> ⭐ {cake.rating}</p>
            <p><span>Likes:</span> ❤️ {cake.likes}</p>
          </div>

          <Link to={`/order/${cake.id}`} className="order-btn">
            Order Now
          </Link>

        </div>

      </div>
    </div>
  );
};

export default CakeDetails;