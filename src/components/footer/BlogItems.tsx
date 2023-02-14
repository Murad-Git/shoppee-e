import { blogData } from '@/utils/database';
import Image from 'next/image';

export const BlogItems = () => {
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
            <p className="text-grey-text mb-0 mt-4">{item.date}</p>
            <h6 className="font-bold mt-1 text-base">{item.title}</h6>
            <h6 className="text-base font-bold">Read more</h6>
          </div>
        </div>
      ))}
    </>
  );
};
