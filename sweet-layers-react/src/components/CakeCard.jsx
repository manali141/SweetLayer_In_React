import { Link } from "react-router-dom";

function CakeCard({ cake }) {
  return (
    <div className="category-card">
    <div className="menuImage category-image">
      <img src={cake.image} alt={cake.title} />
    </div>

      <div className="category-content">
        <h6>{cake.category}</h6>
        <div className="namePrice">
          <h3>{cake.title}</h3>
          <span>${cake.price}</span>
        </div>
        <p>${cake.description}</p>
      </div>
      <div className="category-footer">
            <Link to={`/cakes/${cake.id}`}>
          View Details
        </Link>
      </div>

      {/* <div className="category-content">
      
        <h6>{cake.category}</h6>
        <h3>{cake.title}</h3>
        <p>{cake.description}</p>
        

        <Link to={`/cakes/${cake.id}`}>
          View Details
        </Link>
      </div> */}
    
    </div>
  );
}

export default CakeCard;