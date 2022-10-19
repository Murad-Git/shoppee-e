import Image from 'next/image';
import React from 'react';

export default function InstagramFollow() {
  const imgList = [];
  const images = () => {
    for (let i = 1; i < 7; i++) {
      imgList.push(
        <Image
          key={i}
          src={`/images/instagram/insta${i}.jpg`}
          height={500}
          width={500}
          objectFit="cover"
          alt="product"
        />,
      );
    }
  };
  images();
  return (
    <section className="section">
      <h3 className="font-bold text-center mb-6">Follow us on Instagram</h3>
      <div className="m-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
        {imgList}
        {/* <div className="p-0">
            <Image
              src="/images/instagram/insta1.jpg"
              height={500}
              width={500}
              objectFit="cover"
              alt="product"
            />
          </div> */}
      </div>
    </section>
  );
}
