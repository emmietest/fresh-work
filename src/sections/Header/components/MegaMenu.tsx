export type MegaMenuHomeItem = {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
};

export type MegaMenuLinkItem = {
  href: string;
  label: string;
};

export type MegaMenuSection = {
  title: string;
  links: MegaMenuLinkItem[];
};

export type MegaMenuPromo = {
  href: string;
  titleLines: string[];
  label: string;
};

export type MegaMenuTabItem = {
  href: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  count: string;
  linkClassName?: string;
  itemWrapperClassName?: string;
};

export type MegaMenuTab = {
  label: string;
  items: MegaMenuTabItem[];
};

export type MegaMenuProps = {
  variant: string;
  homeItems?: MegaMenuHomeItem[];
  sections?: MegaMenuSection[];
  promo?: MegaMenuPromo;
  tabs?: MegaMenuTab[];
};

export const MegaMenu = (props: MegaMenuProps) => {
  if (props.variant === "home") {
    return (
      <ul className="static bg-white shadow-[rgba(0,0,0,0.08)_0px_0px_30px_0px] box-border caret-transparent list-disc opacity-100 outline-[3px] break-words pointer-events-auto text-start transform-none visible z-auto ml-[19.8205px] pl-0 left-auto top-auto md:absolute md:list-none md:opacity-0 md:pointer-events-none md:text-left md:translate-y-5 md:invisible md:z-[99999] md:ml-0 md:left-[11.2px] md:top-full w-screen">
        <li className="static box-border caret-transparent list-item list-disc min-w-0 outline-[3px] break-words pointer-events-auto text-start visible md:relative md:block md:list-none md:min-w-[280px] md:pointer-events-none md:text-left md:invisible">
          <div className="box-border caret-transparent list-disc outline-[3px] break-words pointer-events-auto text-start visible md:list-none md:pointer-events-none md:text-left md:invisible">
            <div className="relative bg-white shadow-[rgba(0,0,0,0.08)_0px_3px_30px_0px] box-border caret-transparent flex flex-col list-disc max-w-full outline-[3px] break-words pointer-events-auto visible w-full mx-auto px-[15px] md:list-none md:pointer-events-none md:invisible">
              <div className="content-center items-stretch box-border caret-transparent gap-x-0 flex grow flex-wrap h-full justify-center list-disc max-w-[min(100%,767px)] min-h-0 min-w-0 outline-[3px] break-words pointer-events-auto gap-y-0 visible w-full mx-auto py-[50px] md:list-none md:max-w-[1800px] md:min-h-[auto] md:min-w-[auto] md:pointer-events-none md:invisible">
                {(props.homeItems || []).map((item, index) => (
                  <div
                    className="relative self-center box-border caret-transparent gap-x-0 flex flex-col flex-wrap list-disc min-h-0 outline-[3px] break-words pointer-events-auto gap-y-0 visible w-full pb-[25px] px-[15px] md:flex-nowrap md:list-none md:min-h-[auto] md:pointer-events-none md:invisible md:w-1/5"
                    key={index}
                  >
                    <div className="relative box-border caret-transparent gap-x-0 list-disc max-w-full min-h-0 outline-[3px] break-words pointer-events-auto gap-y-0 visible md:list-none md:min-h-[auto] md:pointer-events-none md:invisible">
                      <div className="box-border caret-transparent h-full list-disc outline-[3px] break-words pointer-events-auto visible md:list-none md:pointer-events-none md:invisible">
                        <div className="box-border caret-transparent list-disc outline-[3px] break-words pointer-events-auto text-center visible md:list-none md:pointer-events-none md:invisible">
                          <figure className="box-border caret-transparent inline-block list-disc outline-[3px] break-words pointer-events-auto visible w-full mb-[15px] mx-auto md:list-none md:pointer-events-none md:invisible md:mx-0">
                            <a
                              href={item.href}
                              className="text-black box-border caret-transparent inline list-disc outline-[3px] break-words pointer-events-auto visible md:block md:list-none md:pointer-events-none md:invisible"
                            >
                              <img
                                src={item.imageSrc}
                                alt={item.imageAlt}
                                className="aspect-[auto_190_/_250] shadow-[rgba(0,0,0,0.08)_0px_0px_15px_0px] box-border caret-transparent leading-[0px] list-disc max-w-full outline-[3px] break-words pointer-events-auto align-baseline visible w-[190px] border-zinc-100 rounded-[20px] border-2 border-solid md:list-none md:pointer-events-none md:invisible"
                              />
                            </a>
                          </figure>
                          <div className="box-border caret-transparent list-disc outline-[3px] break-words pointer-events-auto visible w-full px-[15px] md:list-none md:pointer-events-none md:invisible md:px-[30px]">
                            <h3 className="text-black font-semibold box-border caret-transparent clear-both leading-[14px] list-disc outline-[3px] break-words pointer-events-auto visible mb-[7.57108px] font-poppins md:list-none md:pointer-events-none md:invisible">
                              <a
                                href={item.href}
                                className="box-border caret-transparent inline list-disc outline-[3px] break-words pointer-events-auto visible md:block md:list-none md:pointer-events-none md:invisible"
                              >
                                {item.title}
                              </a>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </li>
      </ul>
    );
  }

  if (props.variant === "shop") {
    return (
      <ul className="static bg-white shadow-[rgba(0,0,0,0.08)_0px_0px_30px_0px] box-border caret-transparent list-disc opacity-100 outline-[3px] break-words pointer-events-auto text-start transform-none visible z-auto ml-[19.8205px] pl-0 left-auto top-auto md:absolute md:list-none md:opacity-0 md:pointer-events-none md:text-left md:translate-y-5 md:invisible md:z-[99999] md:ml-0 md:left-[11.2px] md:top-full max-w-[1410px]">
        <li className="static box-border caret-transparent list-item list-disc min-w-0 outline-[3px] break-words pointer-events-auto text-start visible md:relative md:block md:list-none md:min-w-[280px] md:pointer-events-none md:text-left md:invisible">
          <div className="box-border caret-transparent list-disc outline-[3px] break-words pointer-events-auto text-start visible md:list-none md:pointer-events-none md:text-left md:invisible">
            <section className="relative bg-white box-border caret-transparent list-disc outline-[3px] break-words pointer-events-auto text-start visible p-10 md:list-none md:pointer-events-none md:text-left md:invisible">
              <div className="relative box-border caret-transparent flex flex-wrap list-disc max-w-[767px] outline-[3px] break-words pointer-events-auto text-start visible mx-auto md:flex-nowrap md:list-none md:max-w-[1410px] md:pointer-events-none md:text-left md:invisible">
                <div className="relative box-border caret-transparent flex list-disc min-h-px min-w-0 outline-[3px] break-words pointer-events-auto text-start visible w-full md:list-none md:min-w-[auto] md:pointer-events-none md:text-left md:invisible md:w-3/12">
                  <div className="relative content-start box-border caret-transparent flex flex-wrap list-disc min-h-0 min-w-0 outline-[3px] break-words pointer-events-auto text-start visible w-full md:list-none md:min-h-[auto] md:min-w-[auto] md:pointer-events-none md:text-left md:invisible">
                    {(props.sections || [])
                      .slice(0, 1)
                      .map((section, index) => (
                        <div
                          className="relative box-border caret-transparent list-disc min-h-0 min-w-0 outline-[3px] break-words pointer-events-auto text-start visible w-full md:list-none md:min-h-[auto] md:min-w-[auto] md:pointer-events-none md:text-left md:invisible"
                          key={index}
                        >
                          <div className="box-border caret-transparent list-disc outline-[3px] break-words pointer-events-auto text-start visible mb-5 md:list-none md:pointer-events-none md:text-left md:invisible">
                            <h2 className="text-black text-lg font-medium box-border caret-transparent clear-both tracking-[-1px] leading-[26px] list-disc outline-[3px] break-words pointer-events-auto text-start visible font-poppins md:list-none md:pointer-events-none md:text-left md:invisible">
                              {section.title}
                            </h2>
                          </div>
                          <div className="relative box-border caret-transparent list-disc min-h-0 min-w-0 outline-[3px] break-words pointer-events-auto text-start visible w-full md:list-none md:min-h-[auto] md:min-w-[auto] md:pointer-events-none md:text-left md:invisible">
                            <div className="box-border caret-transparent list-disc outline-[3px] break-words pointer-events-auto text-start visible md:list-none md:pointer-events-none md:text-left md:invisible">
                              <ul className="box-border caret-transparent outline-[3px] break-words pointer-events-auto text-start visible ml-[19.8205px] pl-0 md:pointer-events-none md:text-left md:invisible md:ml-0">
                                {section.links.map((link, linkIndex) => (
                                  <li
                                    key={linkIndex}
                                    className={
                                      linkIndex === 0
                                        ? "relative items-center box-border caret-transparent flex outline-[3px] break-words pointer-events-auto text-start visible pb-[5px] md:block md:pointer-events-none md:text-left md:invisible"
                                        : linkIndex === section.links.length - 1
                                          ? "relative items-center box-border caret-transparent flex outline-[3px] break-words pointer-events-auto text-start visible mt-[5px] md:block md:pointer-events-none md:text-left md:invisible"
                                          : "relative items-center box-border caret-transparent flex outline-[3px] break-words pointer-events-auto text-start visible mt-[5px] pb-[5px] md:block md:pointer-events-none md:text-left md:invisible"
                                    }
                                  >
                                    <a
                                      href={link.href}
                                      className="font-medium items-center box-border caret-transparent flex outline-[3px] break-words pointer-events-auto text-start visible w-full md:block md:pointer-events-none md:text-left md:invisible"
                                    >
                                      <span className="box-border caret-transparent block outline-[3px] break-words pointer-events-auto text-start visible md:inline md:pointer-events-none md:text-left md:invisible">
                                        {link.label}
                                      </span>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                <div className="relative box-border caret-transparent flex list-disc min-h-px min-w-0 outline-[3px] break-words pointer-events-auto text-start visible w-full md:list-none md:min-w-[auto] md:pointer-events-none md:text-left md:invisible md:w-3/12">
                  <div className="relative content-start box-border caret-transparent flex flex-wrap list-disc min-h-0 min-w-0 outline-[3px] break-words pointer-events-auto text-start visible w-full md:list-none md:min-h-[auto] md:min-w-[auto] md:pointer-events-none md:text-left md:invisible">
                    {(props.sections || [])
                      .slice(1, 3)
                      .map((section, index) => (
                        <div
                          className="relative box-border caret-transparent list-disc min-h-0 min-w-0 outline-[3px] break-words pointer-events-auto text-start visible w-full md:list-none md:min-h-[auto] md:min-w-[auto] md:pointer-events-none md:text-left md:invisible"
                          key={index}
                        >
                          <div
                            className={
                              index === 0
                                ? "box-border caret-transparent list-disc outline-[3px] break-words pointer-events-auto text-start visible mb-5 md:list-none md:pointer-events-none md:text-left md:invisible"
                                : "box-border caret-transparent list-disc outline-[3px] break-words pointer-events-auto text-start visible my-5 md:list-none md:pointer-events-none md:text-left md:invisible"
                            }
                          >
                            <h2 className="text-black text-lg font-medium box-border caret-transparent clear-both tracking-[-1px] leading-[26px] list-disc outline-[3px] break-words pointer-events-auto text-start visible font-poppins md:list-none md:pointer-events-none md:text-left md:invisible">
                              {section.title}
                            </h2>
                          </div>
                          <div className="relative box-border caret-transparent list-disc min-h-0 min-w-0 outline-[3px] break-words pointer-events-auto text-start visible w-full md:list-none md:min-h-[auto] md:min-w-[auto] md:pointer-events-none md:text-left md:invisible">
                            <div className="box-border caret-transparent list-disc outline-[3px] break-words pointer-events-auto text-start visible md:list-none md:pointer-events-none md:text-left md:invisible">
                              <ul className="box-border caret-transparent outline-[3px] break-words pointer-events-auto text-start visible ml-[19.8205px] pl-0 md:pointer-events-none md:text-left md:invisible md:ml-0">
                                {section.links.map((link, linkIndex) => (
                                  <li
                                    key={linkIndex}
                                    className={
                                      linkIndex === 0
                                        ? "relative items-center box-border caret-transparent flex outline-[3px] break-words pointer-events-auto text-start visible pb-[5px] md:block md:pointer-events-none md:text-left md:invisible"
                                        : linkIndex === section.links.length - 1
                                          ? "relative items-center box-border caret-transparent flex outline-[3px] break-words pointer-events-auto text-start visible mt-[5px] md:block md:pointer-events-none md:text-left md:invisible"
                                          : "relative items-center box-border caret-transparent flex outline-[3px] break-words pointer-events-auto text-start visible mt-[5px] pb-[5px] md:block md:pointer-events-none md:text-left md:invisible"
                                    }
                                  >
                                    <a
                                      href={link.href}
                                      className="font-medium items-center box-border caret-transparent flex outline-[3px] break-words pointer-events-auto text-start visible w-full md:block md:pointer-events-none md:text-left md:invisible"
                                    >
                                      <span className="box-border caret-transparent block outline-[3px] break-words pointer-events-auto text-start visible md:inline md:pointer-events-none md:text-left md:invisible">
                                        {link.label}
                                      </span>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                <div className="relative box-border caret-transparent flex list-disc min-h-px min-w-0 outline-[3px] break-words pointer-events-auto text-start visible w-full md:list-none md:min-w-[auto] md:pointer-events-none md:text-left md:invisible md:w-3/12">
                  <div className="relative content-start box-border caret-transparent flex flex-wrap list-disc min-h-0 min-w-0 outline-[3px] break-words pointer-events-auto text-start visible w-full md:list-none md:min-h-[auto] md:min-w-[auto] md:pointer-events-none md:text-left md:invisible">
                    {(props.sections || [])
                      .slice(3, 4)
                      .map((section, index) => (
                        <div
                          className="relative box-border caret-transparent list-disc min-h-0 min-w-0 outline-[3px] break-words pointer-events-auto text-start visible w-full md:list-none md:min-h-[auto] md:min-w-[auto] md:pointer-events-none md:text-left md:invisible"
                          key={index}
                        >
                          <div className="box-border caret-transparent list-disc outline-[3px] break-words pointer-events-auto text-start visible mb-5 md:list-none md:pointer-events-none md:text-left md:invisible">
                            <h2 className="text-black text-lg font-medium box-border caret-transparent clear-both tracking-[-1px] leading-[26px] list-disc outline-[3px] break-words pointer-events-auto text-start visible font-poppins md:list-none md:pointer-events-none md:text-left md:invisible">
                              {section.title}
                            </h2>
                          </div>
                          <div className="relative box-border caret-transparent list-disc min-h-0 min-w-0 outline-[3px] break-words pointer-events-auto text-start visible w-full md:list-none md:min-h-[auto] md:min-w-[auto] md:pointer-events-none md:text-left md:invisible">
                            <div className="box-border caret-transparent list-disc outline-[3px] break-words pointer-events-auto text-start visible md:list-none md:pointer-events-none md:text-left md:invisible">
                              <ul className="box-border caret-transparent outline-[3px] break-words pointer-events-auto text-start visible ml-[19.8205px] pl-0 md:pointer-events-none md:text-left md:invisible md:ml-0">
                                {section.links.map((link, linkIndex) => (
                                  <li
                                    key={linkIndex}
                                    className={
                                      linkIndex === 0
                                        ? "relative items-center box-border caret-transparent flex outline-[3px] break-words pointer-events-auto text-start visible pb-[5px] md:block md:pointer-events-none md:text-left md:invisible"
                                        : linkIndex === section.links.length - 1
                                          ? "relative items-center box-border caret-transparent flex outline-[3px] break-words pointer-events-auto text-start visible mt-[5px] md:block md:pointer-events-none md:text-left md:invisible"
                                          : "relative items-center box-border caret-transparent flex outline-[3px] break-words pointer-events-auto text-start visible mt-[5px] pb-[5px] md:block md:pointer-events-none md:text-left md:invisible"
                                    }
                                  >
                                    <a
                                      href={link.href}
                                      className="font-medium items-center box-border caret-transparent flex outline-[3px] break-words pointer-events-auto text-start visible w-full md:block md:pointer-events-none md:text-left md:invisible"
                                    >
                                      <span className="box-border caret-transparent block outline-[3px] break-words pointer-events-auto text-start visible md:inline md:pointer-events-none md:text-left md:invisible">
                                        {link.label}
                                      </span>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                <div className="relative box-border caret-transparent flex list-disc min-h-px min-w-0 outline-[3px] break-words pointer-events-auto text-start visible w-full md:list-none md:min-w-[auto] md:pointer-events-none md:text-left md:invisible md:w-3/12">
                  <div className="relative content-start box-border caret-transparent flex flex-wrap list-disc min-h-0 min-w-0 outline-[3px] break-words pointer-events-auto text-start visible w-full md:list-none md:min-h-[auto] md:min-w-[auto] md:pointer-events-none md:text-left md:invisible">
                    <div className="relative box-border caret-transparent list-disc min-h-0 min-w-0 outline-[3px] break-words pointer-events-auto text-start visible w-full md:list-none md:min-h-[auto] md:min-w-[auto] md:pointer-events-none md:text-left md:invisible">
                      <div className="box-border caret-transparent list-disc outline-[3px] break-words pointer-events-auto text-start visible md:list-none md:pointer-events-none md:text-left md:invisible">
                        <a
                          href={props.promo?.href || "#"}
                          className="relative text-black box-border caret-transparent flex list-disc outline-[3px] break-words pointer-events-auto text-start visible overflow-hidden md:block md:list-none md:pointer-events-none md:text-left md:invisible"
                        >
                          <div className="absolute box-border caret-transparent list-disc outline-[3px] break-words pointer-events-auto text-start visible w-full z-[1] overflow-hidden rounded-[30px] inset-0 md:list-none md:pointer-events-none md:text-left md:invisible">
                            <div className="absolute bg-[url('https://c.animaapp.com/mofvyhmcWjEMZ6/assets/menu_banner.jpg')] bg-no-repeat bg-cover box-border caret-transparent list-disc outline-[3px] break-words pointer-events-auto text-start visible w-full z-[1] bg-center inset-0 md:list-none md:pointer-events-none md:text-left md:invisible"></div>
                            <div className="absolute box-border caret-transparent h-full list-disc outline-[3px] break-words pointer-events-none text-start visible w-full z-[2] left-0 bottom-0 md:list-none md:text-left md:invisible"></div>
                          </div>
                          <div className="relative content-start items-start box-border caret-transparent flex flex-wrap list-disc min-h-[500px] outline-[3px] break-words pointer-events-auto text-left visible w-full z-[1] overflow-hidden pl-[30px] pr-0 py-[45px] md:list-none md:min-h-[280px] md:pointer-events-none md:invisible md:p-10">
                            <div className="box-border caret-transparent list-disc min-h-0 min-w-0 outline-[3px] break-words pointer-events-auto visible w-[260px] md:list-none md:min-h-[auto] md:min-w-[auto] md:pointer-events-none md:invisible">
                              <div className="relative text-white text-[13px] font-semibold box-border caret-transparent tracking-[2px] leading-[18px] list-disc outline-[3px] break-words pointer-events-auto uppercase visible w-full mb-5 md:list-none md:pointer-events-none md:invisible">
                                <span className="box-border caret-transparent list-disc outline-[3px] break-words pointer-events-auto visible md:list-none md:pointer-events-none md:invisible">
                                  {props.promo?.label}
                                </span>
                              </div>
                              <h3 className="relative text-white text-3xl font-semibold box-border caret-transparent clear-both tracking-[-1px] leading-9 list-disc outline-[3px] break-words pointer-events-auto visible w-full -ml-1 mb-[60px] md:text-[26px] md:leading-8 md:list-none md:pointer-events-none md:invisible">
                                {(props.promo?.titleLines || []).map(
                                  (line, index) => (
                                    <span
                                      className="text-3xl box-border caret-transparent inline-block leading-9 list-disc outline-[3px] break-words pointer-events-auto visible mx-1 md:text-[26px] md:leading-8 md:list-none md:pointer-events-none md:invisible"
                                      key={index}
                                    >
                                      {line}
                                    </span>
                                  ),
                                )}
                              </h3>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </li>
      </ul>
    );
  }

  return (
    <ul className="static bg-white shadow-[rgba(0,0,0,0.08)_0px_0px_30px_0px] box-border caret-transparent list-disc opacity-100 outline-[3px] break-words pointer-events-auto text-start transform-none visible z-auto ml-[19.8205px] pl-0 left-auto top-auto md:absolute md:list-none md:opacity-0 md:pointer-events-none md:text-left md:translate-y-5 md:invisible md:z-[99999] md:ml-0 md:left-[11.2px] md:top-full max-w-[1410px]">
      <li className="static box-border caret-transparent list-item list-disc min-w-0 outline-[3px] break-words pointer-events-auto text-start visible md:relative md:block md:list-none md:min-w-[280px] md:pointer-events-none md:text-left md:invisible">
        <div className="box-border caret-transparent list-disc outline-[3px] break-words pointer-events-auto text-start visible md:list-none md:pointer-events-none md:text-left md:invisible">
          <section className="relative bg-white box-border caret-transparent list-disc outline-[3px] break-words pointer-events-auto text-start visible p-10 md:list-none md:pointer-events-none md:text-left md:invisible">
            <div className="relative box-border caret-transparent flex flex-wrap list-disc max-w-[767px] outline-[3px] break-words pointer-events-auto text-start visible mx-auto md:flex-nowrap md:list-none md:max-w-[1410px] md:pointer-events-none md:text-left md:invisible">
              <div className="relative box-border caret-transparent flex list-disc min-h-px min-w-0 outline-[3px] break-words pointer-events-auto text-start visible w-full md:list-none md:min-w-[auto] md:pointer-events-none md:text-left md:invisible">
                <div className="relative content-start box-border caret-transparent flex flex-wrap list-disc min-h-0 min-w-0 outline-[3px] break-words pointer-events-auto text-start visible w-full md:list-none md:min-h-[auto] md:min-w-[auto] md:pointer-events-none md:text-left md:invisible">
                  <div className="relative box-border caret-transparent list-disc min-h-0 min-w-0 outline-[3px] break-words pointer-events-auto text-start visible w-full md:list-none md:min-h-[auto] md:min-w-[auto] md:pointer-events-none md:text-left md:invisible">
                    <div className="box-border caret-transparent list-disc outline-[3px] break-words pointer-events-auto text-start visible md:list-none md:pointer-events-none md:text-left md:invisible">
                      <div
                        role="tablist"
                        className="box-border caret-transparent block list-disc outline-[3px] break-words pointer-events-auto visible md:flex md:list-none md:pointer-events-none md:invisible"
                      >
                        <div className="box-border caret-transparent flex-row shrink-0 list-disc min-h-0 min-w-0 outline-[3px] break-words pointer-events-auto visible w-3/12 overflow-hidden mr-[30px] md:flex-col md:list-none md:min-h-[auto] md:min-w-[auto] md:pointer-events-none md:invisible">
                          <div className="box-border caret-transparent list-disc outline-[3px] break-words pointer-events-auto visible md:list-none md:pointer-events-none md:invisible"></div>
                          {(props.tabs || []).map((tab, index) => (
                            <div
                              key={index}
                              role="tab"
                              className={
                                index === 0
                                  ? "relative text-violet-700 font-medium items-center box-border caret-transparent flex justify-between leading-9 list-disc outline-[3px] break-words pointer-events-auto visible w-[220px] md:list-none md:pointer-events-none md:invisible"
                                  : "relative font-medium items-center box-border caret-transparent flex justify-between leading-9 list-disc outline-[3px] break-words pointer-events-auto visible w-[220px] md:list-none md:pointer-events-none md:invisible"
                              }
                            >
                              <span className="box-border caret-transparent block list-disc min-h-0 min-w-0 outline-[3px] break-words pointer-events-auto visible md:list-none md:min-h-[auto] md:min-w-[auto] md:pointer-events-none md:invisible">
                                {tab.label}
                              </span>
                            </div>
                          ))}
                          <div className="box-border caret-transparent list-disc outline-[3px] break-words pointer-events-auto visible md:list-none md:pointer-events-none md:invisible"></div>
                        </div>

                        <div className="box-border caret-transparent grow-0 list-disc min-h-0 min-w-0 outline-[3px] break-words pointer-events-auto visible md:grow md:list-none md:min-h-[auto] md:min-w-[auto] md:pointer-events-none md:invisible">
                          {(props.tabs || []).map((tab, index) => (
                            <div key={index}>
                              <div
                                role="tab"
                                className={
                                  index === 0
                                    ? "text-violet-700 font-medium items-center box-border caret-transparent block justify-between leading-9 list-disc outline-[3px] break-words pointer-events-auto visible w-[220px] md:hidden md:list-none md:pointer-events-none md:invisible"
                                    : "font-medium items-center box-border caret-transparent flex justify-between leading-9 list-disc outline-[3px] break-words pointer-events-auto visible w-[220px] md:hidden md:list-none md:pointer-events-none md:invisible"
                                }
                              >
                                <span
                                  className={
                                    index === 0
                                      ? "box-border caret-transparent list-disc outline-[3px] break-words pointer-events-auto visible md:list-none md:pointer-events-none md:invisible"
                                      : "box-border caret-transparent block list-disc outline-[3px] break-words pointer-events-auto visible md:inline md:list-none md:pointer-events-none md:invisible"
                                  }
                                >
                                  {tab.label}
                                </span>
                              </div>

                              <div
                                role="tabpanel"
                                className={
                                  index === 0
                                    ? "box-border caret-transparent list-disc outline-[3px] break-words pointer-events-auto visible md:list-none md:pointer-events-none md:invisible after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-slate-600 after:block after:text-sm after:not-italic after:normal-nums after:font-normal after:h-0 after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:outline-[3px] after:break-words after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:w-0 after:border-separate after:font-poppins after:md:list-none after:md:pointer-events-none after:md:invisible"
                                    : "box-border caret-transparent hidden list-disc outline-[3px] break-words pointer-events-auto visible md:list-none md:pointer-events-none md:invisible after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-slate-600 after:block after:text-sm after:not-italic after:normal-nums after:font-normal after:h-0 after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:outline-[3px] after:break-words after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:w-0 after:border-separate after:font-poppins after:md:list-none after:md:pointer-events-none after:md:invisible"
                                }
                              >
                                <div className="box-border caret-transparent list-disc outline-[3px] break-words pointer-events-auto visible md:list-none md:pointer-events-none md:invisible">
                                  <section className="relative box-border caret-transparent list-disc outline-[3px] break-words pointer-events-auto visible md:list-none md:pointer-events-none md:invisible">
                                    <div className="relative box-border caret-transparent flex flex-wrap list-disc max-w-[767px] outline-[3px] break-words pointer-events-auto visible mx-auto md:flex-nowrap md:list-none md:max-w-[1410px] md:pointer-events-none md:invisible">
                                      <div
                                        className={
                                          index === 0
                                            ? "relative box-border caret-transparent flex list-disc min-h-px min-w-0 outline-[3px] break-words pointer-events-auto visible w-full md:list-none md:min-w-[auto] md:pointer-events-none md:invisible"
                                            : "relative box-border caret-transparent flex list-disc min-h-px outline-[3px] break-words pointer-events-auto visible w-full md:list-none md:pointer-events-none md:invisible"
                                        }
                                      >
                                        <div
                                          className={
                                            index === 0
                                              ? "relative content-start box-border caret-transparent flex flex-wrap list-disc min-h-0 min-w-0 outline-[3px] break-words pointer-events-auto visible w-full md:list-none md:min-h-[auto] md:min-w-[auto] md:pointer-events-none md:invisible"
                                              : "relative content-start box-border caret-transparent flex flex-wrap list-disc outline-[3px] break-words pointer-events-auto visible w-full md:list-none md:pointer-events-none md:invisible"
                                          }
                                        >
                                          <div
                                            className={
                                              index === 0
                                                ? "relative box-border caret-transparent list-disc min-h-0 min-w-0 outline-[3px] break-words pointer-events-auto visible w-full md:list-none md:min-h-[auto] md:min-w-[auto] md:pointer-events-none md:invisible"
                                                : "relative box-border caret-transparent list-disc outline-[3px] break-words pointer-events-auto visible w-full md:list-none md:pointer-events-none md:invisible"
                                            }
                                          >
                                            <div className="box-border caret-transparent list-disc outline-[3px] break-words pointer-events-auto visible md:list-none md:pointer-events-none md:invisible">
                                              <div className="box-border caret-transparent list-disc outline-[3px] break-words pointer-events-auto visible md:list-none md:pointer-events-none md:invisible">
                                                <div className="box-border caret-transparent flex flex-wrap list-disc ml-[-15px] mr-[-15px] outline-[3px] break-words pointer-events-auto visible md:list-none md:pointer-events-none md:invisible">
                                                  {tab.items.map(
                                                    (item, itemIndex) => (
                                                      <div
                                                        key={itemIndex}
                                                        className={
                                                          item.itemWrapperClassName ||
                                                          (index === 0
                                                            ? "box-border caret-transparent basis-full shrink-0 list-disc max-w-full min-h-0 min-w-0 outline-[3px] break-words pointer-events-auto visible mb-[30px] px-[15px] md:basis-[33.3333%] md:list-none md:max-w-[33.3333%] md:min-h-[auto] md:min-w-[auto] md:pointer-events-none md:invisible md:mb-0"
                                                            : "box-border caret-transparent basis-full shrink-0 list-disc max-w-full outline-[3px] break-words pointer-events-auto visible px-[15px] md:basis-[33.3333%] md:list-none md:max-w-[33.3333%] md:pointer-events-none md:invisible")
                                                        }
                                                      >
                                                        <div className="box-border caret-transparent grid list-disc outline-[3px] break-words pointer-events-auto visible md:list-none md:pointer-events-none md:invisible">
                                                          <a
                                                            href={item.href}
                                                            title={item.title}
                                                            className={
                                                              item.linkClassName ||
                                                              (index === 0
                                                                ? "text-black box-border caret-transparent block list-disc min-h-0 min-w-0 outline-[3px] break-words pointer-events-auto visible md:list-none md:min-h-[auto] md:min-w-[auto] md:pointer-events-none md:invisible"
                                                                : "text-black box-border caret-transparent block list-disc outline-[3px] break-words pointer-events-auto visible md:list-none md:pointer-events-none md:invisible")
                                                            }
                                                          >
                                                            <div className="box-border caret-transparent list-disc outline-[3px] break-words pointer-events-auto visible mb-5 md:list-none md:pointer-events-none md:invisible">
                                                              <img
                                                                src={
                                                                  item.imageSrc
                                                                }
                                                                alt={
                                                                  item.imageAlt
                                                                }
                                                                className="box-border caret-transparent list-disc max-w-full object-cover outline-[3px] break-words pointer-events-auto align-baseline visible m-auto rounded-[30px] md:list-none md:pointer-events-none md:invisible"
                                                              />
                                                            </div>
                                                            <div className="relative box-border caret-transparent list-disc outline-[3px] break-words pointer-events-auto text-left visible md:list-none md:pointer-events-none md:invisible">
                                                              <div className="relative text-xl font-medium box-border caret-transparent inline-block list-disc outline-[3px] break-words pointer-events-auto visible md:list-none md:pointer-events-none md:invisible">
                                                                {item.title}
                                                                <div className="absolute text-slate-600 text-xs font-bold box-border caret-transparent leading-[14.4px] list-disc outline-[3px] break-words pointer-events-auto visible -right-5 top-0 md:list-none md:pointer-events-none md:invisible">
                                                                  {item.count}
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </a>
                                                        </div>
                                                      </div>
                                                    ),
                                                  )}
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </section>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </li>
    </ul>
  );
};
