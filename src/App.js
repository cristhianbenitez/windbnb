import React from 'react';

import { Header, StayCard } from 'components';

import styles from './App.module.css';
import stays from './data/stays.json';

function App() {
  const [location, setLocation] = React.useState('');
  const [guests, setGuests] = React.useState('');
  const [results, setResults] = React.useState([]);
  const id = React.useId();

  const arrOfStays = results.length > 0 ? results : stays;
  const numberOfStays = arrOfStays.length > 12 ? `12 +` : arrOfStays.length;
  return (
    <div className={styles.container}>
      <Header
        location={location}
        setLocation={setLocation}
        guests={guests}
        setGuests={setGuests}
        stays={stays}
        setResults={setResults}
      />

      <main className={styles.main}>
        <div className={styles.main__heading}>
          <h2>Stays in Finland</h2>
          <span>{numberOfStays} stays</span>
        </div>

        <section className={styles.main__grid}>
          {arrOfStays.map((props, index) => (
            <StayCard props={props} key={`${id}-${index}`} />
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
