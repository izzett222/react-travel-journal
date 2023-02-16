import locationPin from "../assets/location.svg";
export default function Card({
  title,
  location,
  description,
  endDate,
  startDate,
  googleMapsUrl,
  imageUrl,
}) {
  return (
    <div className="flex gap-5 pb-5 border-b border-[#F5F5F5]">
      <div className="w-32">
        <img className="h-full object-cover" src={imageUrl} alt=""/>
      </div>
      <div className="flex-1 text-xs">
        <div className="flex text-xs gap-3 mb-1">
          <p className="tracking-widest">
            <img src={locationPin} alt="" className="inline-block mr-1" />
            {location}
          </p>{" "}
          <a href={googleMapsUrl} className="text-[#918E9B] underline">View on Google Maps</a>
        </div>
        <h1 className="text-2xl font-bold mb-3">{title}</h1>
        <h3 className="font-bold mb-2.5 leading-[1.5]">
          {startDate} - {endDate}
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
