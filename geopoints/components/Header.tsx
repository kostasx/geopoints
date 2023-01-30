import Link from 'next/link'
import Image from 'next/image.js';

import { SearchBar } from './SearchBar';

const Header = () => {
  function redirectProfile() {

  }

  return (
    <div>

          <SearchBar />
        <Link href='' className='fixed
            right-0
            top-0
            flex
            z-10
            justify-center
            items-center
            overflow-hidden
            rounded-bl-lg
            bg-white
            w-16
            h-16'>
          <Image
            src="/fake-user-profile-pic.png"
            alt="Profile picture"
            width={64}
            height={64}
          />
        </Link>
    </div>
  );
};

export default Header;
