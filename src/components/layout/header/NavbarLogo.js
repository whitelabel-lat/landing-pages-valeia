import Image from "next/image";
import React from "react";
import Link from "next/link";
const NavbarLogo = ({ iconValeia=[] }) => {

  const fullImageUrls = iconValeia.map((image) => {
    const imageUrl = image.fields?.file?.url || "";
    const fullImageUrl = imageUrl.startsWith("//")
      ? `https:${imageUrl}`
      : imageUrl;
    return fullImageUrl;
  });

  const icon = fullImageUrls[1];

  return (
    <div className="lg:col-start-1 lg:col-span-2">
      <Link href="/" className="w-logo-sm lg:w-logo-lg ">
        <Image
          prioriy="fasle"
          src={icon}
          alt="logo"
          width={150} // Ajusta según el tamaño real
          height={70} // Ajusta según el tamaño real
          className="w-full py-2"
        />
      </Link>
    </div>
  );
};

export default NavbarLogo;
