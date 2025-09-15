import styles from './about.module.css';
import Reveal from './reveal';

export default function About() {

  const startDate = new Date(2022, 8, 13);
  const now = new Date();
  const yearsTogether = now.getFullYear() - startDate.getFullYear();

  return (
    <section className={styles.about}>

      <div className={styles.aboutContainer}>

        <Reveal delay={0.02}>
          <div className={styles.casiaPictureWrapper}>
            <div className={styles.casiaPicture}></div>
          </div>
        </Reveal>

        <div className={styles.aboutCopy}>
          <Reveal delay={0.04}><h2 className={styles.aboutH2}>About Casia Magnets</h2></Reveal>

          <div className={styles.aboutText}>
            <Reveal delay={0.08}>
              <p className={styles.aboutP}>
                Welcome to CASIA Magnets! We are Carlo and Asia, the proud founders of this small but mighty magnet company.
                Together, we’ve spent the last { yearsTogether } years not only building our relationship but also combining our passions
                to bring you creative and customizable 2x2 magnets.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <p className={styles.aboutP}>
                Our mission is simple: to give you a unique way to showcase what you love. Whether it’s a design of your choice
                or one of our curated pop culture themes—from Marvel comics to NFL football—our magnets add a personal touch to your space.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <p className={styles.aboutP}>
                As a couple and co-founders, we wanted our business to reflect both our bond and the fun we have creating together,
                which is why our company’s name is inspired by our combined couple name. We’re excited to share a piece of our story
                with you through every magnet we create.
              </p>
            </Reveal>

            <Reveal delay={0.20}>
              <p className={styles.aboutP}>
                Thank you for supporting our small business—we can’t wait to bring your ideas to life!
              </p>
            </Reveal>
          </div>

        </div>
      </div>

    </section>
  );
}
