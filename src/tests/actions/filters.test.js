import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters'
import moment from 'moment'

test('set start date action object', () => {
  const action = setStartDate(moment(0))
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
})

test('set end date action object', () => {
  const action = setEndDate(moment(0))
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  })
})

test('sort by date action object', () => {
  const action = sortByDate()
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  })
})

test('sort by amount action object', () => {
  const action = sortByAmount()
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  })
})

test('text filter action object default value', () => {
  const action = setTextFilter()
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })

})

test('text filter action object provided value', () => {
  const action = setTextFilter('test')
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'test'
  })
})
