import React from 'react';
import { Link } from 'react-router-dom';
import { GetData } from './GetData';

const Dashboard = () => {
    return (
        <>
            <h1>Dashboard Page</h1>
            <GetData />
            <Link to="/">Back</Link>
        </>
    );
}

export default Dashboard;