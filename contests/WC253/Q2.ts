import { MaxPriorityQueue } from '@datastructures-js/priority-queue'

function minStoneSum(piles: number[], k: number): number {
  const que = new MaxPriorityQueue<number>({ priority: (x) => x })
  piles.forEach((p) => que.enqueue(p))
  ;[...Array(k)].forEach((_) => {
    const { element } = que.dequeue()
    que.enqueue(Math.ceil(element / 2))
  })

  let sum = 0
  while (!que.isEmpty()) {
    const { element } = que.dequeue()
    sum += element
  }
  return sum
}
