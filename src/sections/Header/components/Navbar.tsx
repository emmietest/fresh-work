import { MobileMenuButton } from "@/sections/Header/components/MobileMenuButton";
import { DesktopNav } from "@/sections/Header/components/DesktopNav";
import { NavbarLogo } from "@/sections/Header/components/NavbarLogo";
import { SearchBar } from "@/components/forms/SearchBar";
import { HeaderActions } from "@/sections/Header/components/HeaderActions";

export const Navbar = () => {
  return (
    <section className="relative bg-white box-border caret-transparent w-full outline-[3px] break-words px-[15px] left-0 md:px-[30px]">
      <div className="relative items-center box-border caret-transparent flex flex-wrap max-w-[1840px] min-h-[70px] outline-[3px] break-words mx-auto md:flex-nowrap md:min-h-[90px]">
        <div className="relative box-border caret-transparent flex min-h-px min-w-[auto] outline-[3px] break-words w-full md:w-[33%]">
          <div className="relative content-center items-center box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto] outline-[3px] break-words w-full">
            <MobileMenuButton />
            <DesktopNav />
          </div>
        </div>
        <NavbarLogo />
        <div className="relative box-border caret-transparent flex min-h-px min-w-[auto] outline-[3px] break-words w-full md:w-[34%]">
          <div className="relative content-center items-center box-border caret-transparent flex flex-wrap justify-end min-h-[auto] min-w-[auto] outline-[3px] break-words w-full">
            <SearchBar />
            <HeaderActions />
          </div>
        </div>
      </div>
    </section>
  );
};
