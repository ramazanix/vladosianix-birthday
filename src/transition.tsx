import { motion } from "motion/react";

const phrases = [
  "земеля керри",
  "ниггерские члены у тебя в очке",
  "владосик из синтез-дети",
  "лерка пёрнула в лицо",
  "гау",
  "саси",
  "хуковать надо",
  "где варды сука???",
  "шлюха",
  "нигер",
  "с днюхой, ёпта!",
];

const transition = (OrigComponent: React.ComponentType) => {
  return () => {
    const phrase = phrases[Math.floor(Math.random() * phrases.length)];

    return (
      <>
        <OrigComponent />
        <motion.div
          className="slide-in"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 0 }}
          exit={{ scaleX: 1 }}
          transition={{
            duration: 2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="phrases old-standard-tt-bold">{phrase}</span>
        </motion.div>
        <motion.div
          className="slide-out"
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          exit={{ scaleX: 0 }}
          transition={{
            duration: 2,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </>
    );
  };
};

export default transition;
