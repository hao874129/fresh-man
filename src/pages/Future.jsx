import useZustandStore from '../components/future/useZustandStore'

function Short() {
  const short = useZustandStore((state) => state.short)
  return (
    <ul>
      <ClickShort />
      {short.map(item => (
        <li key={item.id}>
          {item.content}
        </li>
      ))}
    </ul>
  )
}

function Med() {
  const med = useZustandStore((state) => state.med)
  return (
    <ul>
      <ClickMed />
      {med.map(item => (
        <li key={item.id}>
          {item.content}
        </li>
      ))}
    </ul>
  )
}

function Long() {
  const long = useZustandStore((state) => state.long)
  return (
    <ul>
      <ClickLong />
      {long.map(item => (
        <li key={item.id}>
          {item.content}
        </li>
      ))}
    </ul>
  )
}

function ClickShort() {
  const clickShort = useZustandStore((state) => state.clickShort)
  return <button onClick={clickShort}>ClickShort</button>
}

function ClickMed() {
  const clickMed = useZustandStore((state) => state.clickMed)
  return <button onClick={clickMed}>ClickMed</button>
}

function ClickLong() {
  const clickLong = useZustandStore((state) => state.clickLong)
  return <button onClick={clickLong}>ClickLong</button>
}

function App() {
  return (
    <div>
      <div style={{ 'display': 'flex' }}>
        <Short/>
        <Med/>
        <Long/>
      </div>
    </div>
  )
}

export default App