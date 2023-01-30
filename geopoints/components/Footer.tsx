import { IoAddCircleOutline } from 'react-icons/io5';
import { BsFillGeoFill } from 'react-icons/bs';
import { AiOutlineUnorderedList } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="bg-white h-16">
      <div className="p-4 flex justify-between">
        <div>
          <BsFillGeoFill className="text-gray-600 w-8 h-8" />
        </div>
        <div>
          <IoAddCircleOutline className="text-gray-600 w-8 h-8" />
        </div>
        <div>
          <AiOutlineUnorderedList className="text-gray-600 w-8 h-8" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
