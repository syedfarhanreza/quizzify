import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './Statistics.css'
const Statistics = () => {
    const stats = useLoaderData();
    return (
        <ResponsiveContainer width="auto" height="auto">
        <div>
            <h1 className='stats-header'>Quiz Charts</h1>
            <div className='chart'>
                <LineChart width={500} height={300} data={stats.data}>
                    <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip></Tooltip>
                </LineChart>
            </div>
        </div>
        </ResponsiveContainer>
    );
};

export default Statistics;