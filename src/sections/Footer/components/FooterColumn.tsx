export type FooterColumnLink = {
  label: string;
  href: string;
};

export type FooterColumnProps = {
  title: string;
  outerVariant: string;
  innerWrapperVariant?: string;
  titleWrapperVariant: string;
  titleClassName?: string;
  contentVariant?: string;
  contactText?: string;
  contactPhone?: string;
  links?: FooterColumnLink[];
};

export const FooterColumn = (props: FooterColumnProps) => {
  return (
    <div
      className={`relative box-border caret-transparent flex min-h-px min-w-[auto] outline-[3px] break-words w-full ${props.outerVariant}`}
    >
      <div
        className={`relative content-start box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto] outline-[3px] break-words w-full ${props.innerWrapperVariant ?? ""}`}
      >
        <div className="relative box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] break-words text-center w-full md:text-start">
          <div
            className={`box-border caret-transparent outline-[3px] break-words text-center md:text-start ${props.titleWrapperVariant}`}
          >
            <h2
              className={`text-black text-lg font-medium box-border caret-transparent clear-both leading-[26px] outline-[3px] break-words text-center font-poppins md:text-start ${props.titleClassName ?? ""}`}
            >
              {props.title}
            </h2>
          </div>
        </div>

        <div
          className={`relative box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] break-words text-center w-full md:text-start ${props.contentVariant ?? ""}`}
        >
          <div className="box-border caret-transparent outline-[3px] break-words text-center md:text-start">
            {props.links && props.links.length > 0 ? (
              <ul className="box-border caret-transparent list-none outline-[3px] break-words text-center pl-0 md:text-start">
                {props.links.map((link, index) => (
                  <li
                    key={index}
                    className="relative items-center box-border caret-transparent flex justify-center outline-[3px] break-words text-center md:justify-normal md:text-start"
                  >
                    <a
                      href={link.href}
                      className="text-black font-medium items-center box-border caret-transparent flex justify-center leading-9 min-h-[auto] min-w-[auto] outline-[3px] break-words text-center w-full font-poppins md:justify-normal md:text-start"
                    >
                      <span className="text-slate-600 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] break-words text-center md:text-start">
                        {link.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <>
                {props.contactText}
                <br className="box-border caret-transparent outline-[3px] break-words text-center md:text-start" />
                <span className="text-lg font-semibold box-border caret-transparent outline-[3px] break-words text-center md:text-start">
                  {props.contactPhone}
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
