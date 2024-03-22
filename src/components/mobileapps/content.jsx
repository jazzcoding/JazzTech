import React from "react";
import croplify from "../../assets/image/croplify.png";
import croplifyPic from "../../assets/image/croplifyProfile.jpg";
import react from "../../assets/image/logos/react.png";
import warnyaProfile from "../../assets/image/WarnyaProfile.jpg";
import caploProfile from "../../assets/image/caploProfile.jpg";
import caplo from "../../assets/image/caplo.jpeg";
const content = () => {
  const products = [
    {
      id: 1,
      name: "Croplify",
      href: "#",
      imageSrc: croplify,
      imageAlt: "Croplify",
      country: "USA",
    },
    {
      id: 2,
      name: "Croplify",
      href: "#",
      imageSrc: caplo,
      imageAlt: "Croplify",
      country: "USA",
    },
  ];

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Fully functional mobile applications
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.country}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default content;
