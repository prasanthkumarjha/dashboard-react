import { MenuIcon, NavDots, SearchIcon, ArrowIcon, UserIcon, NotificationIcon, CloseIcon } from "./icons/MenuIcon";

export default function Header({ onMenuClick }) {
  const navItems = ["Dashboard", "About US", "News", "User Policy", "Contacts"];
  return (
    <header className="flex items-center justify-between border-b-[2px] border-[#EDEFF2] h-[100px] px-6">
      <div className="flex items-center">
        <button
          onClick={onMenuClick}
          className="w-[50px] h-[50px] rounded-full circle-shadow bg-white flex justify-center items-center hover:cursor-pointer mr-4"
        >
          <MenuIcon />
        </button>
        <div className="font-bold text-[#4D5E80] text-lg">Constructor</div>
      </div>
      <nav className="hidden md:flex space-x-6 items-center">
        {navItems.map((item, index) => (
          <a
            key={item}
            href="#"
            className={
              `font-bold text-[#7D8FB3] text-[11px] lg:text-[13px] hover:text-gray-900 ` +
              `${index < 3 ? 'block ' : 'hidden xl:block'}`
            }
          >
            {item}
          </a>
        ))}
        <NavDots />
      </nav>
      <div className="hidden md:flex bg-white rounded-full items-center py-2 px-3 lg:w-[250px] xl:w-[350px]">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search Transactions and Documents"
          className="ml-2 flex-1 text-sm placeholder:text-xs placeholder:font-bold outline-none"
        />
        <ArrowIcon />
      </div>
      <div className="hidden md:flex items-center space-x-4">
        <div className="flex items-center lg:space-x-3">
          <UserIcon />
          <p className="font-bold text-[13px] hidden lg:block text-[#6B7A99]">Clayton Santos</p>
        </div>
        <div className="flex space-x-2">
          <div className="relative w-[50px] h-[50px] rounded-full p-[10px] circle-shadow bg-white">
            <NotificationIcon />
            <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-600 rounded-full" />
          </div>
          <div className="w-[50px] h-[50px] rounded-full p-[10px] circle-shadow bg-white">
            <CloseIcon />
          </div>
        </div>
      </div>
      <div className="md:hidden w-[50px] h-[50px] rounded-full p-[10px] bg-white flex items-center justify-center">
        <UserIcon />
      </div>
    </header>
  );
}
