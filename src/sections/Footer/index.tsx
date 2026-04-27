import { NewsletterSignup } from "@/sections/Footer/components/NewsletterSignup";
import { FooterMain } from "@/sections/Footer/components/FooterMain";
import { FooterBottom } from "@/sections/Footer/components/FooterBottom";

export const Footer = () => {
  return (
    <footer
      role="contentinfo"
      className="box-border caret-transparent outline-[3px] break-words mb-[65px] md:mb-0"
    >
      <div className="box-border caret-transparent outline-[3px] break-words w-full">
        <div className="box-border caret-transparent outline-[3px] break-words">
          <section className="relative bg-slate-100 box-border caret-transparent ml-[calc(50%_-_187.5px)] mr-[calc(50%_-_187.5px)] outline-[3px] break-words w-screen px-[15px] left-0 md:ml-[calc(50%_-_640px)] md:mr-[calc(50%_-_640px)] md:px-[30px]">
            <div className="relative box-border caret-transparent flex flex-wrap max-w-[1410px] outline-[3px] break-words mx-auto md:flex-nowrap">
              <div className="relative box-border caret-transparent flex min-h-px min-w-[auto] outline-[3px] break-words w-full">
                <div className="relative content-start box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto] outline-[3px] break-words w-full">
                  <NewsletterSignup />
                  <FooterMain />
                  <section className="relative box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] break-words w-full">
                    <div className="relative box-border caret-transparent flex flex-wrap outline-[3px] break-words mx-auto md:flex-nowrap">
                      <div className="relative box-border caret-transparent flex min-h-px min-w-[auto] outline-[3px] break-words w-full">
                        <div className="relative content-center items-center box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto] outline-[3px] break-words w-full">
                          <div className="relative box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] break-words w-full">
                            <div className="box-border caret-transparent outline-[3px] break-words">
                              <div className="box-border caret-transparent flex outline-[3px] break-words py-[43px]">
                                <span className="border-b-slate-600 border-l-slate-600 border-r-slate-600 border-t-gray-200 box-border caret-transparent flex min-h-[auto] min-w-[auto] outline-[3px] break-words w-full border-t"></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <FooterBottom />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
};
