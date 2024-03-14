function Button({ className, spanClass, href, onclick, children, px, white }) {
  const buttonClasses = `bg-gradient-to-r from-blue-300 to-purple-400
  text-white rounded p-0.5 font-extralight  rounded-tl-5 rounded-tr-4 
  rounded-bl-5 rounded-br-5 font-code uppercase font-bold text-xs text-n-3  ${
    className || ""
  }`;

  const spanClasses = `button flex w-full bg-n-8 rounded p-2 px-5 text-n-1 transition-colors 
  hover:text-color-1 tracking-widest ${spanClass || ""}`;

  return (
    <button className={buttonClasses}>
      <span className={spanClasses}>{children}</span>
    </button>
  );
}

export default Button;
