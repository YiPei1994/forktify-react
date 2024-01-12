import { useForkify } from '../hooks/useForkify';
import { BsPencilSquare } from 'react-icons/bs';
import { CiBookmark } from 'react-icons/ci';
import AddRecipe from '../components/AddRecipe';

function ForkifyOperations() {
  const { handleDisplayBookmark, handleHideBookmark } = useForkify();

  return (
    <div className="flex h-[100px] items-center">
      <button className="flex h-full items-center px-4 uppercase transition-all hover:bg-slate-100/75">
        <BsPencilSquare className="mr-3 text-red-400" />
        add recipe
      </button>

      <button
        onMouseOver={handleDisplayBookmark}
        onMouseOut={handleHideBookmark}
        className="flex h-full items-center px-4 uppercase transition-all hover:bg-slate-100/75"
      >
        <CiBookmark className="mr-3 text-red-400" />
        Bookmarks
      </button>
    </div>
  );
}

export default ForkifyOperations;
