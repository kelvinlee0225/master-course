import styles from "../style";
import logo from "../assets/logo.svg";

export function Logo() {
  return (
    <div className="flex flex-row items-center">
      <img
        src={logo}
        alt="logo"
        className="sm:h-[50px] h-[35px] sm:w-[50px] w-[35px] mr-2"
      />
      <div className={`${styles.logo} cursor-pointer`}>COURSEMASTER</div>
    </div>
  );
}
