import React from 'react';

import { ReactComponent as SearchIcon } from 'assets/search-icon.svg';

import styles from './SearchBar.module.css';

export const SearchBar = ({ openDropdown, location, guests }) => {
  return (
    <div className={styles.searchbar}>
      <div className={styles.searchbar__input} onClick={openDropdown}>
        <input
          type="text"
          name="location"
          id="location"
          placeholder="Add location"
          value={location}
          readOnly
        />
      </div>
      <div className={styles.searchbar__input} onClick={openDropdown}>
        <input
          type="text"
          name="guests"
          id="guests"
          placeholder="Add guests"
          maxLength={3}
          value={guests}
          readOnly
        />
      </div>

      <button className={styles.searchbar__btn}>
        <div className={styles.searchbar__btn__icon}>
          <SearchIcon />
        </div>
      </button>
    </div>
  );
};
