import React from 'react';
import ExpenseForm from './ExpenseForm';

class AddExpensePage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ExpenseForm />
      </div>
    );
  }
}
export default AddExpensePage;
