import React from 'react';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        description: '',
        note: '',
        amount: 0
      }
    }
  }
  updateData = (key, value) => {
    let { form } = this.state;
    form[key] = value;

    this.setState({
      form
    })
  }

  handleSubmit = () => {
    let { form } = this.state;

    //this.props.dispatch(addExpense({1, form.description, form.note,  }))
  }
  render() {
    let { form } = this.state;

    return (
    <div>
      <form onSubmit={() => this.handleSubmit()}>
        <input type="text" placeholder="Description" autoFocus value={form.description} onChange={(e) => this.updateData('description', e.target.value )}/>
        <input type="number" placeholder="Amount" onChange={(e) => this.updateData('amount', e.target.value)}/>
        <textarea placeholder="Add a note for your expense" onChange={(e) => this.updateData('note', e.target.value)}></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
  }
}
export default ExpenseForm;
