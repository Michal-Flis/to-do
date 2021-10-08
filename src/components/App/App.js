import React from 'react';
import styles from './App.scss';
import List from '../List/List';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>My first React app</h1>
        <h2 className={styles.subtitle}>hello world</h2>
        <List title={['Things to do', <sup key='1'>soon!</sup>]}
        image="https://images.pexels.com/photos/3374210/pexels-photo-3374210.jpeg?auto=compress%26cs=tinysrgb%26dpr=3%26h=750%26w=1260">

        </List>
      </main>
    )
  }
}

export default App;
