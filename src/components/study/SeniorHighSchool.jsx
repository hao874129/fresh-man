import React from 'react'
import PropTypes from 'prop-types'

// material UI
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

// CSS
import '../../assets/css/studyCard.css'

// Photo components
import StudyCardFoto from './common/StudyCardFoto'

export default function SeniorHighSchool({ special }) {
  return (
    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box className="study_card study_card_SeniorHighSchool1">
        <Typography variant="h1" className='study_card_part_name' style={{marginRight:"-15%"}}>{special.information.name}</Typography>
        <div className="study_card_inner">
          <div className='study_card_item'>
            <StudyCardFoto cardNum={'card7'} />
            <Typography variant="h6" className='study_card_title'>{special.information.major[0]}</Typography>
          </div>
        </div>
      </Box>
      <Box className="study_card study_card_SeniorHighSchool2">
        <Typography variant="h1" className='study_card_part_name' style={{marginLeft:"-15%"}}>{special.scouts.name}</Typography>
        <div className="study_card_inner">
          <div className='study_card_item'>
            <StudyCardFoto cardNum={'card8'} />
            <Typography variant="h6" className='study_card_title'>{special.scouts.position[0]}</Typography>
          </div>
        </div>
      </Box>
    </Box>
  )
}

SeniorHighSchool.propTypes = {
  special: PropTypes.object
}