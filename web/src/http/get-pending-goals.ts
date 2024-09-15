type PendingResponse = {
  id: string
  title: string
  desiredWeeklyFrequency: number
  completionCount: number
}[]

export async function getPendingGoals(): Promise<PendingResponse> {
  const response = await fetch('http://localhost:3333/peding')
  const data = await response.json()
  return data.pendingGoal
}
