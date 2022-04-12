import styles from "../styles/Home.module.css";
import logo from "../public/static/assets/logo.png";
import entry from "../public/static/assets/entry.jpg";
import collection from "../public/static/assets/collection.jpg";
import world from "../public/static/assets/world.png";
import utilities from "../public/static/assets/utilities.png";
import roadmap from "../public/static/assets/roadmap.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.entry}>
        <div className={styles.navwrapper}>
          <div className={styles.desktopNav}>
            <img
              className={styles.logo}
              src={logo.src}
              alt="logo"
              width={264}
              height="auto"
            ></img>
            <li className={styles.menulink}>
              <a href="#introduction">INTRODUCTION</a>
            </li>
            <li className={styles.menulink}>
              <a href="#collection">COLLECTION</a>
            </li>
            <li className={styles.menulink}>
              <a href="#worldwideview">WORLDVIEW</a>
            </li>
            <li className={styles.menulink}>
              <a href="#utilities">UTILITIES</a>
            </li>
            <li className={styles.menulink}>
              <a href="#roadmap">ROADMAP</a>
            </li>
            <li className={styles.menulink}>
              <a href="#">TEAM</a>
            </li>
            <li className={styles.menulink}>
              <a href="#">FAQ</a>
            </li>
          </div>
          <img
            className={styles.entryImg}
            src={entry.src}
            alt="entry"
            width={2048}
            height={1258}
          ></img>
          <hr className={styles.divider}></hr>
        </div>
      </section>
      <section id="introduction" className={styles.intro}>
        <div className={styles.introcontainer}>
          <div className={styles.introwrapper}>
            <div className={styles.introcontent}>
              <h2>INTRODUCTION</h2>
              <p>
                Welcome to the Pessimistic Donkey Club. This is a group of 7777
                donkeys who live on Happy Farm. This is a farm where donkeys
                play sports, design clothing, practice magic, and make
                porcelain. There are schools, playgrounds, and stadiums.
              </p>
            </div>
            <img
              className={styles.introImg}
              width={1024}
              height={683}
              src={collection.src}
              alt="intro"
            ></img>
          </div>
          <hr className={styles.divider}></hr>
        </div>
      </section>
      <section id="collection" className={styles.intro}>
        <div className={styles.introcontainer}>
          <div className={styles.introwrapper}>
            <img
              className={styles.introImg}
              width={1024}
              height={683}
              src={collection.src}
              alt="collection"
            ></img>
            <div className={styles.introcontent}>
              <h2>COLLECTION</h2>
              <p>
                Each Donkey is generated programmatically and unique. We had
                over 160 traits including hair, clothing, backgrounds,
                necklaces, etc. In our traits, we included streets wear, crypto
                related items, and Chinese cultures. The Donkeys are stored on
                the Solana blockchain and the price to purchase a Donkey is 1
                Solana.
              </p>
            </div>
          </div>
          <hr className={styles.divider}></hr>
        </div>
      </section>
      <section id="worldwideview" className={styles.intro}>
        <div className={styles.introcontainer}>
          <div className={styles.introwrapper}>
            <div className={styles.introcontent}>
              <h2>WORLDVIEW</h2>
              <p>
                Welcome to the Pessimistic Donkey Club. This is a group of 7777
                donkeys who live on Happy Farm. This is a farm where donkeys
                play sports, design clothing, practice magic, and make
                porcelain. There are schools, playgrounds, and stadiums.
              </p>
            </div>
            <img
              className={styles.introImg}
              width={1024}
              height={683}
              src={world.src}
              alt="intro"
            ></img>
          </div>
          <hr className={styles.divider}></hr>
        </div>
      </section>
      <section id="utilities" className={styles.intro}>
        <div className={styles.introcontainer}>
          <div className={styles.introwrapper}>
            <img
              className={styles.introImg}
              width={1024}
              height={683}
              src={utilities.src}
              alt="utilities"
            ></img>
            <div className={styles.introcontent}>
              <h2>UTILITIES</h2>
              <ul>
                <li>
                  Owning a PDC NFT, means you have complete rights for the NFT.
                  You can use it as your profile pictures, and show it off on
                  your social media!
                </li>
                <li>
                  Owners of PDC NFT will have access to our private members-only
                  Discord channel.
                </li>
                <li>
                  The owner of PDC NFT will have access and gain special items
                  in Metaverse games collaborated with PDC.
                </li>
              </ul>
            </div>
          </div>
          <hr className={styles.divider}></hr>
        </div>
      </section>
      <section id="roadmap" className={styles.intro}>
        <div className={styles.introcontainer}>
          <div className={styles.introwrapper}>
            <img
              className={styles.roadmapImg}
              width={1140}
              height={683}
              src={roadmap.src}
              alt="roadmap"
            ></img>
          </div>
          <hr className={styles.divider}></hr>
        </div>
      </section>
      <section id="roadmap" className={styles.intro}>
        <div className={styles.introwrapper}>
          <div className={styles.introcontent} style={{ width: "100%" }}>
            <p>Copyright © 2022 Pessimistic Donkey Club</p>
          </div>
        </div>
      </section>
    </div>
  );
}
