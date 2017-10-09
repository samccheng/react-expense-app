import moment from 'moment'

export default [{
  id: '1',
  description: 'coffee',
  note: '',
  amount: 300,
  createdAt: 0
},
{
  id: '2',
  description: 'donut',
  note: '',
  amount: 200,
  createdAt: moment(0).subtract(4, 'days').valueOf()
},
{
  id: '3',
  description: 'juice',
  note: '',
  amount: 3500,
  createdAt: moment(0).add(4, 'days').valueOf()
}]
