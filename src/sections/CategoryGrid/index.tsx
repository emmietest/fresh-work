import { CategoryCard } from "@/sections/CategoryGrid/components/CategoryCard";

export const CategoryGrid = () => {
  return (
    <section className="relative box-border caret-transparent ml-[calc(50%_-_187.5px)] mr-[calc(50%_-_187.5px)] outline-[3px] break-words w-screen mt-[60px] mb-[30px] px-[15px] left-0 md:ml-[calc(50%_-_640px)] md:mr-[calc(50%_-_640px)] md:mt-[70px] md:mb-[90px] md:px-[30px]">
      <div className="relative box-border caret-transparent flex flex-wrap max-w-[1410px] outline-[3px] break-words mx-auto md:flex-nowrap">
        <div className="relative box-border caret-transparent flex min-h-px min-w-[auto] outline-[3px] break-words w-full">
          <div className="relative content-start box-border caret-transparent flex flex-wrap min-h-[auto] min-w-[auto] outline-[3px] break-words w-full">
            <div className="relative box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] break-words w-full">
              <div className="box-border caret-transparent outline-[3px] break-words">
                <div className="box-border caret-transparent outline-[3px] break-words">
                  <div className="box-border caret-transparent flex flex-wrap ml-[-15px] mr-[-15px] outline-[3px] break-words">
                    <CategoryCard
                      href="https://demo2.pavothemes.com/printec/product-category/business-cards/"
                      title="Business Cards"
                      imageSrc="https://c.animaapp.com/mofvyhmcWjEMZ6/assets/cate-1.png"
                      imageAlt="Business Cards"
                      label="Business cards"
                    />
                    <CategoryCard
                      href="https://demo2.pavothemes.com/printec/product-category/greeting-cards/"
                      title="Greeting Cards"
                      imageSrc="https://c.animaapp.com/mofvyhmcWjEMZ6/assets/cate-2.png"
                      imageAlt="Greeting Cards"
                      label="Marketing Materials"
                    />
                    <CategoryCard
                      href="https://demo2.pavothemes.com/printec/product-category/posters-ad-posters/"
                      title="Posters & Ad Posters"
                      imageSrc="https://c.animaapp.com/mofvyhmcWjEMZ6/assets/cate-3.png"
                      imageAlt="Posters & Ad Posters"
                      label="Signs & Posters"
                    />
                    <CategoryCard
                      href="https://demo2.pavothemes.com/printec/product-category/flyers/"
                      title="Flyers"
                      imageSrc="https://c.animaapp.com/mofvyhmcWjEMZ6/assets/cate4.png"
                      imageAlt="Flyers"
                      label="Clothing & Bags"
                    />
                    <CategoryCard
                      href="https://demo2.pavothemes.com/printec/product-category/presentation-folders/"
                      title="Presentation Folders"
                      imageSrc="https://c.animaapp.com/mofvyhmcWjEMZ6/assets/cate-5.png"
                      imageAlt="Presentation Folders"
                      label="Design Services"
                    />
                    <CategoryCard
                      href="https://demo2.pavothemes.com/printec/product-category/packaging/"
                      title="Packaging"
                      imageSrc="https://c.animaapp.com/mofvyhmcWjEMZ6/assets/cate-6.png"
                      imageAlt="Packaging"
                      label="Invitations & Stationery"
                    />
                    <CategoryCard
                      href="https://demo2.pavothemes.com/printec/product-category/stickers/"
                      title="Stickers"
                      imageSrc="https://c.animaapp.com/mofvyhmcWjEMZ6/assets/cate-7.png"
                      imageAlt="Stickers"
                      label="Labels & Stickers"
                    />
                    <CategoryCard
                      href="https://demo2.pavothemes.com/printec/product-category/calendars/"
                      title="Calendars"
                      imageSrc="https://c.animaapp.com/mofvyhmcWjEMZ6/assets/cate-8.png"
                      imageAlt="Calendars"
                      label="Photo Gifts & Calendars"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
