import { shallow } from 'enzyme'
import React from 'react'
import { SideBar } from '.'

describe('<SideBar />', () => {
  const wrapper = shallow(<SideBar />)
  it('should render Filters', () => {
    expect(wrapper.find('h3').text()).toBe('Filters')
    expect(wrapper.find('Filters')).toHaveLength(3)
  })

  it('should find button', () => {
    expect(wrapper.find('PillButton')).toHaveLength(1)
  })
})
