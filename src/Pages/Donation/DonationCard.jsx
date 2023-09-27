const DonationCard = ({ donate }) => {
  const { id, category, title, image, price, categoryBackground, cardBackground} = donate;
  return (
    <div>
      <div style={{backgroundColor: cardBackground}} className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img
            src={image}
            alt="image"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
        <div>
          <span className="font-extrabold p-1 pr-3 rounded" style={{color: categoryBackground, backgroundColor: cardBackground}}>{category}</span>
          </div>
          <p className="text-xl font-extrabold py-2" style={{color: categoryBackground}}>{title}</p>
          <p style={{color: categoryBackground}} className="mb-8 block font-semibold text-lg leading-relaxed text-gray-700 antialiased">
            ${price}
          </p>
          <a className="inline-block" href="#">
            <button style={{backgroundColor: cardBackground}}
              className="flex  items-center gap-2 rounded-lg font-sans text-xs font-bold uppercase p-3 pr-4 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              VIEW DETAILS
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
