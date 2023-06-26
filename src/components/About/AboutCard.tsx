type CardProps = {
  icon: JSX.Element;
  label: string;
  cursorPointer?: boolean;
};

export function AboutCard({ icon, label, cursorPointer }: CardProps) {
  return (
    <div
      className={`grid grid-cols-[min-content_1fr] py-6 mb-[30px] items-center bg-discount-gradient rounded-[20px] feature-card ${
        cursorPointer && "cursor-pointer"
      }`}
    >
      <div className="px-4 border-r-2">{icon}</div>
      <h3 className="font-poppins font-normal text-white text-[20px] px-4">
        {label}
      </h3>
    </div>
  );
}
