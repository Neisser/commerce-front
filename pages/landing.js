import { useEffect } from 'react';

// Atoms
import Paragraph from "atoms/Paragraph";

// Molecules
import ProductCard from "molecules/ProductCard";
import CatalogueItem from "molecules/CatalogueItem";

// Services
import { addProductInIndexDb } from 'services/car-shop';
import { getFeaturedCompanies } from 'services/landing';

// FEATURED PRODUCTS
const generateProducts = () => {
  const srcImage =
    "https://dynamicmedia.livenationinternational.com/Media/j/u/f/f2d52e23-e43e-4718-9de4-06be545aa18f.jpg";
  const result = [];
  for (let i = 0; i < 3; i++) {
    result.push({
      id: `${i}`,
      srcImage: srcImage,
      name: 'Product ' + i,
      price: 1000,
      rate: 5,
    });
  }
  return result;
};

export const FeaturedProducts = () => {
  return (
    <section className="space-y-6">
      <Paragraph size={"xl"} weight={"bold"}>
        Productos destacados
      </Paragraph>
      <div className="grid grid-cols-3 gap-4">
        {generateProducts().map((product, i) => (
          <section className="col-span-3 lg:col-span-1 md:col-span-1 cursor-pointer" onClick={() => addProductInIndexDb(product)}>
            <ProductCard key={`i-${i}`} {...product} />
          </section>
        ))}
      </div>
    </section>
  );
};

// POPULAR BRANDS

export const PopularCompanies = () => {
  const srcImage =
    "https://starsandstories.com/wp-content/uploads/2018/07/Adidas-Reviews-about-shoes.png";
  const catalogueItem = {
    srcImage,
    title: "Adidas",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
  };
  return (
    <section className="space-y-6" >
      <Paragraph size={"xl"} weight={"bold"}>
        Marcas destacadas
      </Paragraph>
      <CatalogueItem {...catalogueItem} className={"bg-gray-200"} />
    </section>
  );
};

export const Landing = () => {
  useEffect(() => {
    _getFeaturedCompanies()
  }, [])

  const _getFeaturedCompanies = async () => {
    const response = await getFeaturedCompanies()
    console.log(response);
  }

  return (
    <div className="px-12 space-y-6">
      <PopularCompanies />
      <FeaturedProducts />
    </div>
  );
};

export default Landing;
