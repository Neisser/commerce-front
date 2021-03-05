import { useEffect, useState } from 'react';

// Atoms
import Paragraph from "atoms/Paragraph";

// Molecules
import ProductCard from "molecules/ProductCard";
import CatalogueItem from "molecules/CatalogueItem";

// Services
import { addProductInIndexDb } from 'services/car-shop';
import { getFeaturedCompanies, getFeaturedOProducts } from 'services/landing';


// BEGIN PAGE
export const Begin = () => {
  return (
    <section className="mt-24">
      <Paragraph size={'3xl'} weight={'bold'} color={'base'}>Comprar en grande nunca habia sido tan sencillo</Paragraph> 
      <Paragraph className="mt-2.5" size={'lg'} weight={'light'}>Consigue prendas de los mejores mayoristas de forma facil a tu alcance</Paragraph>
      <button className="landing-button">Conoce nuestro catalogo</button>
    </section>
  )
}

// POPULAR PRODUCTS
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
      <div className="grid grid-cols-3 gap-12">
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
      <div className="flex space-x-3.5 felx-row overflow-x-auto">  
        <div className={'rounded-md flex items-end p-4 bg-center bg-cover'} style={{minWidth: '279px', minHeight: '190px', backgroundImage: 'url(https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80)'}}>
          <Paragraph size={"2xl"} weight={"bold"} color="inverted">
            Nike
          </Paragraph>
        </div>
        <div className={'rounded-md flex items-end p-4 bg-center bg-cover'} style={{minWidth: '279px', minHeight: '190px', backgroundImage: 'url(https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80)'}}>
          <Paragraph size={"2xl"} weight={"bold"} color="inverted">
            Nike
          </Paragraph>
        </div>
        <div className={'rounded-md flex items-end p-4 bg-center bg-cover'} style={{minWidth: '279px', minHeight: '190px', backgroundImage: 'url(https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80)'}}>
          <Paragraph size={"2xl"} weight={"bold"} color="inverted">
            Nike
          </Paragraph>
        </div>
      </div>
      {/* <CatalogueItem {...catalogueItem} className={"bg-gray-200"} /> */}
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
    <div className="px-8 space-y-6">
      <Begin />
      <PopularCompanies compoanies={companies} />
      <FeaturedProducts products={products} />
    </div>
  );
};

export default Landing;
