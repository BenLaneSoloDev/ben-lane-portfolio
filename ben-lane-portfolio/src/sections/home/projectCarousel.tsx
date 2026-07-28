import { Card, CardContent } from "@/components/ui/card";
import styles from "./projectCarousel.module.css";

interface CarouselProps {
  total: number
}

// TODO: Link to project JSON's + Make Dynamic Through Props
const images = [
  "enfrosted",
  "fracture",
  "legacy-tracker",
  "pixel-dungeon",
  "zombie-survival"
]

export default function ProjectCarousel(props: CarouselProps) {

  const { total } = props;

  return (
    <div className={`${styles.carousel}`}>
      <div className={styles.group}>
        {Array.from({ length: total }).map((_, index) => (
          <div className={`${styles.card}`}>
            <img src={`./src/assets/home/projectSS/${images[index]}.webp`} alt="Project Screenshot"></img>
          </div>
        ))}
      </div>
      <div aria-hidden className={`${styles.group}`}>
        {Array.from({ length: total }).map((_, index) => (
          <div className={`${styles.card}`}>
            <img src={`./src/assets/home/projectSS/${images[index]}.webp`} alt="Project Screenshot"></img>
          </div>
        ))}
      </div>
    </div>
  );
}