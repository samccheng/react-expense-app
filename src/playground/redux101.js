import { createStore } from 'redux'

const add = ({ a, b}) => {
  return a + b
}

console.log(add({a: 1, b: 4}))

const addDiff = (data) => {
  return data.a + data.b
}

console.log(addDiff({a: 3, b: 4}))

const incrementCount = ({ incrementBy = 0 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
  })

const store = createStore((state = { count: 0 }, action ) => {
  switch (action.type) {
    case 'INCREMENT':
       return {
        count: state.count + action.incrementBy
      }
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      }
    case 'RESET':
      return {
        count: 0
      }
    case 'SET':
      return {
        count: action.count
      }
    default:
      return state
  }

})

const decrementCount = ({decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
})

const resetCount = () => ({
  type: 'RESET'
})

const setCount = ({ count } = {}) => ({
  type: 'SET',
  count
})



store.dispatch(decrementCount({ decrementBy: 10}))

store.dispatch(incrementCount({incrementBy: 5}))

store.dispatch(resetCount())

store.dispatch(setCount({ count: 101}))

// store.dispatch({
//   type: 'RESET'
// })


console.log(store.getState())
