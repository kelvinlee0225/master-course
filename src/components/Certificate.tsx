import styles from "../style";
import CertificateAsset from "../assets/certificate.svg";

export function Certificate() {
  return (
    <div className={`flex md:flex-row flex-col justify-around sm:py-10 py-6`}>
      <div className="flex justify-center w-full">
        <img
          src={CertificateAsset}
          alt="Data Analytics Image"
          className="md:w-[90%] w-[70%] md:h-[90%] h-[70%]"
        />
      </div>

      <div
        className={`${styles.flexStart} flex-col font-poppins ${styles.paddingX}`}
      >
        <div className="flex flex-col items-center w-full justify-center">
          <h1 className="text-white font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]">
            Earn your
            <br className="sm:block hidden" />
            <span className="text-gradient"> Certificate</span>
          </h1>

          <p className={`${styles.paragraph} mt-4 sm:text-[22px]`}>
            Enhance your LinkedIn profile, resume, or CV by including this
            credential. Additionally, share it across social media channels and
            highlight it in your performance review.
          </p>
        </div>
      </div>
    </div>
  );
}
