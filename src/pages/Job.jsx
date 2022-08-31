import React from "react"
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

import { useCallback, useState } from "react"
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'

//Yile
import YL from '../components/job/YL'

// Part Time
import PT from '../components/job/PT'

// button style
import '../assets/css/job.css'

function Content({ work }) {
  switch (work.type) {
    case 'default':
      return (
        <div>
          <React.Fragment>
            <Container maxWidth="xl" sx={{ position: "relative", padding: "10vh 0 40vh 0" }}>
              <Box className="animate__animated animate__shakeY">
                <Box sx={{ borderRadius: '2px', bgcolor: '#374157' }}
                  style={{ "boxShadow": '3px 3px 8px 2px #5f6d89', padding: '150px 250px' }}>
                  <div className="animate__animated animate__flip">
                    <Typography variant="h2" style={{ color: "#d1dddb" }}>
                      請點 button !!
                    </Typography>
                  </div>
                </Box>
              </Box>
            </Container>
          </React.Fragment >
        </div>
      )
    case 'FT':
      return (
        <div>
          <React.Fragment>
            <Container maxWidth="xl" sx={{ position: "relative", padding: "10vh 0 40vh 0" }}>
              <Box>
                <Box sx={{ borderRadius: '2px', bgcolor: '#374157' }}
                  style={{ "boxShadow": '3px 3px 8px 2px #5f6d89', padding: '150px 250px' }}>
                  <div>
                    <Typography variant="subtitle" style={{ color: "#d1dddb" }}>
                      null
                    </Typography>
                  </div>
                </Box>
              </Box>
            </Container>
          </React.Fragment >
        </div>
      )
    case 'PT':
      return (
        <div>
          <React.Fragment>
            <Container maxWidth="xl" sx={{ position: "relative", padding: "10vh 0 20vh 0" }}>
              <Box>
                <Box sx={{ borderRadius: '2px', bgcolor: '#374157' }}
                  style={{ "boxShadow": '3px 3px 8px 2px #5f6d89', padding: '150px 250px' }}>
                  <div>
                    <PT contents={work.contents} />
                  </div>
                </Box>
              </Box>
            </Container>
          </React.Fragment >
        </div>
      )
    case 'YL':
      return (
        <div>
          <React.Fragment>
            <Container maxWidth="xl" sx={{ position: "relative", padding: "10vh 0 20vh 0" }}>
              <Box>
                <Box sx={{ borderRadius: '2px', bgcolor: '#374157' }}
                  style={{ "boxShadow": '3px 3px 8px 2px #5f6d89', padding: '150px 250px' }}>
                  <div>
                    <YL contents={work.contents} />
                  </div>
                </Box>
              </Box>
            </Container>
          </React.Fragment >
        </div>
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
        contents: "  "
      })
    }
  )

  const clickPT = useCallback(
    () => {
      setWork({
        type: "PT",
        contents: [
          {
            num: 1,
            what: '水輔員',
            when: 'Jun 2017 - Sep 2017',
            where: '麗寶樂園 (馬拉灣)',
            icon: 'shower',
            detail: '滑水道上面推別人下去的那個',
            src: 'lihpao'
          },
          {
            num: 2,
            what: '研究助理',
            when: 'Sep 2020 - Dec 2021',
            where: 'RCSL (雲科大 & 台師大)',
            icon: 'robot',
            detail: '透過 Kebbi 機器人與平板電腦做為學習用裝置',
            src: 'robot'
          },
          {
            num: 3,
            what: '機槍兵',
            when: 'Feb 2022 - May 2022',
            where: '國軍(嘉義中坑257旅)',
            icon: 'gun',
            detail: '學習用機槍和掃把',
            src: 'army'
          }
        ]
      })
    }
  )

  const clickYL = useCallback(
    () => {
      setWork({
        type: "YL",
        contents: [
          {
            // 薪水小偷
            num: 1,
            what: '學習套件',
            when: '1st Month',
            period: 'Jul 2022 - Aug 2022',
            detail: '學習常用套件：React、Material UI、Zustand、clsx、immer ...等等'
          },
          {
            // 薪水大倫
            num: 2,
            what: '實作新人報告',
            when: '2nd Month',
            period: 'Aug 2022 - Sep 2022',
            detail: '實作新人報告網站：也就是大家正在看的這個'
          },
          {
            // 開始有產出
            num: 3,
            what: '進產線',
            when: '3rd Month',
            period: 'Sep 2022 - Oct 2022',
            detail: '進產現實作：幫忙開發及維護一些小功能'
          }
        ]
      })
    }
  )

  return (
    <div>
      <div className="animate__animated animate__bounceIn job_div"
        style={{ display: "flex", justifyContent: 'center', paddingTop: '200px', gap: '10px 50px' }}>
        <a onClick={clickFT} className="job_Btn">
          <Typography variant="subtitle" className="job_Text">Text</Typography>
          <Typography variant="subtitle" className="flip-front">正職經歷</Typography>
          <Typography variant="subtitle" className="flip-back">Full-time</Typography>
        </a>
        <a onClick={clickPT} className="job_Btn">
          <Typography variant="subtitle" className="job_Text">Text</Typography>
          <Typography variant="subtitle" className="flip-front">工讀經歷</Typography>
          <Typography variant="subtitle" className="flip-back">Part-time</Typography>
        </a>
        <a onClick={clickYL} className="job_Btn">
          <Typography variant="subtitle" className="job_Text">Text</Typography>
          <Typography variant="subtitle" className="flip-front">在弈樂期間</Typography>
          <Typography variant="subtitle" className="flip-back">in Yile</Typography>
        </a>
      </div>
      <div style={{ padding: "1rem 0" }}>
        <Content work={work} />
      </div>
    </div >
  )
}

export default App