import Image from 'atoms/Image'

export const ImagePage = () => {
  const imageSrc = 'https://dynamicmedia.livenationinternational.com/Media/j/u/f/f2d52e23-e43e-4718-9de4-06be545aa18f.jpg';
  return (
    <>
      <section className="px-6">
        <Image src={imageSrc} />
      </section>
    </>
  )
}


export default ImagePage;