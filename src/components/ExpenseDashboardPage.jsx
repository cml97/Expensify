import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllExpenses } from '../actions/expenses.js';
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
      <div className="content-container">
        <div className="info-container">
          <h1>Viewing <b>{this.props.expenses.length}</b> expenses totaling <b>{this.state.total} $</b></h1>
          <Link to="/create" className="link">
            <button className="button-google">Add Expense</button>
          </Link>
          
        </div>
        <div className="expense-table">
          <div className="table-thead">
              <div>Expense</div>
              <div>Amount</div>
          </div>
          <div>
          { 
            this.props.expenses.map((item, key) => {
              return (<ExpenseListItem item={item} key={key}/>)
            }
          )}
          
          </div>
        </div>
        
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
