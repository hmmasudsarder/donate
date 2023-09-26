import { Link } from "react-router-dom";

const Donations = ({ donate }) => {
    const {id, category, title, image} = donate;
  return (
    <div className="mt-24">
      <Link to={`/donate/${id}`}>
      <div className="card card-compact w-80 bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="font-bold">{category}</h2>
          <p className="text-2xl font-bold">{title}</p>
          
        </div>
      </div></Link>
    </div>
  );
};

export default Donations;
