import {
  NavLink,
  Outlet,
} from "react-router-dom"
import { getSchools } from "../components/study/StudySchoolData"

// Study style
import '../assets/css/study.css'

export default function App() {
  let Schools = getSchools()
  let School = Schools
    .map((School) => (
      <NavLink
        style={({ isActive }) => {
          return {
            textDecoration: 'none',
            display: "block",
            margin: "2rem 0",
            color: isActive ? "#888f9b" : "#374157",
          }
        }}
        to={`/Study/${School.graduated}`}
        key={School.graduated}
        className="study_btn study_btn4"
      ><span variant="subtitle2" className="study_Text">{School.type}</span>
        <span variant="subtitle2" className="study_left"></span>
        <span variant="subtitle2" className="study_right"></span>
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