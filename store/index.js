const STORAGE_NAME = 'vuex_data'
const storageData = localStorage.getItem(STORAGE_NAME)

// 絶対に引数を入れておく()
export const state = () => storageData ? JSON.parse(storageData) : {
  memoList: []
}

export const getters = {
  memoData(state) {
    return index => state.memoList[index]
  }
}

export const plugins = [
  (store) => {
    store.subscribe(() => {
      localStorage.setItem(STORAGE_NAME, JSON.stringify(store.state))
    })
  }
]
// 第一引数は上のstate, 第二引数は今から入れるもの
export const mutations = {
  addMemo(state, memo) {
    state.memoList = [
      ...state.memoList,
      memo
    ]
  },
  reduceMemo(state, index) {
    console.log(index)
    state.memoList = [...this.state.memoList]
    console.log(state.memeList, 'concon')
    state.memoList.splice(index, 1)
  },
  startDrag(state, { x, y, index }) {
    console.log(x, y, index)
    console.log(state.memoList[index], 'memomemo')
    this.draggingIndex = index
    this.prevX = x
    this.prevY = y
    console.log(this.prevY, 'YYY')
  },
  moveDrag(state, e) {
    if (this.draggingIndex === null) return
    const x = e.pageX
    const y = e.pageY
    const target = { ...state.memoList[this.draggingIndex] }
    target.left += x - this.prevX
    target.toppo += y - this.prevY

    state.memoList = [...state.memoList]
    state.memoList[this.draggingIndex] = target

    this.prevX = x
    this.prevY = y
  },
  stopDrag() {
    this.draggingIndex = null
  },
  red(state, index) {
    console.log('YYYYYYYYYYYYYY')
    state.memoList = [...state.memoList]
    const target = { ...state.memoList[index] }
    // target.backgroundColor = '#CC3366'
    state.memoList[index].backgroundColor = '#CC3366'
    console.log(target)
    // state.memoList[this.index] = target
    // target.back = back
    // state.memoList[index].back = target.back
  },
  updateText(state, { index, text }) {
    state.memoList = [...state.memoList]
    state.memoList[index] = {
      ...state.memoList[index],
      text
    }
  }
}
