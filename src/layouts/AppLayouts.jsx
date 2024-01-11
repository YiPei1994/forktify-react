import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';

function AppLayouts() {
  return (
    <div className="m-auto flex w-[80%] flex-col gap-6">
      <Header />
      <div>
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default AppLayouts;
