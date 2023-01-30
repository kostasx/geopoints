import { createContext, Dispatch, SetStateAction } from 'react';
import { User } from '../types/types';

interface UserDataContext {
  userData: User | null;
  setUserData: Dispatch<SetStateAction<null>> | null;
}
const UserDataContext = createContext<UserDataContext>({
  userData: null,
  setUserData: null,
});

export default UserDataContext;
