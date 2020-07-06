import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const countryOptions = [
  { key: 'af', value: 'new', text: 'newest product' },
  { key: 'af', value: 'old',  text: 'oldest product' }
  
]

const filterByDropdown = (props) => (
  <Dropdown
  className= "ui segment"
    placeholder='Select Country'
    onChange={props.handlechangeDate}
    search
    selection
    name={props.InputName}
    options={countryOptions}
  />
)

export default filterByDropdown;