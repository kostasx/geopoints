import { AiOutlineSearch } from 'react-icons/ai';
import Image from 'next/image.js';

const FAKE_USER_IMG =
  'https://xsgames.co/randomusers/assets/images/favicon.png';

const Header = () => {
  return (
    <div className="bg-white h-16">
      <div className="p-4 flex justify-between">
        <div>
          <AiOutlineSearch className="text-gray-600 w-8 h-8" />
        </div>
        <input
          type="text"
          name="search"
          className="block w-full shadow italic bg-white text rounded-md mx-10 border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 text-sm"
          placeholder="Search..."
        ></input>
        <div>
          <Image
            src="/fake-user-profile-pic.png"
            alt="Profile picture"
            width={64}
            height={64}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
