import React from 'react'
import {NINETEEN_EIGHTY_FOUR} from '@influxdata/giraffe'
import {
  DEFAULT_FILLVALUES,
  AGG_WINDOW_AUTO,
} from 'src/timeMachine/constants/queryBuilder'
import {ScatterViewProperties} from 'src/types'

const icon = (
  <div className="vis-graphic" data-testid="vis-graphic--scatter">
    <svg
      width="100%"
      height="100%"
      version="1.1"
      id="Scatter"
      x="0px"
      y="0px"
      viewBox="0 0 150 150"
      preserveAspectRatio="none meet"
    >
      <circle
        className="vis-graphic--fill vis-graphic--fill-b"
        cx="77.6"
        cy="91.1"
        r="7.5"
      />
      <circle
        className="vis-graphic--fill vis-graphic--fill-b"
        cx="47.5"
        cy="110.9"
        r="7.5"
      />
      <circle
        className="vis-graphic--fill vis-graphic--fill-b"
        cx="111.6"
        cy="46.1"
        r="7.5"
      />
      <circle
        className="vis-graphic--fill vis-graphic--fill-b"
        cx="17.5"
        cy="118.5"
        r="7.5"
      />
      <rect
        x="77.6"
        y="111"
        className="vis-graphic--fill vis-graphic--fill-c"
        width="15"
        height="15"
      />
      <rect
        x="108.3"
        y="83.6"
        className="vis-graphic--fill vis-graphic--fill-c"
        width="15"
        height="15"
      />
      <rect
        x="125"
        y="54"
        className="vis-graphic--fill vis-graphic--fill-c"
        width="15"
        height="15"
      />
      <rect
        x="123.2"
        y="111"
        className="vis-graphic--fill vis-graphic--fill-c"
        width="15"
        height="15"
      />
      <polygon
        className="vis-graphic--fill vis-graphic--fill-a"
        points="49.5,68.6 42,81.4 57,81.4 "
      />
      <polygon
        className="vis-graphic--fill vis-graphic--fill-a"
        points="61.1,25.7 53.6,38.6 68.6,38.6 "
      />
      <polygon
        className="vis-graphic--fill vis-graphic--fill-a"
        points="93.8,19.2 86.3,32.2 101.3,32.2 "
      />
      <polygon
        className="vis-graphic--fill vis-graphic--fill-a"
        points="78.8,47.5 71.3,60.5 86.3,60.5 "
      />
    </svg>
  </div>
)

export default register => {
  register({
    type: 'scatter',
    name: 'Scatter',
    graphic: icon,
    initial: {
      type: 'scatter',
      shape: 'chronograf-v2',

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

      colors: NINETEEN_EIGHTY_FOUR,
      note: '',
      showNoteWhenEmpty: false,
      fillColumns: null,
      symbolColumns: null,
      xColumn: null,
      xDomain: null,
      yColumn: null,
      yDomain: null,
      xAxisLabel: '',
      yAxisLabel: '',
      xPrefix: '',
      xSuffix: '',
      yPrefix: '',
      ySuffix: '',
    } as ScatterViewProperties,
  })
}
