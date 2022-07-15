import React, { useState } from "react";
import styles from "../styles/Faq.module.css";

const FaqQuestion = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.question__wrapper}>
      <div className={styles.question}>What happens after my payment? </div>
      {open && (
        <div className={styles.answer}>
          Crypto signals, as the name suggests, are signals or ideas that
          professional traders acquire using technical and fundamental analysis
          to trade a certain cryptocurrency. Crypto signals are created in two
          ways: automated and manual. Automated signals are created by
          sophisticated software run by trained professionals. Manual crypto
          signals are created by experienced traders who recognize patterns
          using advanced tools and indicators. Our signals are manual crypto
          signals curated by an experienced team of veteran traders. Our signals
          often specify the type of cryptocurrency to buy, such as Bitcoin,
          Ethereum, or XRP.
        </div>
      )}

      <div className={styles.open} onClick={() => setOpen((prev) => !prev)}>
        +
      </div>
    </div>
  );
};

export default FaqQuestion;
