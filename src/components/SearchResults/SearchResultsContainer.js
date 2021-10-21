import { connect } from 'react-redux';
import {getCardsForSeatchResults} from '../Redux/CardRedux';
import SearchResults from './SearchResults';

const mapStateToProps = (state, props) => {
    const searchString = props.match.params.id;
    return{
      cards: getCardsForSeatchResults(state, searchString),
    };
  };

export default connect(mapStateToProps)(SearchResults);