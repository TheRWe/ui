import React from 'react'
import {
  DEFAULT_FILLVALUES,
  AGG_WINDOW_AUTO,
} from 'src/timeMachine/constants/queryBuilder'
import {DEFAULT_THRESHOLDS_LIST_COLORS} from 'src/shared/constants/thresholds'
import {Color, SingleStatViewProperties} from 'src/types'

const icon = (
  <div className="vis-graphic" data-testid="vis-graphic--single-stat">
    <svg
      width="100%"
      height="100%"
      version="1.1"
      id="SingleStat"
      x="0px"
      y="0px"
      viewBox="0 0 150 150"
      preserveAspectRatio="none meet"
    >
      <path
        className="vis-graphic--fill vis-graphic--fill-d"
        d="M35.6,80.4h4.9v1.1h-4.9v7.8h-1.1v-7.8H20.7v-0.6l13.6-20.1h1.3V80.4z M22.4,80.4h12.1V62.1l-1.6,2.7 L22.4,80.4z"
      />
      <path
        className="vis-graphic--fill vis-graphic--fill-d"
        d="M58.6,75.1c-0.7,1.5-1.8,2.7-3.2,3.6c-1.5,0.9-3.1,1.4-4.9,1.4c-1.6,0-3-0.4-4.2-1.3s-2.2-2-2.9-3.5 c-0.7-1.5-1.1-3.1-1.1-4.8c0-1.9,0.4-3.6,1.1-5.1c0.7-1.6,1.7-2.8,3-3.7c1.3-0.9,2.7-1.3,4.3-1.3c2.9,0,5.2,1,6.7,2.9 c1.5,1.9,2.3,4.7,2.3,8.3v3.3c0,4.8-1.1,8.5-3.2,11c-2.1,2.5-5.3,3.8-9.4,3.9H46l0-1.1h0.8c3.8,0,6.7-1.2,8.7-3.5 C57.6,82.8,58.6,79.5,58.6,75.1z M50.4,79c1.9,0,3.6-0.6,5.1-1.7s2.5-2.6,3-4.5v-1.2c0-3.3-0.7-5.8-2-7.5c-1.4-1.7-3.3-2.6-5.8-2.6 c-1.4,0-2.7,0.4-3.8,1.2s-2,1.9-2.6,3.3c-0.6,1.4-0.9,2.9-0.9,4.5c0,1.5,0.3,3,0.9,4.3c0.6,1.3,1.5,2.4,2.5,3.1 C47.8,78.7,49.1,79,50.4,79z"
      />
      <path
        className="vis-graphic--fill vis-graphic--fill-d"
        d="M81.3,89.2h-17v-1.1L74,77c1.6-1.9,2.8-3.5,3.5-5c0.8-1.4,1.2-2.8,1.2-4c0-2.1-0.6-3.7-1.8-4.9 c-1.2-1.2-2.9-1.7-5.1-1.7c-1.3,0-2.5,0.3-3.6,1c-1.1,0.6-2,1.5-2.6,2.6c-0.6,1.1-0.9,2.4-0.9,3.8h-1.1c0-1.5,0.4-2.9,1.1-4.2 c0.7-1.3,1.7-2.3,2.9-3.1s2.6-1.1,4.2-1.1c2.5,0,4.5,0.7,5.9,2c1.4,1.3,2.1,3.2,2.1,5.6c0,2.2-1.2,4.9-3.7,7.9l-1.8,2.2l-8.6,10 h15.6V89.2z"
      />
      <path
        className="vis-graphic--fill vis-graphic--fill-d"
        d="M85.3,88.3c0-0.3,0.1-0.6,0.3-0.8c0.2-0.2,0.5-0.3,0.8-0.3c0.3,0,0.6,0.1,0.8,0.3s0.3,0.5,0.3,0.8 c0,0.3-0.1,0.6-0.3,0.8s-0.5,0.3-0.8,0.3c-0.3,0-0.6-0.1-0.8-0.3C85.4,88.8,85.3,88.6,85.3,88.3z"
      />
      <path
        className="vis-graphic--fill vis-graphic--fill-d"
        d="M92.7,74.3L94,60.8h13.9v1.1H95l-1.2,11.4c0.7-0.6,1.6-1,2.7-1.4s2.2-0.5,3.3-0.5c2.6,0,4.6,0.8,6.1,2.4 c1.5,1.6,2.3,3.8,2.3,6.4c0,3.1-0.7,5.4-2.1,7c-1.4,1.6-3.4,2.4-5.9,2.4c-2.4,0-4.4-0.7-5.9-2.1c-1.5-1.4-2.3-3.3-2.5-5.8h1.1 c0.2,2.2,0.9,3.9,2.2,5.1c1.2,1.2,3,1.7,5.2,1.7c2.3,0,4.1-0.7,5.2-2.1c1.1-1.4,1.7-3.5,1.7-6.2c0-2.4-0.7-4.3-2-5.7 c-1.3-1.4-3.1-2.1-5.3-2.1c-1.4,0-2.6,0.2-3.6,0.5c-1,0.4-1.9,0.9-2.7,1.7L92.7,74.3z"
      />
      <path
        className="vis-graphic--fill vis-graphic--fill-d"
        d="M113.8,74.3l1.3-13.6H129v1.1h-12.9l-1.2,11.4c0.7-0.6,1.6-1,2.7-1.4s2.2-0.5,3.3-0.5c2.6,0,4.6,0.8,6.1,2.4 c1.5,1.6,2.3,3.8,2.3,6.4c0,3.1-0.7,5.4-2.1,7c-1.4,1.6-3.4,2.4-5.9,2.4c-2.4,0-4.4-0.7-5.9-2.1c-1.5-1.4-2.3-3.3-2.5-5.8h1.1 c0.2,2.2,0.9,3.9,2.2,5.1c1.2,1.2,3,1.7,5.2,1.7c2.3,0,4.1-0.7,5.2-2.1c1.1-1.4,1.7-3.5,1.7-6.2c0-2.4-0.7-4.3-2-5.7 c-1.3-1.4-3.1-2.1-5.3-2.1c-1.4,0-2.6,0.2-3.6,0.5c-1,0.4-1.9,0.9-2.7,1.7L113.8,74.3z"
      />
    </svg>
  </div>
)

export default register => {
  register({
    type: 'single-stat',
    name: 'Single Stat',
    graphic: icon,
    initial: {
      type: 'single-stat',
      shape: 'chronograf-v2',
      legend: {},

      queries: [
        {
          name: '',
          text: '',
          editMode: 'builder',
          builderConfig: {
            buckets: [],
            tags: [
              {
                key: '_measurement',
                values: [],
                aggregateFunctionType: 'filter',
              },
            ],
            functions: [{name: 'mean'}],
            aggregateWindow: {
              period: AGG_WINDOW_AUTO,
              fillValues: DEFAULT_FILLVALUES,
            },
          },
        },
      ],

      colors: DEFAULT_THRESHOLDS_LIST_COLORS as Color[],
      prefix: '',
      tickPrefix: '',
      suffix: '',
      tickSuffix: '',
      note: '',
      showNoteWhenEmpty: false,
      decimalPlaces: {
        isEnforced: true,
        digits: 2,
      },
    } as SingleStatViewProperties,
  })
}
