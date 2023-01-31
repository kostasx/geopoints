import { createContext, useState, Dispatch, SetStateAction } from 'react';
import { User } from '../types/types';

interface UserData {
  userData: User | null;
  setUserData: Dispatch<SetStateAction<null>> | null;
}
const UserDataContext = createContext<UserData>({
  userData: null,
  setUserData: null,
});

function UserDataContextProvider({ children }: any) {
  const [userData, setUserData] = useState(null);

  return (
    <UserDataContext.Provider value={{
      userData, setUserData
    }}>
      {children}
    </UserDataContext.Provider>
  )
}

export { UserDataContext, UserDataContextProvider }