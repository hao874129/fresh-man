// vertical-timeline
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
// material ui
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
// proptypes
import PropTypes from 'prop-types'
// picture
import Avatar from '@mui/material/Avatar'
import yile1 from '../../assets/images/yile1.jpg'
import yile2 from '../../assets/images/yile2.jpg'


export default function Yile(props) {
  const contents = props.contents
  const contentRender = contents.map(content => {
    let src = (() => {
      if (content.num === 1) {
        return yile1
      } else if (content.num === 2) {
        return yile2
      } else if (content.num === 3) {
        return yile1
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
        icon={<i className={`fa fa-${content.num} fa-2x`} style={{ color: "#FFF" }} />}
      >
        <Box sx={{ display: "flex", justifyContent: "center", marginBottom: '20px' }}>
          <Avatar
            alt="EN"
            src={src}
            sx={{ width: '95%', height: 'auto' }}
            variant="rounded"
          />
        </Box>
        <Typography variant="h3" style={{ color: "#374157" }}>
          {`${content.what}`}
        </Typography>
        <Typography variant="subtitle2" style={{ color: "#ADAEAA" }}>
          {`${content.when}`}
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