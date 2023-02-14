import { Button } from '../ui/Button';
import { BlogItems } from './BlogItems';

export const FromBlog = () => {
  return (
    <div className="container section">
      <h3 className="text-center font-bold mb-6">From Our Blogs</h3>
      <div className="flex justify-center mb-4">
        <p className="text-center text-[#555] ">
          Design your home interior story! Here are the latest trends, tips, and
          design tricks to help you out.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:gap-4">
        <BlogItems />
      </div>
      <div className="flex justify-center">
        <Button variant="outline" size="normal">
          view more
        </Button>
      </div>
    </div>
  );
};
