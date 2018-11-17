import React from 'react';
import { startRemoveExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';

class ExpenseListItem extends React.Component {
  render() {
    let { item } = this.props;
    return (
      <div className="expense-item">
        <div>
          <Link className="link-nodec" to={`/edit/${item.id}`}>
            <h2>{item.description}</h2>
          </Link>
          <p>{moment(item.createdAt).format('MMMM Do, YYYY')}</p>
        </div>
        <div>
          <h3>{item.amount} $</h3>
        </div>
      </div>
    );
  }
}
export default connect()(ExpenseListItem);
