import { shallow } from 'enzyme'
import React from 'react'
import { Filters } from '.'

describe('<Filter />', () => {
  it('should pass props without crashing', () => {
    const values = ['test', 'test2']
    const wrapper = shallow(<Filters values={values} name="test" />)

    expect(wrapper.find('h3').text()).toBe('test')
    expect(wrapper.find('PillButton')).toHaveLength(values.length)
  })
})
