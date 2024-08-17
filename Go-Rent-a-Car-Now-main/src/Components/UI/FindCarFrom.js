
import React from 'react'
import '../UI-style/FindCarFrom.css'
import { Form, FormGroup} from 'reactstrap'


export default function FindCarFrom() {

  return (
    <>
      <Form className='from '>
       <div className="d-flex align-items-center justify-content-between flex-wrap">
            <FormGroup className='form_group '>
              <input type="text" placeholder='From address' required/>
            </FormGroup>
            <FormGroup className='form_group'>
              <input type="text" placeholder='to address' required/>
            </FormGroup>
            <FormGroup className='form_group'>
              <input type="date" placeholder='Journey date' required/>
            </FormGroup>
            <FormGroup className='form_group'>
              <input className='Journey_time' type="time" placeholder='Journey time ' required/>
            </FormGroup>
            <FormGroup className='select_group'>
            <select name="" id="">
              <option value="AC">AC Car</option>
              <option value="NON-AC">NON AC Car</option>
            </select>
            </FormGroup>
            <FormGroup className='select_group'>
           <button className=" find_car-btn">Find Car</button>
            </FormGroup>
        </div>
      </Form>
    </>
  )
}
