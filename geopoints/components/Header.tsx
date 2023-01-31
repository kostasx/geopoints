import Link from 'next/link';
import Image from 'next/image.js';
import { SearchBar } from './SearchBar';
import { useContext } from 'react';
import { UserDataContext } from '../contexts/UserDataContext';

const Header = () => {
  const { userData } = useContext(UserDataContext);
  console.log(
    'User data from global context in the header component',
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
            backdrop-blur-lg
            w-16
            h-16"
      >
        <Image
          src={userData?.imagePath || '/fake-user-profile-pic.png'}
          alt="Profile picture"
          width={40}
          height={40}
          className="rounded-full"
        />
      </Link>
    </div>
  );
};

export default Header;
