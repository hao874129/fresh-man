import React from 'react'

// CSS
import '../../assets/css/studyCardFoto.css'


import PropTypes from 'prop-types'

export default function StudyCard(props) {
  return (
    <div className="study_card_foto_container">
      <div className={`study_card_foto_card study_card_foto_${props.cardNum}`}>
      </div>
    </div>
  )
}

StudyCard.propTypes = {
  cardNum: PropTypes.string
}