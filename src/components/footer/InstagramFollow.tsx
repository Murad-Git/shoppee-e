import Image from 'next/image';

export const InstagramFollow = () => {
  const images = Array.from(Array(6), (x, index) => (
    <Image
      key={index + 1}
      src={`/images/instagram/insta${index + 1}.jpg`}
      height={500}
      width={500}
      objectFit="cover"
      alt="product"
    />
  ));
  return (
    <section className="section">
      <h3 className="font-bold text-center mb-6">Follow us on Instagram</h3>
      <div className="m-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
        {images}
      </div>
    </section>
  );
};
