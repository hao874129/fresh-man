import React from 'react'
import PropTypes from 'prop-types'

// material UI
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

// CSS
import '../../assets/css/studyCard.css'

// Photo components
import StudyCardFoto from './common/StudyCardFoto'

export default function University({ special }) {
  return (
    <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box className="study_card study_card_University1">
        <Typography variant="h1" className='study_card_part_name' style={{marginRight:"-15%"}}>{special.IM.major}</Typography>
        <div className="study_card_inner">
          <div className='study_card_item'>
            <StudyCardFoto cardNum={'card1'} />
            <Typography variant="h6" className='study_card_title'>{special.IM.bro[0]}</Typography>
          </div>
          <div className='study_card_item'>
            <StudyCardFoto cardNum={'card2'} />
            <Typography variant="h6" className='study_card_title'>{special.IM.bro[1]}</Typography>
          </div>
        </div>
      </Box>
      <Box className="study_card study_card_University2">
        <Typography variant="h1" className='study_card_part_name' style={{marginLeft:"-15%"}}>{special.basketball.major}</Typography>
        <div className="study_card_inner">
          <div className='study_card_item'>
            <StudyCardFoto cardNum={'card3'} />
            <Typography variant="h6" className='study_card_title'>{special.basketball.awards[0]}</Typography>
          </div>
          <div className='study_card_item'>
            <StudyCardFoto cardNum={'card4'} />
            <Typography variant="h6" className='study_card_title'>{special.basketball.awards[1]}</Typography>
          </div>
        </div>
      </Box>
      <Box className="study_card study_card_University3">
        <Typography variant="h1" className='study_card_part_name' style={{marginRight:"-15%"}}>{special.hotDacnceClub.major}</Typography>
        <div className="study_card_inner">
          <div className='study_card_item'>
            <StudyCardFoto cardNum={'card5'} />
            <Typography variant="h6" className='study_card_title'>{special.hotDacnceClub.bro[0]}</Typography>
          </div>
          <div className='study_card_item'>
            <StudyCardFoto cardNum={'card6'} />
            <Typography variant="h6" className='study_card_title'>{special.hotDacnceClub.bro[1]}</Typography>
          </div>
        </div>
      </Box>
    </Box>
  )
}

University.propTypes = {
  special: PropTypes.object
}