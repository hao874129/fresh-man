import React, { useEffect } from "react"
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

import { useCallback, useState } from "react"
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'

//Yile
import YL from '../components/job/YL'

// Part Time
import PT from '../components/job/PT'

// RCSL
import RCSL from '../components/job/RCSL'

// button style
import '../assets/css/job.css'

function Content({ work }) {
  switch (work.type) {
    // case 'default':
    //   return (
    //     <div>
    //       <React.Fragment>
    //         <Container maxWidth="xl" sx={{ position: "relative", padding: "10vh 0 40vh 0" }}>
    //           <Box className="animate__animated animate__shakeY">
    //             <Box sx={{ borderRadius: '2px', bgcolor: '#374157' }}
    //               style={{ "boxShadow": '3px 3px 8px 2px #5f6d89', padding: '150px 250px' }}>
    //               <div className="animate__animated animate__flip">
    //                 <Typography variant="h2" style={{ color: "#d1dddb" }}>
    //                   請點 button !!
    //                 </Typography>
    //               </div>
    //             </Box>
    //           </Box>
    //         </Container>
    //       </React.Fragment >
    //     </div>
    //   )
    case 'YL':
      return (
        <div>
          <YL contents={work.contents} />
        </div>
      )
    case 'RCSL':
      return (
        <div>
          <RCSL contents={work.contents} />
        </div>
      )
    case 'PT':
      return (
        <div>
          <PT contents={work.contents} />
        </div>
      )
  }
}

Content.propTypes = {
  work: PropTypes.object
}

function Job() {
  const [work, setWork] = useState({ type: "FT" })

  const clickYL = useCallback(
    () => {
      setWork({
        type: "YL",
        contents: [
          {
            num: 1,
            what: '學習 React',
            when: '1st Month',
            period: 'Jul 2022 - Aug 2022',
            detail: '學習前端開發常用框架及套件：React、Material UI、Zustand、clsx、immer ...等等'
          },
          {
            num: 2,
            what: '熟悉開發流程',
            when: '2nd Month',
            period: 'Aug 2022 - Sep 2022',
            detail: '熟悉團隊開發模式：檔案配置方式, git flow, JIRA ...等等'
          },
          {
            num: 3,
            what: '參與開發',
            when: '3rd Month',
            period: 'Sep 2022 - Oct 2022',
            detail: '進團隊產線並參與開發實作：開發官網及後台相關需求'
          }
        ]
      })
    }
  )

  const clickRCSL = useCallback(
    () => {
      setWork({
        type: "RCSL",
        contents: [
          {
            num: 1,
            where: '雲科大智慧學習研究中心',
            what: '研究助理',
            period: 'Sep 2020 - Jul 2021',
            icon: 'robot',
            detail: '協助陳年興教授與科技部合作的研究專案之進行。'
          },
          {
            num: 2,
            where: '臺師大產學合作計畫(科技部)',
            what: '研究助理',
            period: 'Aug 2021 - Dec 2021',
            icon: 'robot',
            detail: '結合語言學習機器人、平板電腦與物聯網玩具(例:掃描槍、卡牌、實體玩具),建置沈浸式語言學習環境。'
          }
        ]
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
            detail: '水上樂園遊樂設施站點、與遊客互動',
            src: 'lihpao'
          },
          {
            num: 2,
            what: '行政工讀',
            when: 'Jul 2019 - Aug 2020',
            where: '雲科大學務處',
            icon: 'book',
            detail: '處理行政事務、資料的整理與查核',
            src: 'yuntech'
          },
          {
            num: 3,
            what: '機槍兵',
            when: 'Feb 2022 - May 2022',
            where: '國軍',
            icon: 'gun',
            detail: '學習用機槍和掃把',
            src: 'army'
          }
        ]
      })
    }
  )

  useEffect(() => {
    console.log('render')
    clickYL()
  }, [])

  return (
    <div>
      <div className="animate__animated animate__bounceIn job_div"
        style={{ display: "flex", justifyContent: 'center', paddingTop: '200px', gap: '10px 50px' }}>
        <a onClick={clickYL} className="job_Btn">
          <Typography variant="subtitle" className="job_Text">Text</Typography>
          <Typography variant="subtitle" className="flip-front">弈樂科技</Typography>
          <Typography variant="subtitle" className="flip-back">Yile</Typography>
        </a>
        <a onClick={clickRCSL} className="job_Btn">
          <Typography variant="subtitle" className="job_Text">Text</Typography>
          <Typography variant="subtitle" className="flip-front">智慧學習研究</Typography>
          <Typography variant="subtitle" className="flip-back">RCSL</Typography>
        </a>
        <a onClick={clickPT} className="job_Btn">
          <Typography variant="subtitle" className="job_Text">Text</Typography>
          <Typography variant="subtitle" className="flip-front">工讀經歷</Typography>
          <Typography variant="subtitle" className="flip-back">Part-time</Typography>
        </a>
      </div>
      <div style={{ padding: "1rem 0" }}>
        {/* <Content work={work} /> */}
        <div>
          <React.Fragment>
            <Container maxWidth="xl" sx={{ position: "relative", padding: "10vh 0 20vh 0" }}>
              <Box>
                <Box sx={{ borderRadius: '2px', bgcolor: '#374157' }}
                  style={{ "boxShadow": '3px 3px 8px 2px #5f6d89', padding: '150px 250px' }}>
                  <Content work={work} />
                </Box>
              </Box>
            </Container>
          </React.Fragment >
        </div>
      </div>
    </div >
  )
}

export default Job