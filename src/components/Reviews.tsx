import Image from "next/image";

import quotes from "@/assets/images/quotes.png";
import styles from "@/assets/css/components/Reviews.module.css";

interface Review {
  id: number;
  name: string;
  description: string;
}

export default function Reviews() {
  const Reviews: Review[] = [
    {
      id: 1,
      name: "Emily Harrison",
      description:
        "The TENS unit I purchased from Reshape Equipments has been a game-changer! It’s easy to use and has significantly reduced my chronic pain. Highly recommend!",
    },
    {
      id: 2,
      name: "John Davis",
      description:
        "The knee brace I ordered fits perfectly and provides excellent support. I feel more confident and pain-free when walking. Great service!",
    },
    {
      id: 3,
      name: "Linda Simmons",
      description:
        "I’ve been using the lymphedema pump massager for a few weeks now, and the results are amazing. My legs feel less swollen, and I feel much more comfortable.",
    },
    {
      id: 4,
      name: "Robert Allen",
      description:
        "The wheelchair I got from Reshape Equipments is incredibly durable and comfortable. It’s made a huge difference in my mobility, and I’m so grateful for the excellent service.",
    },
    {
      id: 5,
      name: "Susan Walker",
      description:
        "The caregiver service from Reshape Equipments has been exceptional. The staff are compassionate, reliable, and truly care about my mother’s well-being. I couldn’t be happier!",
    },
  ];

  return (
    <section className={styles.reviews}>
      <h2>Latest Reviews</h2>
      <div className={styles.stage}>
        {Reviews.map((e) => (
          <div className={styles.item} key={e.id}>
            <Image src={quotes} alt="quote-icon" className={styles.icon} />
            <span className={styles.avatar}>{e.name.charAt(0)}</span>
            <h3>{e.name}</h3>
            <p>{e.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
