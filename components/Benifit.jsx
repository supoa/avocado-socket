import React from "react";
import styles from "../styles/Benifits.module.css";
import Image from "next/image";

const Benifit = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Benefits of Joining – CryptoCade Family VIP</h2>
      <p className={styles.description}>
        Get up to 80 highly professional crypto trading signals every month on
        telegram for Binance or Bitmex and Bybit exchange. All the ParadiseVIP
        crypto trading calls are made by our Paradise Team and are based on
        technical and fundamental analysis. Our Paradise Team are sharing their
        crypto trades with you, so grab the opportunity and start trading
        cryptocurrency like a pro today!
      </p>

      <div className={styles.benifits}>
        {[1, 2, 3, 3].map((item) => (
          <div className={styles.benifit}>
            <div className={styles.title}>
              <span>
                <Image
                  width="35px"
                  height="35px"
                  src="/images/check-mark.png"
                  alt="Check-mark"
                />
              </span>
              <span> Be The First</span>
            </div>
            <p>
              Buy the dip, sell the top. Easy to say, harder to do. That’s why
              we are here: to satisfy the needs of our clients. As our
              ParadiseFamilyVIP member you will get our trading signals
              everyday, we will share our buy zone – that is where we are
              accumulating the coin, sell targets – where we are starting to
              sell our position and our stop loss in case the trade turns
              against us, we are securing our money by tight stop loss. Low risk
              high, reward strategy – that is our daily bread.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benifit;
