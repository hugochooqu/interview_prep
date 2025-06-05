import Agents from '@/components/Agents'
import React from 'react'
import { getCurrentUser } from '@/lib/actions/auth.actions'


const page = async() => {
  const user = await getCurrentUser()
  return (
    <>
        <h3>Generate Interview</h3>

        <Agents userName={user?.name} userId={user?.id} type="generate" />
    </>
  )
}

export default page