export type CategoryCardProps = {
  href: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  label: string;
};

export const CategoryCard = (props: CategoryCardProps) => {
  return (
    <div className="box-border caret-transparent basis-full shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] break-words mb-[30px] px-[15px] md:basis-3/12 md:max-w-[25%]">
      <div className="bg-white shadow-[rgba(0,0,0,0.05)_0px_1px_24px_0px] box-border caret-transparent grid h-[250px] outline-[3px] break-words p-[30px] rounded-[30px] md:h-[300px]">
        <a
          href={props.href}
          title={props.title}
          className="relative text-black box-border caret-transparent flex flex-col-reverse justify-between min-h-[auto] min-w-[auto] outline-[3px] break-words overflow-hidden"
        >
          <div className="relative box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] break-words overflow-hidden">
            <img
              src={props.imageSrc}
              alt={props.imageAlt}
              className="box-border caret-transparent max-w-full object-cover outline-[3px] break-words align-baseline m-auto"
            />
          </div>
          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] break-words text-left">
            <div className="relative text-base font-medium box-border caret-transparent inline-block tracking-[-0.16px] outline-[3px] break-words uppercase font-poppins">
              {props.label}
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
