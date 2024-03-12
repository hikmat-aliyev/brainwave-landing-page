function Button({ className, href, onclick, children, px, white }) {
  const buttonClasses = ` bg-gradient-to-r from-blue-500 to-purple-500
  text-white rounded p-0.5 font-extralight ${className || ""}`;

  return (
    <button class={buttonClasses}>
      <span class="flex w-full bg-n-8 text-white rounded p-2 px-5">
        {children}
      </span>
    </button>
  );
}

export default Button;
