import React from 'react'
import { shallow } from 'enzyme'
import LoginForm from './LoginForm'
import sinon from 'sinon'

const changeModalState = sinon.spy()

it('renders without crashing', () => {
  shallow(<LoginForm errors={{}} changeModalState={changeModalState}/>)
})