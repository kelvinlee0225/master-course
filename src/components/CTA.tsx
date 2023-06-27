import styles from "../style";

// eslint-disable-next-line react-refresh/only-export-components
export function CTA() {
  return (
    <div className={`${styles.flexCenter} ${styles.marginY} w-full`}>
      <div
        className={`${styles.flexCenter} ${styles.padding} w-full max-w-[1060px] sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
      >
        <div className="flex flex-1 flex-col sm:text-left text-center ">
          <h2 className={styles.heading2}>Enroll in the career now!</h2>
          <p className={`${styles.paragraph} mt-5`}>
            No prior knowledge is required
          </p>
        </div>
        <div>
          <button
            className={`${styles.flexCenter} bg-blue-gradient rounded-[10px] w-[170px] h-[64px] font-semibold sm:mt-0 mt-8`}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
