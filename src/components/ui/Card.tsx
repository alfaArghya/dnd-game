const Card = ({
  imgSrc,
  cardName,
  battery,
}: {
  imgSrc: string;
  cardName: string;
  battery?: boolean;
}) => {
  return (
    <div className=" rounded-xl shadow shadow-blue-500/50  text-center flex flex-col justify-center items-center">
      {battery ? (
        <>
          <img src={imgSrc} alt="card" className="h-28" />
          <p className="text-lg">{cardName}</p>
        </>
      ) : (
        <>
          <img src={imgSrc} alt="card" className="size-3/4" />
          <p className="text-lg">{cardName}</p>
        </>
      )}
    </div>
  );
};

export default Card;
