import styles from "../style";

export function CTA() {
  return (
    <div className={`${styles.flexCenter} ${styles.marginY} w-full`}>
      <div
        className={`${styles.flexCenter} ${styles.padding} w-full max-w-[1060px] sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
      >
        <div className="flex flex-1 flex-col">
          <h2 className={styles.heading2}>Enroll the career now!</h2>
          <p className={`${styles.paragraph} mt-5`}>
            No prior knowledge is required
          </p>
        </div>
        <div>
          <button
            className={`${styles.flexCenter} bg-blue-gradient rounded-[10px] w-[170px] h-[64px] font-semibold`}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}