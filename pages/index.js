import { useEffect, useState } from 'react';

// Atoms
import Paragraph from "atoms/Paragraph";

// Molecules
import ProductCard from "molecules/ProductCard";
import CatalogueItem from "molecules/CatalogueItem";

// Services
import { addProductInIndexDb } from 'services/car-shop';
import { getFeaturedCompanies, getFeaturedOProducts } from 'services/landing';

export const FeaturedProducts = ({
  products
}) => {
  const mapProducts = products.map((product) => ({
    id: product._id,
    srcImage: product.images?.[0] ?? 'https://i.pinimg.com/originals/af/c1/f5/afc1f5e425e4a2ccecd83a6deb0138ab.jpg',
    name: product.name,
    prices: product.prices.map((price) => ({
      unit_price: price.unit_price,
      min_stock: price.min_stock,
      max_stock: price.max_stock
    }))
  }));
  return (
    <section className="space-y-6">
      <Paragraph size={"xl"} weight={"bold"}>
        Productos destacados
      </Paragraph>
      <div className="grid grid-cols-3 gap-4">
        {mapProducts.map((product, i) => (
          <section className="col-span-3 lg:col-span-1 md:col-span-1 cursor-pointer" onClick={() => addProductInIndexDb(product)}>
            <ProductCard key={`i-${i}`} {...product} />
          </section>
        ))}
      </div>
    </section>
  );
};

// POPULAR BRANDS
export const PopularCompanies = ({
  companies
}) => {
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

  const [ products, setProducts ] = useState([]);
  const [ companies, setCompanies ] = useState([]);
  useEffect(() => {
    _getFeaturedCompanies();
    _getFeaturedOProducts();
  }, [])

  const _getFeaturedCompanies = async () => {
    const response = await getFeaturedCompanies()
    setCompanies(response);
  }

  const _getFeaturedOProducts = async () => {
    const response = await getFeaturedOProducts();
    setProducts(response);
  }

  return (
    <div className="px-12 space-y-6">
      <PopularCompanies compoanies={companies} />
      <FeaturedProducts products={products} />
    </div>
  );
};

export default Landing;
