const Donations = ({ donate }) => {
  return (
    <div className="mt-24">
      <div className="card card-compact w-80 bg-base-100 shadow-xl">
        <figure>
          <img
            src={donate?.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          
        </div>
      </div>
    </div>
  );
};

export default Donations;
