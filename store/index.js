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
  changedColor(state, { index, back }) {
    console.log('YYYYYYYYYYYYYY')
    console.log(back)
    console.log(index, 'js index')
    state.memoList = [...state.memoList]
    state.memoList[index] = {
      ...state.memoList[index],
      back
    }
  },
  updateText(state, { index, text }) {
    state.memoList = [...state.memoList]
    state.memoList[index] = {
      ...state.memoList[index],
      text
    }
  },
  updateZindex(state, index) {
    const a = Math.max.apply(null, state.memoList.map(p => p.zIndex))
    const x = state.memoList[index].zIndex = a + 1
    state.memoList = [...state.memoList]
    state.memoList[index] = {
      ...state.memoList[index],
      zIndex: x
    }
  }
}
