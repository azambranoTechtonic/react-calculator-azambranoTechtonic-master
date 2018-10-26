import React from 'react'
import {Input} from 'react-calc-components'

export const CalculatorScreen = function(props){
  return(
    <div className="input-group input-group-lg extra-padded">
      <Input type="text" value={props.screenVal} className="form-control"  />
    </div>
)
}
