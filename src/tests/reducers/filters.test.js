import filtersReducer from '../../reducers/filters'
import moment from 'moment'

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT'})

  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
})

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT'})

  expect(state.sortBy).toBe('amount')
})

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    sort: 'amount',
    startDate: undefined,
    endDate: undefined
  }

  const state = filtersReducer(currentState, { type: 'SORT_BY_DATE'})

  expect(state.sortBy).toBe('date')
})

test('should set start date', () => {
  const startDate = moment()
  const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate })

  expect(state.startDate).toEqual(startDate)
})

test('should set end date', () => {
  const endDate = moment()
  const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate })

  expect(state.endDate).toEqual(endDate)
})

test('should set text filter', () => {
  const state = filtersReducer(undefined, { type: 'TEXT_FILTER', text: 'test'})

  expect(state.text).toBe("test")
})
