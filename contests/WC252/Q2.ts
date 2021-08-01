function numberOfWeeks(milestones: number[]): number {
  const sortedMilestones = milestones.sort((a, b) => a - b)

  const rSum =
    sortedMilestones.reduce((sum, milestone) => sum + milestone) -
    sortedMilestones[0]

  return Math.min(rSum + sortedMilestones[0], rSum * 2 + 1)
}
