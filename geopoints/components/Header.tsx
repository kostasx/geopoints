import Link from 'next/link';
import Image from 'next/image.js';
import { SearchBar } from './SearchBar';
import { useContext } from 'react';
import UserDataContext from '../contexts/UserDataContext';

const Header = () => {
  const { userData, setUserData } = useContext(UserDataContext);
  console.log(
    'user data from global context in the header component',
    userData
  );
  function redirectProfile() {}

  return (
    <div>
      <SearchBar />
      <Link
        href=""
        className="fixed
            right-0
            top-0
            flex
            z-20
            justify-center
            items-center
            overflow-hidden
            rounded-bl-lg
            backdrop-blur-sm
            w-16
            h-16"
      >
        <Image
          src={userData?.image_path || '/fake-user-profile-pic.png'}
          alt="Profile picture"
          width={64}
          height={64}
        />
      </Link>
    </div>
  );
};

export default Header;
