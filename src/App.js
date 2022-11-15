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
        <h2>Stays in Finland</h2>

        {stays.map((props, index) => (
          <StayCard props={props} key={`${id}-${index}`} />
        ))}
      </main>
    </div>
  );
}

export default App;
