import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = "", size = 48 }: LogoProps) {
  return (
    <div 
      className={className}
      style={{
        width: size,
        height: size,
        position: "relative",
        borderRadius: "50%",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Image
        src="/LogoKOMSAT.png"
        alt="GenBI Komisariat Unika De La Salle Manado"
        fill
        priority
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  );
}

