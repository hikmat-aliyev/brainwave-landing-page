import ButtonSvg from "../assets/svg/ButtonSvg";
import ButtonGradient from "../assets/svg/ButtonGradient";

function Button({ className, href, onclick, children, px, white }) {
  const buttonClasses = `relative button
  hover:text-color-1 transition-colors px-7 text-n-1 flex items-center justify-center h-11`;

  return (
    <button className={buttonClasses}>
      <span className="">{children}</span>
      {ButtonSvg(white)}
      <ButtonGradient />
    </button>
  );
}

export default Button;
