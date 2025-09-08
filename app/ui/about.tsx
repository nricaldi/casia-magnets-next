import styles from './about.module.css';

export default function About() {

  return (
    <section className={styles.about}>

      <div className={styles.aboutContainer}>

        <div className={styles.casiaPictureWrapper}>
          <div className={styles.casiaPicture}></div>
        </div>

        <div className={styles.aboutCopy}>

          <h2 className={styles.aboutH2}>About Casia</h2>

          <p className={styles.aboutP}>
            Welcome to CASIA Magnets! We’re Carlo and Asia, the proud founders of this small but mighty magnet company.
            Together, we’ve spent the last three years not only building our relationship but also combining our passions
            to bring you creative and customizable 2x2 magnets.
          </p>

          <p className={styles.aboutP}>
            As a couple and co-founders, we wanted our business to reflect both our bond and the fun we have creating together,
            which is why our company’s name is inspired by our combined couple name. We’re excited to share a piece of our story
            with you through every magnet we create.
          </p>

          <p className={styles.aboutP}>
            Thank you for supporting our small business—we can’t wait to bring your ideas to life!
          </p>

        </div>
      </div>

    </section>
  );
}
