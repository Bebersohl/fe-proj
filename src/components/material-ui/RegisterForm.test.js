import React from 'react'
import { shallow } from 'enzyme'
import RegisterForm from './RegisterForm'
import sinon from 'sinon'

const changeModalState = sinon.spy()

it('renders without crashing', () => {
  shallow(<RegisterForm errors={{}} changeModalState={changeModalState}/>)
})