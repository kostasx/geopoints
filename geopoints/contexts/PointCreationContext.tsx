import { createContext, useState, Dispatch, SetStateAction } from 'react';
import { Coordinates } from '../types/types';

interface PointCreate {
  centerCoordinates: Coordinates | null;
  setCenterCoordinates: Dispatch<SetStateAction<null>> | null;
}
const PointCreationContext = createContext<PointCreate>({
  centerCoordinates: null,
  setCenterCoordinates: null,
});

function PointCreationContextProvider({ children }: any) {
  const [centerCoordinates, setCenterCoordinates] = useState(null);

  return (
    <PointCreationContext.Provider value={{
      centerCoordinates, setCenterCoordinates
    }}>
      {children}
    </PointCreationContext.Provider>
  )
}

export { PointCreationContext, PointCreationContextProvider }