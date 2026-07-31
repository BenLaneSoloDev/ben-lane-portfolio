import styles from "./footer.module.css"
import buttonStyles from "@/utilities/css/button.module.css"

export default function Footer() {
  return (
    <footer className={`${styles.footer} p-3 bg-def-l-green flex flex-row items-center justify-center gap-2`}>
      <h2 className="font-semibold text-def-white drop-shadow-subtle uppercase">Find me elsewhere</h2>
      <span className="text-def-white drop-shadow-subtle">| </span>
      <a className={buttonStyles.button} href="https://www.linkedin.com/in/benjamin-lane-b66524330/" target="_blank">
        <img className="w-10 border-def-white border-2 rounded-xl drop-shadow-subtle" src="./src/assets/home/linkedin-logo.svg" alt="linkedin logo"></img>
      </a>  
      <a className={buttonStyles.button} href="https://github.com/BenLaneSoloDev" target="_blank">
        <img className="w-10 border-def-white border-2 rounded-xl drop-shadow-subtle" src="./src/assets/home/github-logo.svg" alt="github logo"></img>
      </a>
      <a className={buttonStyles.button} href="https://www.youtube.com/channel/UChL5Vii2c1F_NYnDZcpYctA" target="_blank">
        <img className="w-10 border-def-white border-2 rounded-xl drop-shadow-subtle" src="./src/assets/home/youtube-logo.svg" alt="youtube logo"></img>
      </a>
    </footer>
  );
}