import { ClipLoader } from 'react-spinners';

const LoadingSpinner = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-white">
      <ClipLoader size={100} color={'#cbd5e1'} />
    </div>
  );
};

export default LoadingSpinner;
