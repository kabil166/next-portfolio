import Image from "next/image";
import styles from './styles/Home.module.css'
import MyImage from './assets/images/noback.png'
import ReciepeImage from './assets/images/recipeapp.png'
import CalImage from './assets/images/calculatorapp.png'


export default function Home() {
  return (
    <div className={styles.home_container}>
      <div className={styles.main_container}>
        <div className={styles.container}>
          <h1 className={styles.title}>Hello, I&apos;m Kabil!</h1>
          <p className={styles.description}>
            I&apos;m a software developer with expertise in React, JavaScript, and Spring Boot.
          </p>
          <a href="/projects">Check out my projects</a>
        </div>
        <div className={styles.container}>
          <Image width={200} height={200} src={MyImage} alt="Image"/>
        </div>
      </div>
        <div className={styles.projects}>

          <div className={styles.image_description}>
            <div className={styles.name_description}>
            <b><h4>Reciepe Finder App</h4></b>
            <Image src={ReciepeImage} alt="alt" height={200} width={200} />
            </div>
            <p>Labore nisi consequat enim tempor.</p>
          </div>
          <div className={styles.image_description}>
            <div className={styles.name_description}>
            <b><h4>Reciepe Finder App</h4></b>
            <Image src={CalImage} alt="alt" height={200} width={200} />
            </div>
            <p>Labore nisi consequat enim tempor.</p>
          </div>
            {/* <Image src={CalImage} alt="alt" height={200} width={200} /> */}
        </div>
    </div>
   
  );
}
