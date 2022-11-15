import React from 'react';
import useOnClickOutside from 'use-onclickoutside';

import { ReactComponent as SearchIcon } from 'assets/search-icon.svg';
import { animated, useSpring } from 'react-spring';

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

  const props = useSpring({
    to: { opacity: 1, y: 0 },
    from: { opacity: 0, y: -100 },
    delay: 250
  });

  const overlayAnimation = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 }
  });

  return (
    <animated.div style={overlayAnimation} className={styles.overlay}>
      <animated.div style={props} className={styles.dropdown} ref={ref}>
        <form
          className={styles.dropdown__container}
          onSubmit={() => closeDropdown()}
        >
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
            {/* Not visible in Mobile */}
            <button
              className={`${styles.searchbar__btn} ${styles.desktop_only}`}
              type="submit"
            >
              <div className={styles.searchbar__btn__icon}>
                <SearchIcon />
              </div>
              <span>Search</span>
            </button>
          </div>

          <ul className={styles.resultsList}>
            <li>Oulu, Finland</li>
            <li>Helsinki, Finland</li>
            <li>Vaasa, Finland</li>
            <li>Turku, Finland</li>
          </ul>

          <button
            className={`${styles.searchbar__btn} ${styles.mobile_only}`}
            type="submit"
          >
            <div className={styles.searchbar__btn__icon}>
              <SearchIcon />
            </div>
            <span>Search</span>
          </button>
        </form>
      </animated.div>
    </animated.div>
  );
};
