import { TestimonialsConstants } from "../../constants";
import styles from "../../style";
import { TestimonialCard } from "./TestimonialCard";

export function Testimonials() {
  return (
    <section className="md:pt-16 py-6" id="testimonials">
      <h1 className={`${styles.heading2} sm:text-right text-center `}>
        More than 400,000 students <br />
        recommend us
      </h1>
      <div className="grid md:grid-cols-2 md:gap-5 gap-8 md:p-10">
        {TestimonialsConstants.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            name={testimonial.name}
            profile={testimonial.profile}
            comment={testimonial.comment}
          />
        ))}
      </div>
    </section>
  );
}
