import React from 'react'
import {Button} from 'react-calc-components'


export const CalculatorBody = function(props){
  return (<div className= "container">
    <div className="row padded">
      <div className="col-md-3">
        <Button onClick={props.onClick} value='7' type="button" className="btn btn-secondary btn-lg" text={7} />
      </div>
      <div className="col-md-3">
        <Button onClick={props.onClick} value='8' type="button" className="btn btn-secondary btn-lg" text={8} />
      </div>
      <div className="col-md-3">
        <Button onClick={props.onClick} value='9' type="button" className="btn btn-secondary btn-lg" text={9} />
      </div>
      <div className="col-md-3">
        <Button onClick={props.onClick} value='/' type="button" className="btn btn-secondary btn-lg" text={'/'} />
      </div>
    </div>
    <div className="row padded">
      <div className="col-md-3">
        <Button onClick={props.onClick} value='4' type="button" className="btn btn-secondary btn-lg" text={4} />
      </div>
      <div className="col-md-3">
        <Button onClick={props.onClick} value='5' type="button" className="btn btn-secondary btn-lg" text={5} />
      </div>
      <div className="col-md-3">
        <Button onClick={props.onClick} value='6' type="button" className="btn btn-secondary btn-lg" text={6} />
      </div>
      <div className="col-md-3">
        <Button onClick={props.onClick} value='*' type="button" className="btn btn-secondary btn-lg" text={'*'} />
      </div>
    </div>
    <div className="row padded">
      <div className="col-md-3">
        <Button onClick={props.onClick} value='1' type="button" className="btn btn-secondary btn-lg" text={1} />
      </div>
      <div className="col-md-3">
        <Button onClick={props.onClick} value='2' type="button" className="btn btn-secondary btn-lg" text={2} />
      </div>
      <div className="col-md-3">
        <Button onClick={props.onClick} value='3' type="button" className="btn btn-secondary btn-lg" text={3} />
      </div>
      <div className="col-md-3">
        <Button onClick={props.onClick} value='+' type="button" className="btn btn-secondary btn-lg" text={'+'} />
      </div>
    </div>
    <div className="row padded">
      <div className="col-md-3">
        <Button onClick={props.onClick} value='0' type="button" className="btn btn-secondary btn-lg" text={0} />
      </div>
      <div className="col-md-3">
        <Button onClick={props.onClick} value='.' type="button" className="btn btn-secondary btn-lg" text={'.'} />
      </div>
      <div className="col-md-3">
        <Button onClick={props.onClick} value='C' type="button" className="btn btn-secondary btn-lg" text={'C'} />
      </div>
      <div className="col-md-3">
        <Button onClick={props.onClick} value='-' type="button" className="btn btn-secondary btn-lg" text={'-'} />
      </div>
    </div>
    <div className="row padded">
      <div className="col-md-6">
        <Button onClick={props.onClick} value='=' type="button" className="btn btn-secondary btn-lg" text={'='} />
      </div>
      <div className="col-md-3">
        <Button onClick={props.onClick} value='P' type="button" className="btn btn-secondary btn-lg" text={'P'} />
      </div>
      <div className="col-md-3">
        <Button onClick={props.onClick} value='Q' type="button" className="btn btn-secondary btn-lg" text={'√'} />
      </div>
    </div>
  </div>)
}
