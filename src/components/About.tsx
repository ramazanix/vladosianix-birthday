import { motion } from "motion/react";
import transition from "../transition";

const About = () => {
  const header = "Пару слов об этом пидарасике".split("");
  const firstText =
    "Владосик, братик, тебе 21 год! Теперь ты официально можешь не только пить алкоголь в любой стране мира, но и осознанно продолжать воровать крипов и фраги у меня в Доте. Это ли не счастье? Ты учишься на 4 курсе в Омске, и пусть это звучит как испытание, но ты всё равно держишься молодцом – не сдаёшься, как настоящий земеля керри, который знает, что в конце пути его ждёт заслуженный чапалах и аганим.";
  const secondText =
    "Наши катки – это отдельное искусство. Ты берёшь Рубика, Вич Доктора или Земелю, и я уже понимаю, что мои крипы в опасности. Но несмотря на всё это, я уважаю тебя, братик. Потому что ты – мой саппорт, мой cосунок и мой личный вор крипов.";
  const thirdText =
    "Ты, блядь, жил, любил, страдал… Сначала Маша, теперь Лерка. Но, братан, ты пережил этот пиздец, и это главное. Да, Маша уже с пузом от какого-то кринжового додика, да, Лерка тоже оказалась хуйнёй. Но знаешь что? Ты – свободный мужчина! И теперь перед тобой открыты миллионы ниггерских членов… или, ну, что ты там выберешь.";
  const fourthText =
    "Владосик, шлюшка, с днём рождения тебя, ёбаный ты магистр проёба себя в очко и заглатывания спермы! Пусть в твоей жизни будет меньше ёбаных кринжей, больше победных каток и всегда нахуй горячая шаурма!";

  return (
    <>
      <div className="about-header brawler-bold">
        {header.map((char, idx) => (
          <motion.span
            key={idx + char}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.2,
              delay: idx * 0.1 + 1.2,
              ease: "easeInOut",
            }}
          >
            {char}
          </motion.span>
        ))}
      </div>
      <motion.div className="about-text-container brawler-regular">
        <p className="about-text">{firstText}</p>
        <p className="about-text">{secondText}</p>
        <p className="about-text">{thirdText}</p>
        <p className="about-text">{fourthText}</p>
      </motion.div>
    </>
  );
};

export default transition(About);
