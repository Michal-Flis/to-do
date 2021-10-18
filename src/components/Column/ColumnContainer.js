import {connect} from 'react-redux';
import Column from './Column';
import { createActionAddCard, getColumnsForColumn } from '../Redux/columnRedux';


const mapStateToProps = (state, props) => ({
  cards: getColumnsForColumn(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard({
    columnId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);