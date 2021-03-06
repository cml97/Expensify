import React from 'react';
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        description: props.expense ? props.expense.description : '',
        note: props.expense ? props.expense.note : '',
        amount: props.expense,
        createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      },
      calendarFocused: false,
      error: ''
    }
  }

  onFocusChange = ({ focused }) => {
    this.setState({
      calendarFocused: focused
    })
  }
  updateData = (key, value) => {
    let { form } = this.state;
    form[key] = value;

    this.setState({
      form
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let { form } = this.state;
    let valid = form.description && form.amount;

    if (valid && this.props.onSubmit) {
      this.setState({
        error: ''
      })
      this.props.onSubmit({ ...form, createdAt: form.createdAt.valueOf() });

    }
    else {
      this.setState({
        error: 'Please enter description and amount'
      })
    }
  }
  render() {
    let { form, calendarFocused } = this.state;

    return (
      <div>
        <form className="form" onSubmit={(e) => this.handleSubmit(e)}>
          <input className="input large" type="text" placeholder="Description" value={form.description} onChange={(e) => this.updateData('description', e.target.value)} />
          <input className="input large" type="number" placeholder="Amount" value={form.amount} onChange={(e) => this.updateData('amount', e.target.value)} />
          <SingleDatePicker
            date={form.createdAt}
            onDateChange={(createdAt) => this.updateData('createdAt', createdAt)}
            focused={calendarFocused}
            onFocusChange={({ focused }) => this.onFocusChange({ focused })}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea className="input xlarge" placeholder="Add a note for your expense" value={form.note} onChange={(e) => this.updateData('note', e.target.value)}></textarea>
          <button className="button-google" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
export default ExpenseForm;
