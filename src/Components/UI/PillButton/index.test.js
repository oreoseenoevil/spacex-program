import { shallow } from 'enzyme'
import React from 'react'
import sinon from 'sinon'
import { PillButton } from '.'

const value = 'test'

describe('<PillButton />', () => {
  it('should have innertext equal value property', () => {
    const wrapper = shallow(<PillButton>{value}</PillButton>)
    expect(wrapper.find('button').text()).toEqual(value)
  })

  it('simulates click events', () => {
    const mockCallBack = sinon.spy()
    const button = shallow((<PillButton onClick={mockCallBack} />))
    button.find('button').simulate('click')
    expect(mockCallBack).toHaveProperty('callCount', 1)
  })
})
