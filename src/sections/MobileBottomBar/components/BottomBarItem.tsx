export type BottomBarItemProps = {
  href: string;
  label: string;
  ariaLabel: string;
  iconClassName: string;
  outerClassName: string;
  innerClassName: string;
  linkClassName: string;
  isSearchVariant: string;
};

export const BottomBarItem = (props: BottomBarItemProps) => {
  const isSearch = props.isSearchVariant === "true";

  if (isSearch) {
    return (
      <div className={props.outerClassName}>
        <div className={props.innerClassName}>
          <div className="box-border caret-transparent outline-[3px] break-words">
            <div className="box-border caret-transparent outline-[3px] break-words">
              <a href={props.href} className={props.linkClassName}>
                <i className={props.iconClassName}></i>
                <span className="font-semibold box-border caret-transparent block outline-[3px] break-words text-nowrap">
                  {props.label}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative box-border caret-transparent flex min-w-[auto] outline-[3px] break-words md:min-w-0 min-h-px w-3/12">
      <div className={props.outerClassName}>
        <div className="box-border caret-transparent outline-[3px] break-words relative min-h-[auto] min-w-[auto] w-full md:min-h-0 md:min-w-0">
          <div className="box-border caret-transparent outline-[3px] break-words">
            <div className="box-border caret-transparent gap-x-0.5 flex flex-col outline-[3px] break-words gap-y-0.5 text-center">
              <div className="box-border caret-transparent shrink-0 leading-[0px] min-h-[auto] min-w-[auto] outline-[3px] break-words md:min-h-0 md:min-w-0">
                <a
                  href={props.href}
                  aria-label={props.ariaLabel}
                  className={props.linkClassName}
                >
                  <i className={props.iconClassName}></i>
                </a>
              </div>
              <div className="box-border caret-transparent grow min-h-[auto] min-w-[auto] outline-[3px] break-words w-full md:min-h-0 md:min-w-0">
                <h3 className="text-black font-semibold box-border caret-transparent clear-both tracking-[-1px] leading-[14px] outline-[3px] break-words font-poppins">
                  <a
                    href={props.href}
                    className="box-border caret-transparent outline-[3px] break-words"
                  >
                    {props.label}
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
