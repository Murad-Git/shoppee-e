import { useAppSelector } from '@/types/hooks';

export default function DiscountSection() {
  const darkState = useAppSelector((state) => state.productsSlice.darkMode);
  return (
    <section className="bg-no-repeat h-[500px]">
      <div className="container h-full">
        <div className="h-full flex flex-col justify-center items-center">
          <h5 className="uppercase font-bold mb-4">news and inspiration</h5>
          <h1 className="uppercase font-bold mb-0 text-4xl">new arrivals</h1>
          <div className="mb-8 border-4 w-16 rounded-3xl mt-6 border-accent-color"></div>
          <section className="flex box-border">
            <div
              className={`indicator mr-4 ${
                darkState ? `border-white` : `border-[#262626]`
              }`}
            >
              <h5 className="mb-0">0</h5>
              <p>days</p>
            </div>
            <div
              className={`indicator mr-4 ${
                darkState ? `border-white` : `border-[#262626]`
              }`}
            >
              <h5 className="mb-0">0</h5>
              <p>hours</p>
            </div>
            <div
              className={`indicator mr-4 ${
                darkState ? `border-white` : `border-[#262626]`
              }`}
            >
              <h5 className="mb-0">0</h5>
              <p>mins</p>
            </div>
            <div
              className={`indicator mr-4 ${
                darkState ? `border-white` : `border-[#262626]`
              }`}
            >
              <h5 className="mb-0">0</h5>
              <p>secs</p>
            </div>
          </section>
          <div className="flex mt-12 items-center">
            <h2 className="text-[#555] mr-4 mb-0 flex items-center">
              <del>$ 140,56</del>
            </h2>
            <h1 className="text-primary mb-0">$ 70</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
