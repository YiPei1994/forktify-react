import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';

function AppLayouts() {
  return (
    <div className="m-auto flex h-auto w-[100%] flex-col gap-6">
      <Header />
      <div className="flex">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default AppLayouts;
