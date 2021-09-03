import { shallow } from 'enzyme'
import React from 'react'
import { ProgramItem } from '.'

const item = {
  mission_name: 'Falcon',
  flight_number: 1,
  launch_year: 2,
  launch_success: false,
  rocket: {
    first_stage: {
      cores: [{ land_success: false }]
    }
  },
  mission_id: [],
  mission_patch_small: ''
}

describe('<ProgramItem />', () => {
  it('render without crashing', () => {
    shallow(
      <ProgramItem
        missionName={item.mission_name}
        flightNumber={item.flight_number}
        launchYear={item.launch_year}
        launchSuccess={item.launch_success}
        landSuccess={item.rocket}
        missionID={item.mission_id}
        missionImage={item.mission_patch_small}
        key={item.flight_number}
      />
    )
  })
})
