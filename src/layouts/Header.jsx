import ForkifyOperations from '../components/ForkifyOperations';
import Logo from '../components/Logo';
import SearchInput from '../components/SearchInput';

function Header() {
  return (
    <div>
      <Logo />
      <SearchInput />
      <ForkifyOperations />
    </div>
  );
}

export default Header;
