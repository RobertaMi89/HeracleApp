import React from "react";
import styles from "./Card.module.scss";
import Link from "next/link";

interface CardProps {
  label: string;
  children?: React.ReactNode;
  image: string;
  roadmap: string;
  target?: "_blank" | "_self";
}
function Card({
  label,
  children,
  image,
  roadmap,
  target = "_self",
}: CardProps) {
  return (
    <Link target={target} className={styles.card_section} href={roadmap}>
      {/* <section className={styles.card_section}>
      </section> */}
      <img src={image} alt={label} />
      <div className={styles.title_container}>
        <h2>{label}</h2>
        {children}
      </div>
    </Link>
  );
}

export default Card;
