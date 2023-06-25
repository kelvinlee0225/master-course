import { AboutCareerConstants } from "../constants";
import { CardCollapse } from "./CardCollapse";

export function Career() {
  return (
    <div className="sm:py-0 py-4">
      <h1 className="font-poppins font-semibold text-[50px] text-white">
        About Career
      </h1>
      {AboutCareerConstants.map((about) => (
        <CardCollapse id={about.id} title={about.title} value={about.value} />
      ))}
    </div>
  );
}
