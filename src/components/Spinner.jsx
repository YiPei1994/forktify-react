import { FaReact } from 'react-icons/fa';

function Spinner() {
  return (
    <div className="mx-auto my-12 flex items-center justify-center text-center">
      <FaReact className="h-12 w-12 animate-spin fill-amber-300 " />
    </div>
  );
}

export default Spinner;
