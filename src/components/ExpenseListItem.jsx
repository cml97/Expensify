import React from 'react';
import { startRemoveExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';

class ExpenseListItem extends React.Component {
  render() {
    let { item } = this.props;
    return (
      <div>
        <Link to={`/edit/${item.id}`}><h1>{item.description}</h1></Link>
        <p>{item.note}</p>
        <p>{item.amount} - {moment(item.createdAt).format('DD MM YYYY')}</p>
        <button
          onClick={() => this.props.dispatch(startRemoveExpense(item.id))}
        >
          Remove
        </button>
      </div>
    );
  }
}
export default connect()(ExpenseListItem);
