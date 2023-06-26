import { Card } from ".";
import { AboutCareerConstants } from "../constants";
import { CardCollapse } from "./CardCollapse";
import { BiTime } from "react-icons/bi";
import { AiOutlineCalendar, AiOutlineDownload } from "react-icons/ai";

export function About() {
  return (
    <section className="sm:py-0 py-4" id="about">
      <h1 className="font-poppins font-semibold text-[48px] text-white">
        About Career
      </h1>
      <div className="grid md:grid-cols-2 md:gap-[128px]">
        <div>
          {AboutCareerConstants.map((about) => (
            <CardCollapse
              key={about.id}
              title={about.title}
              value={about.value}
            />
          ))}
        </div>
        <div className="flex flex-col md:mt-0 mt-10">
          <Card
            icon={
              <AiOutlineCalendar className="text-secondary h-[32px] w-[32px]" />
            }
            label="Duration: 6 months"
          />
          <Card
            icon={<BiTime className="text-secondary h-[32px] w-[32px]" />}
            label="Time: 6 hours a week"
          />
          <Card
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
