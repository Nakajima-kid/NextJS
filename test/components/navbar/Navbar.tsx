import { DarkMode } from "./DarkMode";
import DropdownList from "./DropdownList";
import Logo from "./Logo";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-col justify-between px-8 py-8 mx-auto gap-4 sm:flex-row sm:item-center">
        <Logo></Logo>
        <Search></Search>
        <div className="flex gap-4">
          <DarkMode />
          <DropdownList/>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
