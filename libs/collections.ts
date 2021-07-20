// __________
//
type LinkedNode<T> = {
  prev: LinkedNode<T> | null
  next: LinkedNode<T> | null
  data: T
}

class Deque<T> {
  private lastNode: LinkedNode<T> | null = null
  private firstNode: LinkedNode<T> | null = null
  private _length: number = 0

  constructor(arr: T[]) {
    arr.forEach((data) => this.pushLast(data))
  }

  get length() {
    return this._length
  }

  pushLast(data: T) {
    this._length++
    if (this.lastNode === null) {
      this.lastNode = {
        data,
        prev: null,
        next: null,
      }
      this.firstNode = this.lastNode
    } else {
      this.lastNode.next = {
        data,
        prev: this.lastNode,
        next: null,
      }
      this.lastNode = this.lastNode.next
    }
  }
  pushFirst(data: T) {
    this._length++
    if (this.firstNode === null) {
      this.lastNode = {
        data,
        prev: null,
        next: null,
      }
      this.firstNode = this.lastNode
    } else {
      this.firstNode.prev = {
        data,
        prev: null,
        next: this.firstNode,
      }
      this.firstNode = this.firstNode.prev
    }
  }
  popLast(): T {
    if (this.lastNode === null) throw Error()
    this._length--

    const result = this.lastNode.data
    this.lastNode = this.lastNode.prev
    if (this.lastNode) this.lastNode.next = null

    return result
  }
  popFirst(): T {
    if (this.firstNode === null) throw Error()
    this._length--

    const result = this.firstNode.data
    this.firstNode = this.firstNode.next
    if (this.firstNode) this.firstNode.prev = null

    return result
  }
  getLast(index = 0) {
    if (this._length <= index) throw Error()

    let node = this.lastNode
    for (let i = 0; i < index; i++) {
      node = node?.prev as LinkedNode<T>
    }
    return node?.data as T
  }
  getFirst(index = 0) {
    if (this._length <= index) throw Error()

    let node = this.firstNode
    for (let i = 0; i < index; i++) {
      node = node?.next as LinkedNode<T>
    }
    return node?.data as T
  }
}

export { Deque }
