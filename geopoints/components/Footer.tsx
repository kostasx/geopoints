import { useState } from 'react';
import { IoAddCircleOutline } from 'react-icons/io5';
import { BsFillGeoFill } from 'react-icons/bs';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import ListsSidebar from './ListsSidebar';

const Footer = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {showSidebar && <ListsSidebar showSidebar={showSidebar} />}
      <footer className="bg-white h-16 z-10">
        <div className="p-4 flex justify-between text-gray-600 ">
          <BsFillGeoFill className="w-8 h-8" />
          <IoAddCircleOutline className="w-8 h-8" />
          <AiOutlineUnorderedList
            onClick={() => setShowSidebar(!showSidebar)}
            className="w-8 h-8"
          />
        </div>
      </footer>
    </>
  );
};

export default Footer;
