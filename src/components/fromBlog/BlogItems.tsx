import Image from 'next/image';
import React from 'react';

const blogData = [
  {
    date: `March 12, 2020`,
    title: `What is Shabby Chic?`,
    id: 1,
  },
  {
    date: `March 12, 2020`,
    title: `Best Examples of Maximalism`,
    id: 2,
  },
  {
    date: `March 12, 2020`,
    title: `What is Lorem Ipsum`,
    id: 3,
  },
];

export default function BlogItems() {
  return (
    <>
      {blogData.map((item) => (
        <div key={item.id} className="flex flex-col items-center mb-6">
          <Image
            src={`/images/blog/article${item.id}.jpg`}
            height={500}
            width={500}
            objectFit="cover"
            alt="blog"
          />
          <div className="flex flex-col justify-center items-center">
            <p className="text-[#555] mb-0 mt-4">{item.date}</p>
            <h6 className="font-bold mt-1 text-base">{item.title}</h6>
            <h6 className="text-base font-bold">
              <a>Read More</a>
            </h6>
          </div>
        </div>
      ))}
    </>
  );
}
