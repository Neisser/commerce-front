
// Atoms
import Paragraph from 'atoms/Paragraph';

// Molecules
import ProductCard from 'molecules/ProductCard';
import CatalogueItem from 'molecules/CatalogueItem';


// FEATURED PRODUCTS
const generateProducts = () => {
  const srcImage = 'https://dynamicmedia.livenationinternational.com/Media/j/u/f/f2d52e23-e43e-4718-9de4-06be545aa18f.jpg';
  const result = [];
  for (let i = 0; i < 3; i++) {
    result.push({
      srcImage: srcImage,
      name: "Product " + i,
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
        {generateProducts().map((p) => (
          <section className="col-span-3 lg:col-span-1 md:col-span-1">
            <ProductCard {...p} />
          </section>
        ))}
      </div>
    </section>
  );
};


// POPULAR BRANDS

export const PopularBrands = () => {
  const srcImage = 'https://starsandstories.com/wp-content/uploads/2018/07/Adidas-Reviews-about-shoes.png';
  return (
    <section className="space-y-6">
      <Paragraph size={"xl"} weight={"bold"}>
        Marcas destacadas
      </Paragraph>
      <CatalogueItem srcImage={srcImage} className={'bg-gray-200'} />
    </section>
  )
}

export const ImagePage = () => {
  return (
    <div className="px-8 space-y-6">
      <PopularBrands />
      <FeaturedProducts />
    </div>
  );
};

export default ImagePage;
