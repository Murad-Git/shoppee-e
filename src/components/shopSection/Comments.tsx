import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Comments = () => {
  return (
    <div className="reviews my-10">
      <div className="flex justify-between items-center">
        <h4 className="font-bold">Reviews:</h4>
        <button className="cursor-pointer text-accent-color font-bold text-sm leading-[1.5] text-center relative transition-all duration-300 ease-linear  uppercase p-1">
          Leave Feedback
        </button>
      </div>
      <div className="review mt-8">
        {/* userImage */}
        <div className="flex flex-col justify-between items-start">
          <div className="flex justify-between w-full ">
            <h6 className="font-bold mb-0">Bill Harrison</h6>
            <p className="text-[#555] mb-0">2021-12-30</p>
          </div>
          <div className="flex items-start justify-start">
            <button className="flex cursor-pointer border-0">
              <FontAwesomeIcon icon={faStar} className="h-2" />
            </button>
            <button className="flex cursor-pointer border-0">
              <FontAwesomeIcon icon={faStar} className="h-2" />
            </button>
            <button className="flex cursor-pointer border-0">
              <FontAwesomeIcon icon={faStar} className="h-2" />
            </button>
            <button className="flex cursor-pointer border-0">
              <FontAwesomeIcon icon={faStar} className="h-2" />
            </button>
            <button className="flex cursor-pointer border-0">
              <FontAwesomeIcon icon={faStar} className="h-2" />
            </button>
          </div>
          <p className="mb-0 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
            ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Vestibulum
            ultricies aliquam.
          </p>
        </div>
      </div>
      <div className="review mt-8">
        {/* userImage */}
        <div className="flex flex-col justify-between items-start">
          <div className="flex justify-between w-full ">
            <h6 className="font-bold mb-0">Bill Harrison</h6>
            <p className="text-[#555] mb-0">2021-12-30</p>
          </div>
          <div className="flex items-start justify-start">
            <button className="flex cursor-pointer border-0">
              <FontAwesomeIcon icon={faStar} className="h-2" />
            </button>
            <button className="flex cursor-pointer border-0">
              <FontAwesomeIcon icon={faStar} className="h-2" />
            </button>
            <button className="flex cursor-pointer border-0">
              <FontAwesomeIcon icon={faStar} className="h-2" />
            </button>
            <button className="flex cursor-pointer border-0">
              <FontAwesomeIcon icon={faStar} className="h-2" />
            </button>
            <button className="flex cursor-pointer border-0">
              <FontAwesomeIcon icon={faStar} className="h-2" />
            </button>
          </div>
          <p className="mb-0 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
            ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Vestibulum
            ultricies aliquam.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Comments;
