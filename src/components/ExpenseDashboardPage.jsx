import React from 'react';
import { addExpense, removeExpense } from '../actions/expenses.js';
import { connect } from 'react-redux';

class ExpenseDashboardPage extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {

  }

  componentWillReceiveProps(nextProps) {

  }
  render() {
    return (
      <div>
        {this.props.expenses.map((item, key) => {
          console.log(this.props);
          return (
            <div key={key}>
              <h1>{item.name}</h1>
              <p>{item.description}</p>
              <button onClick={() => this.props.dispatch(removeExpense(item.id))}>Remove</button>
            </div>
          )
        })}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    filters: state.filters
  }
}
export default connect(mapStateToProps)(ExpenseDashboardPage);
