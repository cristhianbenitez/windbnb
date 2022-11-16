import React from 'react';

import { Header, StayCard } from 'components';

import styles from './App.module.css';
import stays from './data/stays.json';

function App() {
  const id = React.useId();
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <div className={styles.main__heading}>
          <h2>Stays in Finland</h2>
          <span>12+ stays</span>
        </div>

        <section className={styles.main__grid}>
          {stays.map((props, index) => (
            <StayCard props={props} key={`${id}-${index}`} />
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
