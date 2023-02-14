import {
  faHeadset,
  faRotateLeft,
  faTruck,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const InfoBlock = () => {
  return (
    <div className="border-y border-slate-200 py-2">
      <div className="h-full grid grid-cols-1 md:grid-cols-3 justify-items-center w-[60%] md:w-full mx-auto md:divide-solid md:divide-x container">
        <div className="h-full w-full flex items-center justify-start mb-8 md:mr-4 md:w-[90%]">
          <section className="flex justify-start items-center">
            <FontAwesomeIcon
              className="h-14 text-accent-color"
              icon={faTruck}
            />
            <div className="ml-4">
              <h5 className="font-bold uppercase">free shipping</h5>
              <p className="text-[#555] mb-0">On all orders of $150</p>
            </div>
          </section>
        </div>
        <div className="h-full w-full flex items-center justify-start mb-8 md:mr-4 md:w-[90%]">
          <section className="flex justify-start items-center md:ml-4">
            <FontAwesomeIcon
              className="h-16 text-accent-color"
              icon={faHeadset}
            />
            <div className="ml-4">
              <h5 className="font-bold uppercase">24/7 support</h5>
              <p className="text-[#555] mb-0">Get help when you need it</p>
            </div>
          </section>
        </div>
        <div className="h-full w-full flex items-center justify-start mb-8 md:mr-4 md:w-[90%]">
          <section className="flex justify-start items-center md:ml-4">
            <FontAwesomeIcon
              className="h-16 text-accent-color"
              icon={faRotateLeft}
            />
            <div className="ml-4">
              <h5 className="font-bold uppercase">100% money back</h5>
              <p className="text-[#555] mb-0">30 day money back guarantee</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
