import Image from "next/image";
import styles from './styles/Home.module.css'
import MyImage from './assets/images/noback.png'
import ReciepeImage from './assets/images/recipeapp.png'
import CalImage from './assets/images/calculatorapp.png'
import Link from "next/link";
import Education from './components/Education'


export default function Home() {
  return (
    <div className={styles.home_container}>
      <div className={styles.main_container}>
        <div>
        <div className={styles.container}>
          <h1 className={styles.title}>Hello, I&apos;m Kabil!</h1>
          <p className={styles.description}>
            I&apos;m a software developer with expertise in React, JavaScript, and Spring Boot.
          </p>
        </div>
        <div className={styles.container}>
          <label>Currently Working as</label>
          <h1 className={styles.title}>Software Engineer</h1>
          <p className={styles.description}>
          Sakhatech Information Systems Pvt. Ltd.
          </p>
        </div>
        </div>
        
        <div className={styles.container}>
          <Image width={200} height={200} src={MyImage} alt="Image"/>
        </div>
      </div>
      <Education/>
        <div className={styles.projects}>
          <Link href={'https://my-recipe-68922.web.app'}>
          <div className={styles.image_description}>
            <div className={styles.name_description}>
            <b><h4>Reciepe Finder App</h4></b>
            <Image src={ReciepeImage} alt="alt" height={200} width={200} />
            </div>
            <p>Labore nisi consequat enim tempor.</p>
          </div>
          </Link>
          
          <Link href={'https://kabil166.github.io/tip-calculator/'}>

          <div className={styles.image_description}>
            <div className={styles.name_description}>
            <b><h4>Tip Calculator</h4></b>
            <Image src={CalImage} alt="alt" height={200} width={200} />
            </div>
            <p>Labore nisi consequat enim tempor.</p>
          </div>
          </Link>
            {/* <Image src={CalImage} alt="alt" height={200} width={200} /> */}
        </div>
        <footer style={{ backgroundColor: '#f5f5f5', padding: '20px', textAlign: 'center' }}>
  <p>© 2024 Kabil Hussain. All rights reserved.</p>
  <p>
    Built with <strong>Next.js</strong>, deployed on <strong>AWS EC2</strong>, and powered by <strong>AWS SES</strong> for email services.
  </p>
  <p>
    <a href="https://www.linkedin.com/in/kabil-hussain-6a2724151/" target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a> |
    <a href="mailto:kabilh89@gmail.com"> Email Me</a>
  </p>
</footer>
    </div>
   
  );
}
