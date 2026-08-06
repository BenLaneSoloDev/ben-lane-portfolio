import styles from "./projectCarousel.module.css";

interface CarouselProps {
  total: number
}

const imagesMap = import.meta.glob<{ default: string }>('/public/projectSS/*.webp', { eager: true });
const images: string[] = Object.values(imagesMap).map((file) => file.default);

export default function ProjectCarousel(props: CarouselProps) {

  const { total } = props;

  return (
    <div className={`${styles.carousel} bg-def-white border-2 border-def-orange`}>
      <div className={styles.group}>
        {Array.from({ length: total }).map((_, index) => (
          <div key={`ss${index + 1}-1`} className={`${styles.card}`}>
            <img src={images[index]} alt="Project Screenshot"></img>
          </div>
        ))}
      </div>
      <div aria-hidden className={`${styles.group}`}>
        {Array.from({ length: total }).map((_, index) => (
          <div key={`ss${index + 1}-2`} className={`${styles.card}`}>
            <img src={images[index]} alt="Project Screenshot"></img>
          </div>
        ))}
      </div>
    </div>
  );
}