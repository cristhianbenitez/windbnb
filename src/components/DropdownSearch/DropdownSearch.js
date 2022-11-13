import React from 'react';
import { ReactComponent as SearchIcon } from 'assets/search-icon.svg';

import styles from './DropdownSearch.module.css';

export const DropdownSearch = () => {
  const [location, setLocation] = React.useState('');

  const onChangeLocation = (e) => setLocation(e.target.value);
  return (
    <div className={styles.overlay}>
      <div className={styles.dropdown}>
        <div className={styles.searchbar}>
          <div className={styles.searchbar__input}>
            <label htmlFor="location">Location</label>
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Add location"
              value={location}
              onChange={onChangeLocation}
            />
          </div>
          <div className={styles.searchbar__input}>
            <label htmlFor="guests">Guests</label>
            <input
              type="text"
              name="guests"
              id="guests"
              placeholder="Add guests"
              maxLength={3}
            />
          </div>

          <button className={styles.searchbar__btn}>
            <div className={styles.searchbar__btn__icon}>
              <SearchIcon />
            </div>
            <span>Search</span>
          </button>
        </div>

        <ul className={styles.resultsList}>
          <li></li>
        </ul>
      </div>
    </div>
  );
};
