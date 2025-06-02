import Agents from '@/components/Agents'
import React from 'react'


const page = () => {
  return (
    <>
        <h3>Generate Interview</h3>

        <Agents userName='you' userId="user1" type="generate" />
    </>
  )
}

export default page