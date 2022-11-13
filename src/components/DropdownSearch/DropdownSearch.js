import React from 'react';

import styles from './DropdownSearch';
import { ReactComponent as SearchIcon } from 'assets/search-icon.svg';

export const DropdownSearch = () => {
  return (
    <div className={styles.searchbar}>
      <div className={styles.searchbar__input}>
        {/* Hidden text only to be seen when dropdown is open
        <label htmlFor="location" style={{ display: 'none' }}>
          Location
        </label> */}
        <input
          type="text"
          name="location"
          id="location"
          placeholder="Add location"
        />
      </div>
      <div className={styles.searchbar__input}>
        {/* Hidden text only to be seen when dropdown is open
        <label htmlFor="guests" style={{ display: 'none' }}>
          Guests
        </label> */}
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

        {/* Hidden text only to be seen when dropdown is open
        <span style={{ display: 'none' }}>Search</span> */}
      </button>
    </div>
  );
};
