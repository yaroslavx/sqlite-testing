import Plot from 'react-plotly.js';
import { memo, useContext } from 'react';
import { arrTo3DArray } from '../../utils/arrayUtils';
import { DataFromBackContext } from '../../shared/DataContext';
import { TDataContext } from '../../types/@types.data';

type Props = {
    data?: number[]
    cmin: number
    cmax: number
}

const layout = {
    title: {
        text: '',
    },
    scene: {
        aspectratio: {
            x: 1.5,
            y: 1.5,
            z: 1.2,
        },
        xaxis: { nticks: 5 },
        yaxis: { nticks: 5 },
        zaxis: { nticks: 4 },
        camera: {
            projection: { type: 'orthographic' },
            eye: {
                x: -3,
                y: -2.2,
                z: 1,
            },
        },
    },
}


export const PlotComponent = memo(({ data, cmin, cmax }: Props) => {
    console.log('render plot')

    return (
        <>
            {data && <>
                <Plot
                    data={[
                        {
                            type: 'volume',
                            flatshading: true,
                            lighting: {
                                facenormalsepsilon: 0,
                            },
                            colorbar: {
                                dtick: 25,
                                len: 1,
                                title: 'Магн. индукция, Гс',

                            },

                            colorscale: [
                                [0, 'rgb(49,54,149)'],
                                [0.1, 'rgb(69,117,180)'],
                                [0.2, 'rgb(116,173,209)'],
                                [0.3, 'rgb(171,217,233)'],
                                [0.4, 'rgb(224,243,248)'],
                                [0.5, 'rgb(254,224,144)'],
                                [0.6, 'rgb(253,174,97)'],
                                [0.7, 'rgb(244,109,67)'],
                                [0.8, 'rgb(215,48,39)'],
                                [1, 'rgb(165,0,38)'],
                            ],
                            // @ts-ignore
                            cmin: cmin,
                            cmax: cmax,
                            reversescale: false,
                            opacityscale: [
                                [0.0, 0.5],
                                [0.2, 0.5],
                                [0.35, 0.5],
                                [0.5, 0.5],
                                [0.65, 0.5],
                                [0.8, 0.5],
                                [1.0, 0.5],
                            ],
                            opacity: 1,
                            surface: { show: true, fill: 1.0, count: 64 },
                            spaceframe: { show: true, fill: 1.0 },
                            slices: {
                                x: { show: true },
                                y: { show: true },
                                z: { show: true },
                            },
                            caps: {
                                x: { show: true, fill: 1.0 },
                                y: { show: true, fill: 1.0 },
                                z: { show: true, fill: 1.0 },
                            },
                            value: data,
                            x: [
                                1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5,

                                1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5,

                                1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5,

                                1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5,
                            ],
                            y: [
                                5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1,

                                5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1,

                                5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1,

                                5, 5, 5, 5, 5, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1,
                            ],
                            z: [
                                4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
                                4, 4, 4,

                                3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
                                3, 3, 3, 3, 3, 3, 3, 3, 3,

                                2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                                2, 2, 2, 2, 2, 2, 2, 2, 2,

                                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                            ],
                        },
                    ]}
                    layout={layout}
                    useResizeHandler
                    style={{ width: '100%', height: '100%' }}
                    config={{
                        displaylogo: false,
                        displayModeBar: false,
                        responsive: true,
                    }}


                />
            </>}
        </>

    )
})

