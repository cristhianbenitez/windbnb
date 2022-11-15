import React from 'react';
import styles from './StayCard.module.css';

export const StayCard = ({ props }) => {
  const {
    beds,
    city,
    country,
    maxGuests,
    photo,
    rating,
    superHost,
    title,
    type
  } = props;

  const superHostVisibilityStyle = superHost
    ? { display: 'block' }
    : { display: 'none' };

  return (
    <div className={styles.stayCard}>
      <div className={styles.stayCard_container}>
        <div className={styles.stayCard__imageContainer}>
          <img src={photo} alt={title} />
        </div>
        <div className={styles.stayCard__info}>
          <span
            className={styles.stayCard__info__superhost}
            style={superHostVisibilityStyle}
          >
            Super Host
          </span>

          <span className={styles.stayCard__info__type}>
            {type}.{beds && `${beds} beds`}
          </span>

          <span className={styles.stayCard__info__rating}>{rating}</span>
        </div>

        <h3 className={styles.stayCard__title}>{title}</h3>
      </div>
    </div>
  );
};
