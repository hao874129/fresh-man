import useZustandStore from '../components/future/useZustandStore'
import '../assets/css/furture.css'

function Short() {
  const short = useZustandStore((state) => state.short)
  return (
    <div className="future_card">
      <div className="future_face future_face1">
        <div className="future_content">
          <div className="future_icon">
            <i className="fa fa-brands fa-react " aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <div className="future_face future_face2">
        <div className="future_content">
          <h3>
            <ClickShort />
          </h3>
          <ul className='future_ul'>
            {short.map(item => (
              <li key={item.id} className='future_li'>
                {item.content}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function Med() {
  const med = useZustandStore((state) => state.med)
  return (
    <div className="future_card">
      <div className="future_face future_face1">
        <div className="future_content">
          <div className="future_icon">
            <i className="fa fa-solid fa-face-kiss-wink-heart" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <div className="future_face future_face2">
        <div className="future_content">
          <h3>
            <ClickMed />
          </h3>
          <ul className='future_ul'>
            {med.map(item => (
              <li key={item.id} className='future_li'>
                {item.content}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function Long() {
  const long = useZustandStore((state) => state.long)
  return (
    <div className="future_card">
      <div className="future_face future_face1">
        <div className="future_content">
          <div className="future_icon">
            <i className="fa fa-solid fa-sack-dollar" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <div className="future_face future_face2">
        <div className="future_content">
          <h3>
            <ClickLong />
          </h3>
          <ul className='future_ul'>
            {long.map(item => (
              <li key={item.id} className='future_li' >
                {item.content}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

function ClickShort() {
  const clickShort = useZustandStore((state) => state.clickShort)
  return <button onClick={clickShort} className='fill'>近程</button>
}

function ClickMed() {
  const clickMed = useZustandStore((state) => state.clickMed)
  return <button onClick={clickMed} className='fill'>中程</button>
}

function ClickLong() {
  const clickLong = useZustandStore((state) => state.clickLong)
  return <button onClick={clickLong} className='fill'>遠程</button>
}

function App() {
  return (
    <div>
      <div className="future_container">
        <Short />
        <Med />
        <Long />
      </div>
    </div>
  )
}

export default App