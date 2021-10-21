import React from 'react';
import PropsTypes from 'prop-types';
import styles from './SearchResults.scss';
import Card from '../Card/Card';
import Icon from '../Icon/Icon';
import { settings } from '../../data/dataStore';

class SearchResults extends React.Component {
  static propTypes = {
    title: PropsTypes.node.isRequired,
    icon: PropsTypes.node,
    cards: PropsTypes.array,
    addCard: PropsTypes.func,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  render(){
    const {title, icon, cards} = this.props;
    return(
      <section className={styles.component}>
        <h3 className={styles.title}><span className={styles.icon}><Icon name={icon}/></span>{title}</h3>
        <div>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
      </section>
    );
  }
}

export default SearchResults;