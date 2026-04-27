import { SectionHeader } from "@/components/SectionHeader";

export const BlogSection = () => {
  return (
    <section className="relative box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] break-words w-full">
      <div className="relative box-border caret-transparent flex flex-wrap outline-[3px] break-words mx-auto md:flex-nowrap">
        <div className="relative box-border caret-transparent flex min-h-px min-w-[auto] outline-[3px] break-words w-full">
          <SectionHeader
            showEyebrow
            eyebrowText="Most Recent News"
            titleLine1="Read our"
            titleHighlight="latest blog posts"
          />
        </div>
      </div>
    </section>
  );
};
