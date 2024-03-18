import { curve1, curve2 } from "../assets";

export const RightCurve = () => {
  return (
    <div className="hidden absolute -top-[30%] left-[70%] xl:block">
      <img src={curve2} width={162} height={76} alt="Curve 2" />
    </div>
  );
};

export const LeftCurve = () => {
  return (
    <div className="hidden absolute top-[80%] left-[24%] xl:block">
      <img src={curve1} width={522} height={182} alt="Curve 1" />
    </div>
  );
};
