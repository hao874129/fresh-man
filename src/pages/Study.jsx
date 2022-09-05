import {
  NavLink,
  Outlet,
} from "react-router-dom"
import { getSchools } from "../components/study/StudySchoolData"

// Study style
import '../assets/css/study.css'

import Typography from '@mui/material/Typography'

export default function App() {
  let Schools = getSchools()
  let School = Schools
    .map((School) => (
      <NavLink
        style={({ isActive }) => {
          return {
            textDecoration: 'none',
            display: "block",
            margin: "1rem 0",
            color: isActive ? "#7f8fb0" : "#374157",
          }
        }}
        to={`/Study/${School.graduated}`}
        key={School.graduated}
        className="study_btn study_btn4"
      ><Typography variant="subtitle2" className="study_Text">{School.type}</Typography>
        <Typography variant="subtitle2" className="study_left"></Typography>
        <Typography variant="subtitle2" className="study_right"></Typography>
      </NavLink>
    ))
  return (
    <div style={{ display: "flex", padding: "200px 50px", justifyContent: "center", minHeight: '100vh' }}>
      <nav
        style={{
          padding: "0 75px 0 0",
          maxWidth: '25%',
        }}
      >
        <div className="study_buttons">
          {School}
        </div>
      </nav>
      <div className="studyBox">
        <div className="study_container button-86">
          <Outlet />
        </div>
      </div>
    </div >
  )
}