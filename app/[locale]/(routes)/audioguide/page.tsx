import audiotext from "./audioguideData";
import styles from "./audioguide.module.scss";
import AudioGuide from "@/app/[locale]/components/Molecoles/Audioguide/AudioGuide";

function AudioGuidePage() {
  return (
    <main className={styles.main}>
      <h1>Audioguide</h1>
      {audiotext.map((audio) => (
        <div className={styles.playerBox} key={audio.id}>
          <AudioGuide
            label={audio.label}
            filePath={audio.filePath}
            text={audio.text}
            img={audio.img}
          />
        </div>
      ))}
    </main>
  );
}

export default AudioGuidePage;
