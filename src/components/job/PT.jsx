// vertical-timeline
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'

// 照片
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import lihpao from '../../assets/images/lihpao.jpg'
import army from '../../assets/images/armys.jpg'
import yuntech from '../../assets/images/yuntech.jpeg'

export default function Yile(props) {
  const contents = props.contents
  const contentRender = contents.map(content => {
    // 抓圖片的路徑
    let src = (() => {
      if (content.src === 'lihpao') {
        return lihpao
      } else if (content.src === 'yuntech') {
        return yuntech
      } else if (content.src === 'army') {
        return army
      }
    })()
    return (
      <VerticalTimelineElement
        key={content.num}
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#F2F0ED", color: "#d1dddb" }}
        contentArrowStyle={{ borderRight: '7px solid  #F2F0ED' }}
        date={`${content.when}`}
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


Yile.propTypes = {
  contents: PropTypes.array
}