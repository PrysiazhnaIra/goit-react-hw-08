import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.home}>
      <h2>There is the best Contact Management App!</h2>
      <p>
        Manage your contacts effortlessly with our user-friendly features. Add,
        delete, and filter contacts with ease. Your data is safe with us, thanks
        to our robust authorization and security measures. Get started now and
        take control of your contact list!
      </p>
    </div>
  );
}
