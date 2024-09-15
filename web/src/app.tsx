import { useEffect, useState } from 'react'

import { Dialog } from './components/ui/dialog'
import { CreateGoal } from './components/create-goal'
import { Summary } from './components/summary'
import { EmptyGoal } from './components/empyt-goal'
import { useQuery } from '@tanstack/react-query'
import { getSummary } from './http/get-summary'
// import { EmptyGoal } from './components/empyt-goal'

export function App() {
  const { data } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 1000 * 60,
  })

  return (
    <Dialog>
      {data?.total && data.total > 0 ? <Summary /> : <EmptyGoal />}

      <CreateGoal />
    </Dialog>
  )
}
