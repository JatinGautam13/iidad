import styles from "./homeSection4.module.css";

const cardData = [
  {
    video: "/video1.mp4",
    label: "Stratégie de contenu & Copywriting",
    source: "from Secoya",
  },
  {
    video: "/video2.mp4",
    label: "Ergonomie (UX)",
    source: "from Weem",
  },
  {
    video: "/video1.mp4",
    label: "Stratégie de contenu & Copywriting",
    source: "from Secoya",
  },
  {
    video: "/video2.mp4",
    label: "Ergonomie (UX)",
    source: "from Weem",
  },
];

export default function HomeSection4() {
  return (
    <section className={styles.section4}>
      <h2 className={styles.heading}>
        Une équipe complète<br />
        pour une marque digitale clé en main
      </h2>
      <div className={styles.cardsGrid}>
        {cardData.map((card, idx) => (
          <div key={card.label + idx} className={styles.cardItem}>
            <div className={styles.cardImgBox}>
              <video
                src={card.video}
                className={styles.cardImg}
                loop
                muted
                autoPlay
                playsInline
              />
            </div>
            <div className={styles.cardLabelSourceRow}>
              <span className={styles.cardLabel}>{card.label}</span>
              <span className={styles.cardSource}>{card.source}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
