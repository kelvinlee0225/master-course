import { AboutCard } from "./AboutCard";
import { AboutCareerConstants } from "../../constants";
import { AboutCardCollapse } from "./AboutCardCollapse";
import { BiTime } from "react-icons/bi";
import { AiOutlineCalendar, AiOutlineDownload } from "react-icons/ai";

export function About() {
  return (
    <section className="py-6" id="about">
      <h1 className="font-poppins font-semibold text-[48px] text-white">
        About Career
      </h1>
      <div className="grid md:grid-cols-2 md:gap-[128px]">
        <div>
          {AboutCareerConstants.map((about) => (
            <AboutCardCollapse
              key={about.id}
              title={about.title}
              value={about.value}
            />
          ))}
        </div>
        <div className="flex flex-col md:mt-0 mt-10">
          <AboutCard
            icon={
              <AiOutlineCalendar className="text-secondary h-[32px] w-[32px]" />
            }
            label="Duration: 6 months"
          />
          <AboutCard
            icon={<BiTime className="text-secondary h-[32px] w-[32px]" />}
            label="Time: 6 hours a week"
          />
          <AboutCard
            icon={
              <AiOutlineDownload className="text-secondary h-[32px] w-[32px]" />
            }
            label="Donwload syllabus"
            cursorPointer
          />
        </div>
      </div>
    </section>
  );
}
