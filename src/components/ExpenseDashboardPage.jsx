import React from 'react';
import { fetchAllExpenses } from '../actions/expenses.js';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import Header from './Header';

class ExpenseDashboardPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0
    }
  }
  componentWillMount() {
    this.props.dispatch(fetchAllExpenses(this.props.expenses));
  }
  componentWillReceiveProps(nextProps) {
    let total = 0;
    nextProps.expenses.forEach((item) => {
      total += Number(item.amount)
    })
    this.setState({
      total 
    })
  }

  render() {
    return (
      <div>
        <Header />
        <h1>{`Viewing ${this.props.expenses.length} expenses totaling ${this.state.total}`}</h1>
        {this.props.expenses.map((item, key) => {
          return (
            <ExpenseListItem item={item} key={key}/>
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
