export const setTextFilter = (text) => {
  return {
    type: 'SET_TEXT_FILTER',
    text
  }
}
export const sortByAmount = () => {
  return {
    type: 'SORT_BY_AMOUNT'
  }
}

export const sortByDate = () => {
  return {
    type: 'SORT_BY_DATE'
  }
}
export const sortByText = () => {
  return {
    type: 'SORT_BY_TEXT'
  }
}
export const setStartDate = (startDate) => {
  return {
    type: 'SET_START_DATE',
    startDate
  }
}
export const setEndDate = (endDate) => {
  return {
    type: 'SET_END_DATE',
    endDate
  }
}
