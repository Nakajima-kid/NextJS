import Logo from "./Logo";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-col justify-between px-8 py-8 mx-auto gap-4 sm:flex-row sm:item-center">
        <Logo></Logo>
        <Search></Search>
        <div>
          <h1>Darkmode</h1>
          <h1>Profile</h1>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
