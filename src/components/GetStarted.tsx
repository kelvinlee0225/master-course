import styles from "../style";
import { GoArrowUpRight } from "react-icons/go";

function GetStarted() {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
      >
        <div className={`${styles.flexStart} flex-col`}>
          <div className={`${styles.flexStart} flex-row`}>
            <p className="font-poppins font-medium text-[18px] leading-[23px] mr-1">
              <span className="text-gradient">Get</span>
            </p>
            <GoArrowUpRight className="text-white w-[20px] h-[20px] self-center object-contain" />
          </div>

          <p className="font-poppins font-medium text-[18px] leading-[23px]">
            <span className="text-gradient">Started</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
