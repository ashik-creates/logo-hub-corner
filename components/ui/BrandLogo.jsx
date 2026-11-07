export default function BrandLogo({ className = "" }) {
  return (
    <span
      aria-hidden="true"
      className={`block shrink-0 overflow-hidden ${className}`}
      style={{
        backgroundImage: "url('/images/logo.png')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "167% auto",
      }}
    />
  );
}
