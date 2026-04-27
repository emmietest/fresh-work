export const SearchBar = () => {
  return (
    <div className="relative self-end box-border caret-transparent hidden max-w-[280px] min-h-0 min-w-0 outline-[3px] break-words w-[280px] z-[99] md:self-auto md:block md:min-h-[auto] md:min-w-[auto]">
      <div className="box-border caret-transparent outline-[3px] break-words mr-[15px] md:mr-5">
        <div className="box-border caret-transparent clear-both hidden outline-[3px] break-words md:block">
          <div className="relative box-border caret-transparent outline-[3px] break-words">
            <div className="absolute bg-white shadow-[rgba(0,0,0,0.1)_0px_5px_30px_0px] box-border caret-transparent hidden max-h-[500px] outline-[3px] break-words overflow-x-auto overflow-y-scroll w-full z-[999] px-5 left-0 top-full"></div>
            <form
              role="search"
              className="relative box-border caret-transparent outline-[3px] break-words z-[999]"
            >
              <input
                type="search"
                placeholder="Search products…"
                value=""
                name="s"
                className="appearance-none text-black text-[13px] shadow-[rgba(0,0,0,0.09)_0px_0px_7px_0px] box-border caret-transparent basis-[0%] grow leading-5 break-words w-full px-5 py-3 rounded-[30px]"
              />
              <button
                type="submit"
                value="Search"
                className="absolute appearance-none text-white text-[0px] font-semibold items-center bg-transparent caret-transparent flex h-full justify-center leading-[0px] outline-[3px] break-words text-center w-[50px] z-[3] p-0 rounded-[30px] right-0 top-0"
              >
                <i className="text-black text-xl font-normal box-border caret-transparent block leading-5 min-h-0 min-w-0 outline-[3px] break-words align-middle font-printec_icon md:min-h-[auto] md:min-w-[auto] before:accent-auto before:box-border before:caret-transparent before:text-black before:text-xl before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:outline-[3px] before:break-words before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-printec_icon"></i>
                Search{" "}
              </button>
              <input
                type="hidden"
                name="post_type"
                value="product"
                className="appearance-none bg-transparent box-border caret-transparent hidden outline-[3px] break-words p-0"
              />
              <div className="absolute box-border caret-transparent hidden outline-[3px] break-words left-0 top-2/4">
                <div className="relative box-border caret-transparent h-12 leading-[48px] outline-[3px] break-words w-[155px] after:accent-auto after:bg-gray-200 after:box-border after:caret-transparent after:text-slate-600 after:block after:text-sm after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[48px] after:list-outside after:list-disc after:outline-[3px] after:break-words after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:w-px after:border-separate after:right-0 after:inset-y-0 after:font-poppins">
                  <a
                    href="#"
                    className="relative text-[13px] box-border caret-transparent block outline-[3px] break-words px-6 after:accent-auto after:box-border after:caret-transparent after:text-stone-500 after:block after:text-[13px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[13px] after:list-outside after:list-disc after:outline-[3px] after:break-words after:pointer-events-auto after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:align-middle after:visible after:border-separate after:right-5 after:top-2/4 after:font-printec_icon"
                  >
                    <span className="box-border caret-transparent block outline-[3px] break-words text-ellipsis text-nowrap w-[135px] overflow-hidden">
                      All category
                    </span>
                  </a>
                  <select
                    name="product_cat"
                    className="appearance-none text-[13px] bg-transparent bg-[url(data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2016%2016%27%3e%3cpath%20fill=%27none%27%20stroke=%27%23343a40%27%20stroke-linecap=%27round%27%20stroke-linejoin=%27round%27%20stroke-width=%272%27%20d=%27M2%205l6%206%206-6%27/%3e%3c/svg%3e)] bg-no-repeat bg-size-[16px_12px] caret-transparent hidden h-11 leading-[44px] max-w-full outline-[3px] break-words w-full bg-[position:calc(100%_-_10px)_50%] mb-[21.034px] px-[15px] rounded-[30px]"
                  >
                    <option
                      value=""
                      className="items-center box-border caret-transparent gap-x-[6.5px] min-h-6 min-w-6 outline-[3px] break-words gap-y-[6.5px]"
                    >
                      All category
                    </option>
                    <option
                      value="brochures-catalogues"
                      className="items-center box-border caret-transparent gap-x-[6.5px] min-h-6 min-w-6 outline-[3px] break-words gap-y-[6.5px]"
                    >
                      Brochures &amp; Catalogues
                    </option>
                    <option
                      value="business-cards"
                      className="items-center box-border caret-transparent gap-x-[6.5px] min-h-6 min-w-6 outline-[3px] break-words gap-y-[6.5px]"
                    >
                      Business Cards
                    </option>
                    <option
                      value="calendars"
                      className="items-center box-border caret-transparent gap-x-[6.5px] min-h-6 min-w-6 outline-[3px] break-words gap-y-[6.5px]"
                    >
                      Calendars
                    </option>
                    <option
                      value="design-online"
                      className="items-center box-border caret-transparent gap-x-[6.5px] min-h-6 min-w-6 outline-[3px] break-words gap-y-[6.5px]"
                    >
                      Design Online
                    </option>
                    <option
                      value="flyers"
                      className="items-center box-border caret-transparent gap-x-[6.5px] min-h-6 min-w-6 outline-[3px] break-words gap-y-[6.5px]"
                    >
                      Flyers
                    </option>
                    <option
                      value="folded-leaflets"
                      className="items-center box-border caret-transparent gap-x-[6.5px] min-h-6 min-w-6 outline-[3px] break-words gap-y-[6.5px]"
                    >
                      Folded Leaflets
                    </option>
                    <option
                      value="greeting-cards"
                      className="items-center box-border caret-transparent gap-x-[6.5px] min-h-6 min-w-6 outline-[3px] break-words gap-y-[6.5px]"
                    >
                      Greeting Cards
                    </option>
                    <option
                      value="letterheads"
                      className="items-center box-border caret-transparent gap-x-[6.5px] min-h-6 min-w-6 outline-[3px] break-words gap-y-[6.5px]"
                    >
                      Letterheads
                    </option>
                    <option
                      value="notepads"
                      className="items-center box-border caret-transparent gap-x-[6.5px] min-h-6 min-w-6 outline-[3px] break-words gap-y-[6.5px]"
                    >
                      Notepads
                    </option>
                    <option
                      value="packaging"
                      className="items-center box-border caret-transparent gap-x-[6.5px] min-h-6 min-w-6 outline-[3px] break-words gap-y-[6.5px]"
                    >
                      Packaging
                    </option>
                    <option
                      value="placemats"
                      className="items-center box-border caret-transparent gap-x-[6.5px] min-h-6 min-w-6 outline-[3px] break-words gap-y-[6.5px]"
                    >
                      Placemats
                    </option>
                    <option
                      value="postcards"
                      className="items-center box-border caret-transparent gap-x-[6.5px] min-h-6 min-w-6 outline-[3px] break-words gap-y-[6.5px]"
                    >
                      Postcards
                    </option>
                    <option
                      value="posters-ad-posters"
                      className="items-center box-border caret-transparent gap-x-[6.5px] min-h-6 min-w-6 outline-[3px] break-words gap-y-[6.5px]"
                    >
                      Posters &amp; Ad Posters
                    </option>
                    <option
                      value="presentation-folders"
                      className="items-center box-border caret-transparent gap-x-[6.5px] min-h-6 min-w-6 outline-[3px] break-words gap-y-[6.5px]"
                    >
                      Presentation Folders
                    </option>
                    <option
                      value="roller-banners"
                      className="items-center box-border caret-transparent gap-x-[6.5px] min-h-6 min-w-6 outline-[3px] break-words gap-y-[6.5px]"
                    >
                      Roller Banners
                    </option>
                    <option
                      value="stickers"
                      className="items-center box-border caret-transparent gap-x-[6.5px] min-h-6 min-w-6 outline-[3px] break-words gap-y-[6.5px]"
                    >
                      Stickers
                    </option>
                    <option
                      value="uncategorized"
                      className="items-center box-border caret-transparent gap-x-[6.5px] min-h-6 min-w-6 outline-[3px] break-words gap-y-[6.5px]"
                    >
                      Uncategorized
                    </option>
                  </select>
                  <div className="absolute bg-white shadow-[rgba(0,0,0,0.15)_0px_0px_3px_0px] box-border caret-transparent hidden outline-[3px] break-words text-left z-[300] mt-px py-2.5 left-px top-full">
                    <ul className="box-border caret-transparent list-none outline-[3px] break-words pl-0">
                      <li className="box-border caret-transparent hidden outline-[3px] break-words">
                        <a
                          href="#"
                          className="text-black box-border caret-transparent block leading-5 outline-[3px] break-words text-nowrap px-[25px] py-[5px]"
                        >
                          All category
                        </a>
                      </li>
                      <li className="box-border caret-transparent outline-[3px] break-words">
                        <a
                          href="https://demo2.pavothemes.com/printec/product-category/brochures-catalogues/"
                          className="text-black box-border caret-transparent block leading-5 outline-[3px] break-words text-nowrap px-[25px] py-[5px]"
                        >
                          Brochures &amp; Catalogues
                        </a>
                      </li>
                      <li className="box-border caret-transparent outline-[3px] break-words">
                        <a
                          href="https://demo2.pavothemes.com/printec/product-category/business-cards/"
                          className="text-black box-border caret-transparent block leading-5 outline-[3px] break-words text-nowrap px-[25px] py-[5px]"
                        >
                          Business Cards
                        </a>
                      </li>
                      <li className="box-border caret-transparent outline-[3px] break-words">
                        <a
                          href="https://demo2.pavothemes.com/printec/product-category/calendars/"
                          className="text-black box-border caret-transparent block leading-5 outline-[3px] break-words text-nowrap px-[25px] py-[5px]"
                        >
                          Calendars
                        </a>
                      </li>
                      <li className="box-border caret-transparent outline-[3px] break-words">
                        <a
                          href="https://demo2.pavothemes.com/printec/product-category/design-online/"
                          className="text-black box-border caret-transparent block leading-5 outline-[3px] break-words text-nowrap px-[25px] py-[5px]"
                        >
                          Design Online
                        </a>
                      </li>
                      <li className="box-border caret-transparent outline-[3px] break-words">
                        <a
                          href="https://demo2.pavothemes.com/printec/product-category/flyers/"
                          className="text-black box-border caret-transparent block leading-5 outline-[3px] break-words text-nowrap px-[25px] py-[5px]"
                        >
                          Flyers
                        </a>
                      </li>
                      <li className="box-border caret-transparent outline-[3px] break-words">
                        <a
                          href="https://demo2.pavothemes.com/printec/product-category/folded-leaflets/"
                          className="text-black box-border caret-transparent block leading-5 outline-[3px] break-words text-nowrap px-[25px] py-[5px]"
                        >
                          Folded Leaflets
                        </a>
                      </li>
                      <li className="box-border caret-transparent outline-[3px] break-words">
                        <a
                          href="https://demo2.pavothemes.com/printec/product-category/greeting-cards/"
                          className="text-black box-border caret-transparent block leading-5 outline-[3px] break-words text-nowrap px-[25px] py-[5px]"
                        >
                          Greeting Cards
                        </a>
                      </li>
                      <li className="box-border caret-transparent outline-[3px] break-words">
                        <a
                          href="https://demo2.pavothemes.com/printec/product-category/letterheads/"
                          className="text-black box-border caret-transparent block leading-5 outline-[3px] break-words text-nowrap px-[25px] py-[5px]"
                        >
                          Letterheads
                        </a>
                      </li>
                      <li className="box-border caret-transparent outline-[3px] break-words">
                        <a
                          href="https://demo2.pavothemes.com/printec/product-category/notepads/"
                          className="text-black box-border caret-transparent block leading-5 outline-[3px] break-words text-nowrap px-[25px] py-[5px]"
                        >
                          Notepads
                        </a>
                      </li>
                      <li className="box-border caret-transparent outline-[3px] break-words">
                        <a
                          href="https://demo2.pavothemes.com/printec/product-category/packaging/"
                          className="text-black box-border caret-transparent block leading-5 outline-[3px] break-words text-nowrap px-[25px] py-[5px]"
                        >
                          Packaging
                        </a>
                      </li>
                      <li className="box-border caret-transparent outline-[3px] break-words">
                        <a
                          href="https://demo2.pavothemes.com/printec/product-category/placemats/"
                          className="text-black box-border caret-transparent block leading-5 outline-[3px] break-words text-nowrap px-[25px] py-[5px]"
                        >
                          Placemats
                        </a>
                      </li>
                      <li className="box-border caret-transparent outline-[3px] break-words">
                        <a
                          href="https://demo2.pavothemes.com/printec/product-category/postcards/"
                          className="text-black box-border caret-transparent block leading-5 outline-[3px] break-words text-nowrap px-[25px] py-[5px]"
                        >
                          Postcards
                        </a>
                      </li>
                      <li className="box-border caret-transparent outline-[3px] break-words">
                        <a
                          href="https://demo2.pavothemes.com/printec/product-category/posters-ad-posters/"
                          className="text-black box-border caret-transparent block leading-5 outline-[3px] break-words text-nowrap px-[25px] py-[5px]"
                        >
                          Posters &amp; Ad Posters
                        </a>
                      </li>
                      <li className="box-border caret-transparent outline-[3px] break-words">
                        <a
                          href="https://demo2.pavothemes.com/printec/product-category/presentation-folders/"
                          className="text-black box-border caret-transparent block leading-5 outline-[3px] break-words text-nowrap px-[25px] py-[5px]"
                        >
                          Presentation Folders
                        </a>
                      </li>
                      <li className="box-border caret-transparent outline-[3px] break-words">
                        <a
                          href="https://demo2.pavothemes.com/printec/product-category/roller-banners/"
                          className="text-black box-border caret-transparent block leading-5 outline-[3px] break-words text-nowrap px-[25px] py-[5px]"
                        >
                          Roller Banners
                        </a>
                      </li>
                      <li className="box-border caret-transparent outline-[3px] break-words">
                        <a
                          href="https://demo2.pavothemes.com/printec/product-category/stickers/"
                          className="text-black box-border caret-transparent block leading-5 outline-[3px] break-words text-nowrap px-[25px] py-[5px]"
                        >
                          Stickers
                        </a>
                      </li>
                      <li className="box-border caret-transparent outline-[3px] break-words">
                        <a
                          href="https://demo2.pavothemes.com/printec/product-category/uncategorized/"
                          className="text-black box-border caret-transparent block leading-5 outline-[3px] break-words text-nowrap px-[25px] py-[5px]"
                        >
                          Uncategorized
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <input
                type="hidden"
                name="security-search"
                value="58756f43c4"
                className="appearance-none bg-transparent box-border caret-transparent hidden outline-[3px] break-words p-0"
              />
              <input
                type="hidden"
                name="_wp_http_referer"
                value="/printec/home-7/"
                className="appearance-none bg-transparent box-border caret-transparent hidden outline-[3px] break-words p-0"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
