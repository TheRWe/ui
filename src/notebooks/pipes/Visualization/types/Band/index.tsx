import React from 'react'

const icon = (
    <div className="vis-graphic" data-testid="vis-graphic--band-chart">
      <svg
        id="Band Chart"
        x="0px"
        y="0px"
        width="100%"
        height="100%"
        viewBox="0 0 150 150"
      >
        <path
          className="vis-graphic--fill vis-graphic--fill-e"
          d="M10,127V52.6v-8c0-1.8,0.8-3.5,2.2-4.6l25-18.3c1.6-1.2,3.7-0.9,5,0.5l24.6,26.9c1.8,1.9,4.5,2.1,6.5,0.5
	L104,23c1.8-1.5,7.1-1.5,8.3,0.6l16.5,27c0.7,1.2,2,1.9,3.3,1.9h7.9v5.5V127H10z"
        />
        <path
          className="vis-graphic--line vis-graphic--line-c"
          d="M39.5,22c0.8,0,1.5,0.3,2.1,1l24.6,26.9c1.1,1.2,2.7,1.9,4.3,1.9c1.3,0,2.6-0.5,3.7-1.3l30.5-26.7
	c0.6-0.5,1.9-0.8,3.3-0.8c1.7,0,3.1,0.5,3.5,1.2l16.5,27c0.9,1.5,2.5,2.4,4.2,2.4h6.9v4.5V126H11V52.6v-8c0-1.5,0.7-2.9,1.8-3.7
	l25-18.3C38.3,22.2,38.9,22,39.5,22 M39.5,21c-0.8,0-1.5,0.2-2.2,0.7L12.2,40c-1.4,1-2.2,2.7-2.2,4.6v8V127h130V58.1v-5.5h-7.9
	c-1.3,0-2.6-0.7-3.3-1.9l-16.5-27c-0.7-1.1-2.5-1.7-4.4-1.7c-1.6,0-3.1,0.4-4,1.1L73.5,49.7c-0.9,0.7-1.9,1.1-3,1.1
	c-1.3,0-2.6-0.5-3.5-1.6L42.3,22.3C41.5,21.4,40.5,21,39.5,21L39.5,21z"
        />
        <path
          className="vis-graphic--line vis-graphic--line-e"
          d="M10,91h0.2c1.2,0,2.4-0.4,3.3-1.2L35.6,71c2-1.7,5-1.6,6.9,0.3L66.6,96c2.1,2.1,5.6,2,7.5-0.3l29.2-34.4
	c2.2-2.6,6.4-2.3,8.2,0.6l15,24.6c0.9,1.5,2.5,2.4,4.3,2.4h9.3"
        />
      </svg>
    </div>
)

export default (register) => {
    register({
        type: 'band',
        name: 'Band Plot',
        graphic: icon,
        featureFlag: 'bandPlotType',
        initial: {
            type: 'xy',
            position: 'overlaid',
            legend: {},
            note: '',
            showNoteWhenEmpty: false,
            axes: {
                x: {
                    bounds: ['', ''],
                    label: '',
                    prefix: '',
                    suffix: '',
                    base: '10',
                    scale: 'linear',
                },
                y: {
                    bounds: ['', ''],
                    label: '',
                    prefix: '',
                    suffix: '',
                    base: '10',
                    scale: 'linear',
                },
            },
            geom: 'line',
            shape: 'chronograf-v2',
        }
    })
}
