import { shallow } from 'enzyme'
import React from 'react'
import { Card } from '.'

describe('<Card />', () => {
  it('renders children when passed in', () => {
    const wrapper = shallow((
      <Card>
        <div className="test" />
      </Card>
    ))

    expect(wrapper.contains(<div className="test" />)).toEqual(true)
  })
})
