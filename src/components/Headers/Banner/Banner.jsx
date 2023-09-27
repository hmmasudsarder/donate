const Banner = () => {
  return (
    <div className="">
      <div className="h-[70vh] flex items-center justify-center">
        <div className="">
          <h1 className="text-5xl font-semibold mb-10">
            I Grow By Helping People In Need
          </h1>
          <div className="form-control mx-auto block">
            <label className="input-group mx-auto ml-64">
              <input
                type="text"
                placeholder="Search Here"
                className="input input-bordered"
              />
              <button className="bg-red-500 text-white font-bold input-bordered">
              <span className="bg-red-500 text-white">Search</span>
              </button>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
