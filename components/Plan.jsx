import React from "react";
import styles from "../styles/Plan.module.css";
import Image from "next/image";

const plans = [
  { price: "8000 $", benifit: "6.5X", duration: "330 days", pay: "17 times" },
  { price: "10000 $", benifit: "9X", duration: "300 days", pay: "16 times" },
  { price: "13000 $", benifit: "9X", duration: "300 days", pay: "16 times" },
  {
    price: "16000 $",
    benifit: "10.3X",
    duration: "280 days",
    pay: "7 times",
    reward: "164 Fil",
  },
  {
    price: "7000 $",
    benifit: "Lifetime",
    duration: "Infinity",
    pay: "6 times in a year",
  },
  {
    price: "2300 $",
    benifit: "4.7X",
    duration: "365 days",
    pay: "14 times",
  },
  {
    price: "25000 $",
    benifit: "13X",
    duration: "310 days",
    pay: "17 times",
    rewared: "329 Fil",
  },
  {
    price: "5000 $",
    benifit: "6X",
    duration: "360 days",
    pay: "11 times",
    rewared: "25 Fil",
  },
];

const Plan = () => {
  return (
    <div className={styles.wrapper} id="plan">
      <h1>
        Investment <span>Plans</span>{" "}
      </h1>
      <p>
        To make a solid investment, you have to know where you are investing.
        Find a plan which is best for you.
      </p>
      <div className={styles.image__container}>
        {plans.map((plan) => (
          <div
            style={{
              backgroundImage:
                "url('https://template.viserlab.com/hyiplab/demo/assets/images/bg/bg-4.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className={styles.image__wrapper}
          >
            <div className={styles.price}>{plan.price}</div>
            <div className={styles.benifit}>B - {plan.benifit} </div>
            <div className={styles.duration}>Duration : {plan.duration} </div>
            <div className={styles.pay}>Pay : {plan.pay}</div>
            {plan.reward && (
              <div className={styles.reward}>Reward : {plan.reward}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plan;
