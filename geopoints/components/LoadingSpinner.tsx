import { ClipLoader } from 'react-spinners';

const LoadingSpinner = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <ClipLoader size={100} color={'#FFFFF'} />
    </div>
  );
};

export default LoadingSpinner;
