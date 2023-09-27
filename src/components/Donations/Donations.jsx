import { Link } from "react-router-dom";

const Donations = ({ donate }) => {
    const {id, category, title, image, buttonBackground, categoryBackground, cardBackground} = donate;
  return (
    <div className="mb-6 " >
      <Link to={`/donate/${id}`}>
      <div  className="card card-compact w-80 bg-base-100 shadow-xl cate" style={{backgroundColor: cardBackground}}>
        <figure>
          <img
            src={image}
            alt=""
          />
        </figure>
        <div className="card-body" >
          <div>
          <span className="font-extrabold p-1 pr-3 rounded" style={{color: categoryBackground, backgroundColor: cardBackground}}>{category}</span>
          </div>
          <p className="text-xl font-extrabold" style={{color: categoryBackground}}>{title}</p>
        </div>
      </div></Link>
    </div>
  );
};

export default Donations;
