import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const countryOptions = [
  { key: 'af', value: 'new', text: 'newest product' },
  { key: 'af', value: 'old',  text: 'oldest product' }
  
]

const filterByDate = (props) => (
  <Dropdown
  className= "ui segment"
    placeholder='Select Country'
    onChange={props.handlechangeDate}
    search
    selection
    options={countryOptions}
  />
)

export default filterByDate