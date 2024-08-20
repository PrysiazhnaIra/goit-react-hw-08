import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.greetingContainer}>
      <div className={css.animatedGreetingContainer}>
        <div className={css.animatedGreeting}>
          <span className={css.animatedHighlight}>
            Effortlessly Manage Your Contacts
          </span>
          <p>
            Add, delete, and filter contacts in seconds. Secure your data with
            our top-notch authorization measures.
          </p>
          <button className={css.btn}>Get Started Now</button>
        </div>
      </div>
    </div>
  );
}
