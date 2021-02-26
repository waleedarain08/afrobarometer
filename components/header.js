import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";
const Header = () => {
  return (
    <>
      <div className={styles.headerTop}>
        <div className={styles.logo}>
          <a>
            <Image src={"/logo.png"} alt="" width={202} height={46} />
          </a>
        </div>
        <div className={styles.space}></div>
        <div className={styles.language}>
          <div className={styles.search}>
            <Image
              unoptimized
              src={"/search.png"}
              alt=""
              width={22}
              height={22}
            />
          </div>
          <div className={styles.circle}></div>
          <div style={{ marginLeft: "2%" }}>
            <span style={{ fontSize: "18px" ,fontWeight:'700'}}>EN</span>
            <Image
              src={"/polygon.png"}
              alt=""
              className={styles.polygon}
              width={10}
              height={9}
            />
          </div>
        </div>
        <div className={styles.button}>
          <div className={styles.contactButton}>
            <Link href="">
              <a className={styles.contactText}>CONTACT US</a>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <li className={styles.li} key={`nav_1`}>
          <Link href="">
            <a className={styles.navItem}>HOME</a>
          </Link>
        </li>
        <li className={styles.li} key={`nav_2`}>
          <Link href="">
            <a className={styles.navItem}>RAW DATA</a>
          </Link>
        </li>{" "}
        <li className={styles.li} key={`nav_3`}>
          <Link href="">
            <a className={styles.navItem}>RESEARCH</a>
          </Link>
        </li>{" "}
        <li className={styles.li} key={`nav_4`}>
          <Link href="">
            <a className={styles.navItem}>ABOUT US</a>
          </Link>
        </li>{" "}
        <li className={styles.li} key={`nav_5`}>
          <Link href="">
            <a className={styles.navItem}>CONTACT US</a>
          </Link>
        </li>
      </div>
    </>
  );
};

export default Header;
