import styles from "../style";
import { StatsConstants } from "../constants";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

export function Stats() {
  return (
    <div
      className={`xl:py-3 ${styles.paddingY} flex justify-around flex-row flex-wrap w-full `}
    >
      {StatsConstants.map((stat, index) => {
        return (
          <div className={`${styles.flexCenter}`} key={stat.id}>
            <h1
              className={`text-white font-semibold font-poppins  ${
                index === StatsConstants.length - 1 ? "ml-4" : "mr-4"
              } ss:text-[40px] text-[30px] flex flex-row items-center`}
            >
              {stat.value}
              {stat.id === "stats-2" && (
                <div className="flex flex-row ml-2">
                  {Array(+stat.value[0])
                    .fill(1)
                    .map((_value, index) => (
                      <BsStarFill key={`star-${index}`} />
                    ))}
                  <BsStarHalf />
                </div>
              )}
              <span className="font-normal text-gradient ss:text-[30px] text-[22px] ml-4 md:my-0 my-4">
                {" "}
                {stat.title.toUpperCase()}
              </span>
            </h1>
          </div>
        );
      })}
    </div>
  );
}
