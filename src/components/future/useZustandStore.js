import create from 'zustand'

const useZustandStore = create((set) => ({
  short: [
    { id: 's1', content: "認識公司的全部人" },
    { id: 's2', content: "精進前端技術(React...)" },
    { id: 's3', content: "籃球學會左手切入" },
    { id: 's4', content: "交女友" }
  ],
  med: [
    { id: 'm1', content: "精進英文能力" },
    { id: 'm2', content: "具備獨立完成專案的能力" }
  ],
  long: [
    { id: 'l1', content: "財富自由" },
    { id: 'l2', content: "衣錦還鄉" },
    // { id: 10, content: "選里長" }
  ],
  clickShort: () => {
    return set((state) => {
      const target = state.short.find(target => target.id === 's4')
      if (!target) {
      console.log('****useZustandStore_clickShort: short中id=s4的物件已經不見了')
        return
      }
      let newShort = [...state.short]
      let newMed = [...state.med]
      // 短程 -1 資料 ， 並將此資料塞進中程
      newShort = newShort.filter(item => item !== target)
      newMed.unshift(target)
      console.log(':::useZustandStore_clickShort_newShort: ', newShort)
      console.log(':::useZustandStore_clickShort_newMed: ', newMed)
      return {
        short: newShort,
        med: newMed
      }
    })
  },
  clickMed: () => {
    return set((state) => {
      const target = state.med.find(target => target.id === 's4')
      if (!target) {
      console.log('****useZustandStore_clickMed: med中id=s4的物件已經不見了')
        return
      }
      let newMed = [...state.med]
      let newLong = [...state.long]
      // 中程 -1 資料 ， 並將此資料塞進長程
      newMed = newMed.filter(item => item !== target)
      newLong.unshift(target)
      console.log(':::useZustandStore_clickMed_newMed: ', newMed)
      console.log(':::useZustandStore_clickMed_newLong: ', newLong)
      return {
        med: newMed,
        long: newLong
      }
    })
  },
  clickLong: () => {
    return set(state => {
      if (state.long.length >= 4) {
        console.log('****useZustandStore_clickLong: Long長度大於4,不執行')
        return
      }
      // 將 long 陣列 push出一個 選里長的計畫
      let newLong = [...state.long]
      newLong.push({ id: 10, content: "選里長" })
      console.log(':::useZustandStore_clickLong_newLong: ', newLong)
      return {
        long: newLong
      }
    })
  }
}))

export default useZustandStore