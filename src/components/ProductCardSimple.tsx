export type ProductCardSimpleProps = {
  imageSrc: string;
  imageAlt: string;
  href: string;
  title: string;
  priceType: string;
  price: string;
  minPrice: string;
  maxPrice: string;
  originalPrice: string;
  salePrice: string;
  discountText: string;
  containerClassName: string;
};

export const ProductCardSimple = (props: ProductCardSimpleProps) => {
  return (
    <li className="box-border caret-transparent inline-block basis-auto shrink list-none max-w-none outline-[3px] break-words w-full px-[15px] md:basis-full md:shrink-0 md:max-w-full">
      <div
        className={`relative box-border caret-transparent outline-[3px] break-words text-center rounded-[30px] ${props.containerClassName}`}
      >
        <div className="relative bg-white box-border caret-transparent outline-[3px] break-words overflow-hidden mb-5 rounded-[30px]">
          <div className="box-border caret-transparent outline-[3px] break-words">
            <img
              src={props.imageSrc}
              alt={props.imageAlt}
              sizes="(max-width: 600px) 100vw, 600px"
              className="aspect-[auto_600_/_600] box-border caret-transparent max-w-full outline-[3px] break-words align-baseline w-full mx-auto"
            />
          </div>
          {props.discountText ? (
            <span className="absolute text-white text-xs font-semibold bg-red-500 box-border caret-transparent block tracking-[2px] leading-5 outline-[3px] break-words uppercase z-[3] px-[15px] py-1 rounded-bl rounded-br rounded-tl rounded-tr left-[25px] top-[25px]">
              {props.discountText}
            </span>
          ) : null}
          <a
            href={props.href}
            className="absolute text-black box-border caret-transparent block h-full outline-[3px] break-words w-full z-[2] left-0 top-0"
          ></a>
        </div>

        <div className="relative box-border caret-transparent outline-[3px] break-words">
          <h3 className="text-black text-base font-medium box-border caret-transparent clear-both flow-root tracking-[-1px] max-h-12 outline-[3px] break-words overflow-hidden mb-2.5">
            <a
              href={props.href}
              className="box-border caret-transparent outline-[3px] break-words"
            >
              {props.title}
            </a>
          </h3>

          <span className="text-black text-lg font-semibold box-border caret-transparent outline-[3px] break-words">
            <span className="box-border caret-transparent outline-[3px] break-words">
              {props.priceType === "sale" ? (
                <>
                  <del className="text-neutral-400 text-sm box-border caret-transparent leading-[22.4px] outline-[3px] break-words line-through w-full">
                    <span className="box-border caret-transparent outline-[3px] break-words">
                      <bdi className="box-border caret-transparent outline-[3px] break-words">
                        <span className="box-border caret-transparent outline-[3px] break-words">
                          $
                        </span>
                        {props.originalPrice}
                      </bdi>
                    </span>
                  </del>
                  <ins className="text-red-500 box-border caret-transparent -order-1 outline-[3px] break-words mr-1.5">
                    <span className="box-border caret-transparent outline-[3px] break-words">
                      <bdi className="box-border caret-transparent outline-[3px] break-words">
                        <span className="box-border caret-transparent outline-[3px] break-words">
                          $
                        </span>
                        {props.salePrice}
                      </bdi>
                    </span>
                  </ins>
                </>
              ) : props.priceType === "range" ? (
                <>
                  <span className="box-border caret-transparent outline-[3px] break-words">
                    <bdi className="box-border caret-transparent outline-[3px] break-words">
                      <span className="box-border caret-transparent outline-[3px] break-words">
                        $
                      </span>
                      {props.minPrice}
                    </bdi>
                  </span>
                  <span className="box-border caret-transparent outline-[3px] break-words">
                    –
                  </span>
                  <span className="box-border caret-transparent outline-[3px] break-words">
                    <bdi className="box-border caret-transparent outline-[3px] break-words">
                      <span className="box-border caret-transparent outline-[3px] break-words">
                        $
                      </span>
                      {props.maxPrice}
                    </bdi>
                  </span>
                </>
              ) : (
                <span className="box-border caret-transparent outline-[3px] break-words">
                  <bdi className="box-border caret-transparent outline-[3px] break-words">
                    <span className="box-border caret-transparent outline-[3px] break-words">
                      $
                    </span>
                    {props.price}
                  </bdi>
                </span>
              )}
            </span>
          </span>
        </div>
      </div>
    </li>
  );
};
