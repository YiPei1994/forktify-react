import { useForkify } from '../hooks/useForkify';
import { BsPencilSquare } from 'react-icons/bs';
import { CiBookmark } from 'react-icons/ci';
import Modal from './Modal';
import AddRecipe from './addRecipe';

function ForkifyOperations() {
  const { handleDisplayBookmark } = useForkify();

  return (
    <Modal>
      <div className="mr-4 flex h-[100px] items-center">
        <Modal.Open opens="addrecipe">
          <button className="flex h-full items-center px-4 uppercase transition-all hover:bg-slate-100/75">
            <BsPencilSquare className="mr-3 text-red-400" />
            add recipe
          </button>
        </Modal.Open>
        <button
          onMouseOver={handleDisplayBookmark}
          className="flex h-full items-center px-4 uppercase transition-all hover:bg-slate-100/75"
        >
          <CiBookmark className="mr-3 text-red-400" />
          Bookmarks
        </button>
      </div>
      <Modal.Window name="addrecipe">
        <AddRecipe />
      </Modal.Window>
    </Modal>
  );
}

export default ForkifyOperations;
