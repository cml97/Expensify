import React from 'react';
import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class ExpenseListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let { item } = this.props;
    return (
      <div>
        <Link to={`/edit/${item.id}`}><h1>{item.description}</h1></Link>
        <p>{item.note}</p>
        <p>{item.amount} - {item.createdAt}</p>
        <button
          onClick={() => this.props.dispatch(removeExpense(item.id))}
        >
          Remove
        </button>
      </div>
    );
  }
}
export default connect()(ExpenseListItem);
