import DataAsset from "../assets/data.svg";
import styles from "../style";
import GetStarted from "./GetStarted";

export function Hero() {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col font-poppins ${styles.paddingX}`}
      >
        <div className="text-white text-2xl bg-discount-gradient rounded-[10px] py-[6px] px-4">
          $13.99
          <br />
          <span className="text-[#d1d7dc] text-sm line-through">
            $74.99
          </span>{" "}
          <span className="text-white text-sm">81% off</span>
          <br />
          <span className="text-secondary text-sm">
            5 hours left at this price!
          </span>
        </div>

        <div className="flex flex-row items-center w-full justify-between">
          <h1 className="text-white font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]">
            Data Analytics <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Certificate</span>
          </h1>

          <div className="ss:flex hidden mr-0">
            <GetStarted />
          </div>
        </div>

        <p className={`${styles.paragraph} max-w-[470px] mt-4`}>
          This program offers you the opportunity to embark on a data analytics
          career. Within a span of less than 6 months, you will acquire
          sought-after skills that will prepare you for employment, without the
          need for a degree or prior experience.
        </p>
      </div>

      <div className={`flex flex-1 ${styles.flexCenter} md:my-0 my-10`}>
        <img
          src={DataAsset}
          alt="Data Analytics Image"
          className="w-[100%] h-[100%] relative z-[5]"
        />
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
}
