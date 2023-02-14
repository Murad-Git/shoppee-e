import Image from 'next/image';

export const TopProducts = () => {
  return (
    <div className="border-b border-slate-200">
      <section className="container section">
        <h3 className="text-center font-bold mb-6">Top Selling Products</h3>
        <div className="flex justify-center mb-8">
          <p className="text-center px-2">
            These furniture sets will become an essential part of an ecosystem
            of elements in your home. Your domestic space will easily embrace
            these tables, chairs, and bookshelves.
          </p>
        </div>
        <div className="grid grid-flow-row-dense grid-cols-1 mx-auto md:grid-cols-3 lg:grid-cols-4">
          <a
            aria-label="top product"
            className="relative cursor-pointer mb-8 md:m-1 md:col-span-2 md:row-span-2"
          >
            <div className="w-full">
              <Image
                className="w-full"
                src="/images/top/top1.jpg"
                height={500}
                width={600}
                objectFit="cover"
                alt="product"
                layout="responsive"
              />
            </div>
            <div className="absolute h-full top-8 left-[7%] flex flex-col justify-start items-start">
              <h6 className="text-primary uppercase">all new</h6>
              <h2 className="text-primary  uppercase">spring things</h2>
              <div className="stroke" />
              <h6 className="text-[#555] mt-6">Save up to 30%</h6>
            </div>
          </a>
          <a
            aria-label="top product"
            className="relative cursor-pointer mb-8 md:m-1"
          >
            <div className="w-full">
              <Image
                src="/images/top/top2.jpg"
                height={500}
                width={600}
                objectFit="cover"
                alt="product"
                layout="responsive"
              />
            </div>
            <div className="absolute h-full top-8 flex translate-x-[35%] flex-col justify-start items-end">
              <h6 className="text-primary whitespace-nowrap">
                Online Exclusive
              </h6>
              <p className="text-right underline">shop now</p>
            </div>
          </a>
          <a
            aria-label="top product"
            className="relative cursor-pointer mb-8 md:m-1"
          >
            <div className="w-full">
              <Image
                src="/images/top/top3.jpg"
                height={500}
                width={600}
                objectFit="cover"
                alt="product"
                layout="responsive"
              />
            </div>
          </a>
          <a
            aria-label="top product"
            className="relative cursor-pointer mb-8 md:m-1"
          >
            <div className="w-full">
              <Image
                src="/images/top/top4.jpg"
                height={500}
                width={600}
                objectFit="cover"
                alt="product"
                layout="responsive"
              />
            </div>
          </a>
          <a
            aria-label="top product"
            className="relative cursor-pointer mb-8 md:m-1"
          >
            <div className="w-full">
              <Image
                src="/images/top/top5.jpg"
                height={500}
                width={600}
                layout="responsive"
                objectFit="cover"
                alt="product"
              />
            </div>
            <div className="absolute top-5 flex flex-col justify-center items-center w-full">
              <div className="flex justify-between items-center w-full">
                <div className="basis-full bg-[#262626] h-[1px] border-none flex justify-between items-center" />
                <div className="my-0 mx-4 flex flex-col items-center justify-center">
                  <p className="mb-0 text-[#555]">collection</p>
                  <h5 className="uppercase font-bold">summer</h5>
                </div>
                <div className="basis-full bg-[#262626] h-[1px] border-none rounded-3xl" />
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};
