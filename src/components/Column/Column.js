import React from 'react';
import PropsTypes from 'prop-types';
import styles from './Column.scss';
import Card from '../Card/Card';
// import Creator from '../Creator/Creator';
// import {settings} from '../../data/dataStore';
import Icon from '../Icon/Icon';

class Column extends React.Component {
  static propTypes = {
    title: PropsTypes.node.isRequired,
    icon: PropsTypes.node,
    cards: PropsTypes.array,
    // addCard: PropsTypes.func,
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
        {/* <div>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} />
        </div> */}
      </section>
    );
  }
}

export default Column;