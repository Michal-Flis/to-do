import React from 'react';
import PropsTypes from 'prop-types';
import Hero from '../Hero/Hero';
import styles from './List.scss';
import Column from '../Column/Column';

class List extends React.Component {
  static propTypes = {
    title: PropsTypes.node.isRequired,
    children: PropsTypes.node.isRequired,
  }

  static defaultProps = {
    children: <p>Interesting things, I want to check out.</p>
  }

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} 
        images={this.props.image}/>
        <div className={styles.description}>
          {this.props.children}
        </div>
        <div className={styles.columns}>
          <Column columnTitle={'Animals'}></Column>
          <Column columnTitle={'Plants'}></Column>
          <Column columnTitle={'Minerals'}></Column>
        </div>
      </section>
    )
  }
}

export default List;
