import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

export const SearchBar = () => {

    const [showSearchInput, setShowSearchInput] = useState(false)

    function toggleSearch() {
        setShowSearchInput(!showSearchInput)
    }

    return (
        <div >
            <button onClick={toggleSearch} className='fixed 
            left-0 
            top-0 
            flex
            z-10
            justify-center
            items-center
            rounded-br-lg
            bg-white 
            w-16 
            h-16'>
                <AiOutlineSearch className="text-gray-600 w-8 h-8" />
            </button>
            {showSearchInput &&
                <div className='fixed
                flex
                shadow-none
                border-none
                bg-white 
                top-0 
                z-0
                pl-16
                pr-16
                h-16 
                w-screen'>
                    <input
                        type="text"
                        name="search"
                        className="block 
                            w-full 
                            shadow 
                            italic 
                            bg-white 
                            text 
                            rounded-md 
                            pl-2
                            border-gray-300 
                            focus:border-indigo-500 
                            focus:ring-indigo-500 
                            text-sm"
                        placeholder="Search..."
                    ></input>
                </div>
            }
        </div>

    )
}
