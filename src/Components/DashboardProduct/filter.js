import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const countryOptions = [
  { key: 'af', value: 'new', text: 'newest product' },
  { key: 'af', value: 'default',  text: 'oldest product' },
  { key: 'af', value: 'name', text: 'name' },
  { key: 'af', value: 'color', text: 'color' },
  { key: 'af', value: 'reference', text: 'reference' },

  
  
]

const Filter = (props) => (
  <Dropdown
  className= "ui segment"
    placeholder='Select Country'
    onChange={props.handlechangefilter}
    search
    selection
    options={countryOptions}
  />
)

export default Filter