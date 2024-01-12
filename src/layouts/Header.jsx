import ForkifyOperations from '../components/ForkifyOperations';
import Logo from '../components/Logo';
import SearchInput from '../components/SearchInput';

function Header() {
  return (
    <div className="relative flex w-[100%] items-center justify-between bg-red-50/25">
      <Logo />
      <SearchInput />
      <ForkifyOperations />
    </div>
  );
}

export default Header;
