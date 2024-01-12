import BookMark from '../components/BookMark';
import ForkifyOperations from '../components/ForkifyOperations';
import Logo from '../components/Logo';
import SearchInput from '../components/SearchInput';
import AddRecipe from '../components/addRecipe';
import { useForkify } from '../hooks/useForkify';

function Header() {
  const { displayBookmark, displayAddRecipe } = useForkify();
  return (
    <div>
      <Logo />
      <SearchInput />
      <ForkifyOperations />
      {displayAddRecipe && <AddRecipe />}
      {displayBookmark && <BookMark />}
    </div>
  );
}

export default Header;
