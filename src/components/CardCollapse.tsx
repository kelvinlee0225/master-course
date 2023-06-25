import { useRef, useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import styles from "../style";

type CardCollapseProps = {
  id: string;
  title: string;
  value: string | string[];
};

export function CardCollapse({ id, title, value }: CardCollapseProps) {
  const [toggle, setToggle] = useState(false);
  //   const contentRef = useRef();
  //   if (contentRef.current) console.log(contentRef.current.scrollHeight);

  return (
    <div>
      <div
        key={id}
        className="w-full flex flex-col cursor-pointer border-b-2 border-b-dimWhite py-4"
        onClick={() => {
          setToggle((prev) => !prev);
        }}
      >
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-poppins text-[26px]">{title}</h2>
          {toggle ? (
            <AiOutlineUp className="h-[24px] w-[24px] mx-2 text-white" />
          ) : (
            <AiOutlineDown className="h-[24px] w-[24px] mx-2 text-white" />
          )}
        </div>
      </div>
      <div
        className={`${
          toggle
            ? "h-0 overflow-hidden transition h ease-out duration-[0.9s]"
            : "h-auto"
        }`}
      >
        {Array.isArray(value) ? (
          value.map((val) => (
            <p
              className={`${styles.paragraph} py-2 card-dropdown sm:text-[22px]`}
            >
              {val}
            </p>
          ))
        ) : (
          <p
            className={`${styles.paragraph} py-4 card-dropdown sm:text-[22px]`}
          >
            {value}
          </p>
        )}
      </div>
    </div>
  );
}
