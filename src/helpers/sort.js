const getFilteredExpenses = (expenses, filter) => {
  if (expenses.length > 0) {
    return expenses.filter((item) => {

      // let startDateMatch = item.createdAt >= filter.startDate;
      // let endDateMatch = item.createdAt <= filter.endDate;
      let textMatch = item.description.toLowerCase().includes(filter.text.toLowerCase());

      return textMatch;

    }).sort((a, b) => {
      if (filter.sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      }
      else if (filter.sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1
      }
      else{
        return 1;
      }
    });
  }
  else {
    return [];
  }
}
export default getFilteredExpenses;
