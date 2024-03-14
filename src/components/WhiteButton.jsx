function WhiteButton({ children, className }) {
  return (
    <button
      className={`bg-white text-black button transition-colors hover:text-color-1 px-1 py-1.5 lg:px-5 lg:py-2 ${className}`}
      style={{ borderRadius: "8px 20px 8px 8px", letterSpacing: "5px" }}
    >
      {children}
    </button>
  );
}

export default WhiteButton;
