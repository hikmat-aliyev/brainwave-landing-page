import { check } from "../assets";

function SinglePrice({
  priceName,
  priceColor,
  priceDescription,
  price,
  button,
  priceFeatures,
}) {
  return (
    <div
      id="basic-price-container"
      className="border rounded-3xl border-gray-700 p-6
                  flex flex-col gap-4"
    >
      <div>
        <h3 className={`h3 ${priceColor}`}>{priceName}</h3>
        <p className="text-gray-400 font-extralight">{priceDescription}</p>
      </div>

      <div className="flex items-center justify-start">
        <p className="text-[2rem]">$</p>
        <h1 className="h1 text-[3.5rem] lg:text-[5rem]">{price}</h1>
      </div>

      {button}

      <div className="flex flex-col mt-10">
        {priceFeatures.map((item, index) => (
          <div key={index} className="flex gap-2 border-t border-gray-600 py-4">
            <img src={check} alt="" />
            <p className="font-thin text-gray-300">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SinglePrice;
