import { shallow } from 'enzyme'
import React from 'react'
import { Main } from '.'
import { Programs } from '../../Programs'
import { SideBar } from '../../SideBar'

describe('<Main />', () => {
  const wrapper = shallow(<Main />)
  it('renders sidebar without crashing', () => {
    expect(wrapper.contains(<SideBar />)).toEqual(true)
  })

  it('renders programs without crashing', () => {
    expect(wrapper.contains(<Programs />)).toEqual(true)
  })
})
