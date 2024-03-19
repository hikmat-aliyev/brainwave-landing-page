import SinglePrice from "./SinglePrice";
import WhiteButton from "./WhiteButton";

function PriceOffers() {
  return (
    <div className="flex flex-col lg:flex-row w-[90vw] gap-4">
      <SinglePrice
        priceName={"Basic"}
        priceColor={"text-yellow-200"}
        priceDescription={"AI chatbot, personalized recommendations"}
        price={0}
        button={<WhiteButton children={"Get started"} />}
        priceFeatures={[
          "An AI chatbot that can understand your queries",
          "Personalized recommendations based on your preferences",
          "Ability to explore the app and its features without any cost",
        ]}
      />
      <SinglePrice
        priceName={"Premium"}
        priceColor={"text-purple-500"}
        priceDescription={
          "Advanced AI chatbot, priority support, analytics dashboard"
        }
        price={9.99}
        button={<WhiteButton children={"Get started"} />}
        priceFeatures={[
          "An advanced AI chatbot that can understand complex queries",
          "An analytics dashboard to track your conversations",
          "Priority support to solve issues quickly",
        ]}
      />
      <SinglePrice
        priceName={"Enterprise"}
        priceColor={"text-red-400"}
        priceDescription={
          "Custom AI chatbot, advanced analytics, dedicated account"
        }
        price={40.99}
        button={<WhiteButton children={"Get started"} />}
        priceFeatures={[
          "An AI chatbot that can understand your queries",
          "Personalized recommendations based on your preferences",
          "Ability to explore the app and its features without any cost",
        ]}
      />
    </div>
  );
}

export default PriceOffers;
