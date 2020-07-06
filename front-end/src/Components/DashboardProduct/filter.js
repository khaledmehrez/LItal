import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { Checkbox } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'



const Filter = (props) => (
  
 <div>
  <Dropdown
  
  className= "ui segment"
    placeholder={`Select ${props.Inputname}`}
    onChange={props.handlechangeDropdownFilter}
    search
    selection
    name={props.Inputname}
    options={props.dataOptions}
    clearable
  />
  
  </div>
)

export default Filter