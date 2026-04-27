import { Header } from "@/sections/Header";
import { LoginModal } from "@/components/LoginModal";
import { MobileSidebarMenu } from "@/components/navigation/MobileSidebarMenu";
import { CartDrawer } from "@/components/CartDrawer";

export const App = () => {
  return (
    <body className="text-slate-600 text-sm not-italic normal-nums font-normal accent-auto bg-slate-100 box-border caret-transparent block tracking-[normal] leading-6 list-outside list-disc outline-[3px] break-words overflow-x-hidden overflow-y-auto pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-poppins">
      <Header />
      <LoginModal />
      <MobileSidebarMenu />
      <div className="fixed box-border caret-transparent h-full outline-[3px] break-words pointer-events-none w-full z-[99999979] left-0 top-0">
        <div className="relative box-border caret-transparent h-full outline-[3px] break-words w-full"></div>
      </div>
      <CartDrawer />
    </body>
  );
};
