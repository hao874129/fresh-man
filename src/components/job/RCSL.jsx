// vertical-timeline
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'

// 照片
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import rcsl1 from '../../assets/images/rcsl1.jpg'
import rcsl2 from '../../assets/images/rcsl2.jpeg'

export default function RCSL(props) {
  const contents = props.contents
  const contentRender = contents.map(content => {
    // 抓圖片的路徑
    let src = (() => {
      if (content.num === 1) {
        return rcsl1
      } else if (content.num === 2) {
        return rcsl2
      }
    })()
    return (
      <VerticalTimelineElement
        key={content.num}
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#F2F0ED", color: "#d1dddb" }}
        contentArrowStyle={{ borderRight: '7px solid  #F2F0ED' }}
        date={`${content.period}`}
        iconStyle={{
          background: "#7f8fb0",
          color: "#7f8fb0",
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        icon={<i className={`fa fa-${content.icon} fa-2x`} style={{ color: "#FFF" }} />}
      >
        <Box sx={{display:"flex",justifyContent:"center" , marginBottom:'20px'}}>
          <Avatar
            alt="EN"
            src={src}
            sx={{width: '95%', height: 'auto'  }}
            variant="rounded"
          />
        </Box>
        <Typography variant="h3" style={{ color: "#374157" }}>
          {`${content.what}`}
        </Typography>
        <Typography variant="subtitle2" style={{ color: "#ADAEAA" }}>
          {`${content.where}`}
        </Typography>
        <Box style={{ padding: "20px 0 " }}>
          <Typography variant="subtitle" style={{ color: "#5f6d89" }}>
            {`${content.detail}`}
          </Typography>
        </Box>
      </VerticalTimelineElement>
    )
  })
  return (
    <VerticalTimeline>
      {contentRender}
    </VerticalTimeline>
  )
}


RCSL.propTypes = {
  contents: PropTypes.array
}