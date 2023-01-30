import ListToggle from './ListToggle';

interface ListsSidebarProps {
  showSidebar: boolean;
}

const ListsSidebar: React.FC<ListsSidebarProps> = ({ showSidebar }) => {
  // thsi componenet needs the showSidebar prop to create a smooth animation
  // todo work on animation
  // get lists from context
  return (
    <div
      className={`${
        showSidebar ? 'translate-x-0 ' : 'translate-x-full'
      } fixed text-left h-full top-0 right-0 w-[70vw] bg-white shadow p-10 pl-10  text-white transition-all ease-in-out duration-600
      `}
    >
      <h2 className="w-full text-2xl font-bold text-gray-800">Map</h2>
      <h2 className="mt-10 w-full text-xl font-bold text-gray-800">Display:</h2>
      <ListToggle />
    </div>
  );
};

export default ListsSidebar;
