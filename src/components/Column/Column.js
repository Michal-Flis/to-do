import React from 'react';
import PropsTypes from 'prop-types';
import styles from './Column.scss';

class Column extends React.Component {
  static propTypes = {
    columnTitle: PropsTypes.node.isRequired,
    }

  render(){
    return(
      <section className={styles.component}>
        <h3 className={styles.title}>{this.props.columnTitle}</h3>
      </section>
    )
  }
}

export default Column;