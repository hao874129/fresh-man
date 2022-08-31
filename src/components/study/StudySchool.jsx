import { useParams } from "react-router-dom"
import { getSchool } from "./StudySchoolData"

// material UI
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

// Card
import StudyCard from './StudyCard'
// import React, { Suspense } from 'react'
// const StudyCard = React.lazy(() => import('./StudyCard'))

export default function Invoice() {
  let params = useParams()
  let school = getSchool(parseInt(params.StudySchoolId, 10))
  // 把在雲科的經歷特別抽出來 (資管、熱舞社)
  if (school.graduated === 2021) {
    const special = school.special
    return (
      <Box style={{ padding: "1rem", 'zIndex': 2 }}>
        <Box style={{ marginBottom: '100px' }}>
          <Typography variant="h3" style={{ marginBottom: '8px' }}> {school.name} </Typography>
          <Typography variant="subtitle2" style={{ color: '#d1dddb' }}> {school.year} </Typography>
        </Box>
        {/* <div>
          <Suspense fallback={<div>Loading...</div>}>
            <StudyCard special={special} />
          </Suspense>
        </div> */}
        <StudyCard special={special} />
      </Box>
    )
  }
  return (
    <Box style={{ padding: "1rem" }}>
      <Typography variant="h3" style={{ marginBottom: '8px' }}> {school.name} </Typography>
      <Typography variant="subtitle2" style={{ color: '#d1dddb' }}> {school.year} </Typography>
    </Box>
  )
}