import React from 'react';
import useOnClickOutside from 'use-onclickoutside';

import { ReactComponent as SearchIcon } from 'assets/search-icon.svg';

import styles from './DropdownSearch.module.css';

export const DropdownSearch = ({
  location,
  setLocation,
  guests,
  setGuests,
  closeDropdown,
  isLocationFocused
}) => {
  const ref = React.useRef(null);

  const onChangeLocation = (e) => setLocation(e.target.value);

  const onChangeGuests = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      setGuests(e.target.value);
    }
  };

  useOnClickOutside(ref, () => {
    closeDropdown();
  });

  return (
    <div className={styles.overlay}>
      <div className={styles.dropdown} ref={ref}>
        <form className={styles.searchbar} onSubmit={() => closeDropdown()}>
          <div className={styles.searchbar__input}>
            <label htmlFor="location">Location</label>
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Add location"
              value={location}
              onChange={onChangeLocation}
              autoFocus={isLocationFocused}
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
              value={guests}
              onChange={onChangeGuests}
              autoFocus={!isLocationFocused}
            />
          </div>

          <button className={styles.searchbar__btn} type="submit">
            <div className={styles.searchbar__btn__icon}>
              <SearchIcon />
            </div>
            <span>Search</span>
          </button>
        </form>

        <ul className={styles.resultsList}>
          <li>Oulu, Finland</li>
          <li>Helsinki, Finland</li>
          <li>Vaasa, Finland</li>
          <li>Turku, Finland</li>
        </ul>
      </div>
    </div>
  );
};
