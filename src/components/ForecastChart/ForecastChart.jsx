import React from 'react'
//======> COMPONENTS 
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'
//======> CSS
import './ForecastChart.styles.css'

const ForecastChart = ({data}) => {
    return (
        <div className="graph-chart">
            <ResponsiveContainer height={250} width={750} >
            <LineChart
                margin={{top: 20, bottom: 20, left:10, right: 10}}
                data={data}
            >
                <XAxis dataKey="dayHour"></XAxis>
                <YAxis></YAxis>
                <CartesianGrid></CartesianGrid>
                <Tooltip></Tooltip>
                <Legend></Legend>
                <Line type="monotone" dataKey="max" stroke="#ff3f34" />
                <Line type="monotone" dataKey="min" stroke="#1B9CFC" />
            </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default ForecastChart
