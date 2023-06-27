import { footerLinks } from "../constants";
import styles from "../style";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <section className={`flex sm:flex-row flex-col justify-around px-8`}>
      <div className="self-center sm:mb-0 mb-8">
        <Logo />
      </div>

      {footerLinks.map((footerLink) => (
        <div
          className="flex flex-col mx-6 sm:mb-0 mb-8 sm:items-start items-center"
          key={footerLink.id}
        >
          <p className="text-white font-semibold mb-2 text-[20px]">
            {footerLink.title}
          </p>
          {footerLink.links.map((link) => (
            <div key={link.id} className="cursor-pointer my-2">
              <a
                className={`${styles.paragraph} pointer-events-none`}
                href={link.link}
              >
                {link.name}
              </a>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}
