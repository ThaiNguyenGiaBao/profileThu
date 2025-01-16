import bao from "../../assets/images/minhthu.jpg";
import styles from "./LandingPage.module.scss";

const WelcomeSection: React.FC = () => (
  <div
    className={`${styles.myStyle} w-4/5 flex justify-center items-center gap-3 flex-col-reverse lg:flex-row lg:px-20`}
  >
    <section className="w-full flex flex-col justify-center text-3xl gap-1">
      <h1 className={`${styles.myFont} font-bold mb-3 dark:text-cyan-400`}>
        Hi 👋, I'm Dinh Ngoc Minh Thu (Mint)
      </h1>
      <p className="text-xl">Thành tích nổi bật: Cựu học sinh Ngô Quyền</p>
      <p className="text-xl">Châm ngôn: "If you feel sad, don't be sad"</p>
    </section>
    <div className="w-full flex justify-center items-center container">
      <img
        src={bao}
        alt="My Picture"
        style={{
          width: "clamp(200px, 100%, 400px)",
          height: "auto",
          borderRadius: "20px",
        }}
      />
    </div>
  </div>
);

export default WelcomeSection;
