import React from 'react'
import { fetchData } from '../helpers'
import { useLoaderData } from 'react-router-dom';

export function dashboardLoader(){
    const userName = fetchData("userName");
    return { userName }
}

const Dashboard = () => {
    const { userName } = useLoaderData()
  return (
    <>
        <h1>{ userName }</h1>
        <div>Dashboard </div>
    </>
  )
}

export default Dashboard