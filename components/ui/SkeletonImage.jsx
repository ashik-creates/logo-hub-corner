"use client";

import { useState } from "react";
import Image from "next/image";

export default function SkeletonImage({
  alt,
  className = "",
  skeletonClassName = "",
  ...props
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 animate-pulse bg-cream/[0.07] transition-opacity duration-500 ${
          loaded ? "opacity-0" : "opacity-100"
        } ${skeletonClassName}`}
      />
      <Image
        alt={alt}
        className={className}
        {...props}
        onLoad={(event) => {
          setLoaded(true);
          props.onLoad?.(event);
        }}
      />
    </>
  );
}
