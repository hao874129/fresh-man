import { useCallback, useState } from "react"
import PropTypes from 'prop-types'

function Content({ work }) {
  switch (work.type) {
    case 'default':
      return (
        <h2> 工作經歷 !!!  </h2>
      )
    case 'FT':
      return (
        <h1> {work.content} </h1>
      )
    case 'PT':
      return (
        <ul>
          {work.content.map(item => (
            <li key={item.what}>
              what: {item.what} <br />
              where: {item.where} <br />
              when: {item.when}
            </li>
          ))}
        </ul>
      )
    case 'YL':
      return (
        <ul>
          {work.content.map(item => (
            <li key={item.what}>
              what: {item.what} <br />
              when: {item.when}
            </li>
          ))}
        </ul>
      )
  }
}

Content.propTypes = {
  work: PropTypes.object
}

function App() {
  const [work, setWork] = useState({ type: "default" })
  const clickFT = useCallback(
    () => {
      setWork({
        type: "FT",
        content: "  "
      })
    }
  )

  const clickPT = useCallback(
    () => {
      setWork({
        type: "PT",
        content: [
          {
            what: '水輔員',
            when: '高中畢業',
            where: '麗寶 (馬拉灣)'
          },
          {
            what: '研究助理',
            when: '大三 ~ 大四',
            where: '雲科大 & 台師大'
          },
          {
            what: '機槍兵',
            when: '大四畢業後',
            where: '國軍 - 嘉義中坑'
          }
        ]
      })
    }
  )

  const clickYL = useCallback(
    () => {
      setWork({
        type: "YL",
        content: [
          {
            // 薪水小偷
            what: '學習套件',
            when: '第一個月',
          },
          {
            // 薪水大倫
            what: '實作新人報告',
            when: '第二個月',
          },
          {
            // 開始有產出
            what: '進產線實作',
            when: '第三個月',
          }
        ]
      })
    }
  )

  return (
    <div>
      <div style={{ display: "flex", padding: '1rem 0', gap: '10px 20px' }}>
        <button onClick={clickFT} >正職經歷</button>
        <button onClick={clickPT} >工讀經歷</button>
        <button onClick={clickYL} >在弈樂期間</button>
      </div>
      <div style={{ padding: "1rem 0" }}>
        <Content work={work} />
      </div>
    </div>

  )
}

export default App