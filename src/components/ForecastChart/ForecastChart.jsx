import React from 'react'
//======> COMPONENTS 
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts'
//======> CSS
import './ForecastChart.styles.css'

const ForecastChart = ({data}) => {
    return (
        <div className="graph-chart">
            <LineChart 
                height={250}
                width={full}
                margin={{top: 20, bottom: 20, left:10, right: 10}}
                data={data}
            >
                <XAxis dataKey="dayHour"></XAxis>
                <YAxis></YAxis>
                <CartesianGrid></CartesianGrid>
                <ToolTip></ToolTip>
                <Legend></Legend>
                <Line type="monotone" dataKey="min" stroke="#ff3f34" />
                <Line type="monotone" dataKey="min" stroke="#1B9CFC" />
            </LineChart>
        </div>
    )
}

export default ForecastChart
