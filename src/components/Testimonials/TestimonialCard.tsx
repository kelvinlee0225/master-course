import styles from "../../style";
import { BiSolidQuoteLeft } from "react-icons/bi";

type TestimonialCardProps = {
  comment: string;
  profile: string;
  name: string;
};

export function TestimonialCard({
  comment,
  profile,
  name,
}: TestimonialCardProps) {
  return (
    <div className="flex flex-col feedback-card rounded-[15px] p-5">
      <div className="flex">
        <BiSolidQuoteLeft className="md:w-[40%] w-[100%] md:h-[50%] h-[30%] flex-start text-secondary mr-4" />
        <p className={styles.paragraph}>{comment}</p>
      </div>
      <div className="flex flex-row pt-4 items-center">
        <img
          src={profile}
          className="rounded-[50%] h-[52px] w-[52px] object-cover object-center mr-4"
        />
        <p className="text-white font-poppins text-[20px]">{name}</p>
      </div>
    </div>
  );
}
