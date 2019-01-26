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
  // minusMemo(state, memo) {
  //   state.memoList = [
  //     ...state.memoList,
  //     memo
  //   ]
  // },
  updateText(state, { index, text }) {
    state.memoList = [...state.memoList]
    state.memoList[index] = {
      ...state.memoList[index],
      text
    }
  }
}