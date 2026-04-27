export type DropdownMenuProps = {
  items: {
    href: string;
    label: string;
  }[];
};

export const DropdownMenu = (props: DropdownMenuProps) => {
  return (
    <ul className="static bg-white shadow-[rgba(0,0,0,0.08)_0px_0px_30px_0px] box-border caret-transparent list-disc opacity-100 outline-[3px] break-words pointer-events-auto text-start transform-none visible z-auto ml-[19.8205px] pl-0 py-[30px] left-auto top-auto md:absolute md:list-none md:opacity-0 md:pointer-events-none md:text-left md:translate-y-5 md:invisible md:z-[99999] md:ml-0 md:left-[11.2px] md:top-full">
      {props.items.map((item, index) => (
        <li
          key={index}
          className="static box-border caret-transparent list-item list-disc min-w-0 outline-[3px] break-words pointer-events-auto text-start visible md:relative md:block md:list-none md:min-w-[280px] md:pointer-events-none md:text-left md:invisible"
        >
          <a
            href={item.href}
            className="font-normal box-border caret-transparent inline leading-6 list-disc outline-[3px] break-words pointer-events-auto text-start visible w-full p-0 md:font-medium md:block md:leading-[22.4px] md:list-none md:pointer-events-none md:text-left md:invisible md:px-[35px] md:py-[7px]"
          >
            <span className="font-normal box-border caret-transparent leading-6 list-disc outline-[3px] break-words pointer-events-auto text-start visible md:font-medium md:leading-[22.4px] md:list-none md:pointer-events-none md:text-left md:invisible">
              {item.label}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
};
