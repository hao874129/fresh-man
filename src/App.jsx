// Router 設定
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import RouterLink from './router/RouterLink'

// Animat.css
import 'animate.css'

// 自我介紹
import Self from './pages/Self'

// 學習歷程
import Study from "./pages/Study"
import StudySchool from "./components/study/StudySchool"

// 工作經歷
import Job from "./pages/Job"

// 工作經歷
import Future from "./pages/Future"

// Home
import Home from './pages/Home'

import Typography from '@mui/material/Typography'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RouterLink />}>
            {/* 自我介紹 */}
            <Route path="Self" element={<Self />} />

            {/* 學習歷程 */}
            <Route path="Study" element={<Study />} >
              {/* 點選路由前的預設 */}
              <Route
                index
                element={
                  <main style={{ padding: "1rem" }}>
                    <p> {'請點 button !!'} </p>
                  </main>
                }
              />
              {/*  在 Study中使用 to={`${School.graduated}`}，然後在這邊將 傳入StudySchool的參數 綁上 path  */}
              <Route path=":StudySchoolId" element={<StudySchool />} />
            </Route>

            {/* 工作經歷 */}
            <Route path="Job" element={<Job />} />

            {/* 未來展望 */}
            <Route path="Future" element={<Future />} />

            {/* 錯誤路由 */}
            <Route
              path="*"
              element={
                <Home />
                // <main style={{ padding: "1rem" }}>
                //   <p>{"There's nothing here!"}</p>
                // </main>
              }
            />

            {/* 進入路由前的預設 (home) */}
            <Route
              index
              element={
                <Home />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
      <div style={{backgroundColor: '#374157', padding: '25px 150px', display: 'flex', justifyContent: 'space-between' ,alignItems:"center"}}>
        <div style={{ display: 'flex', justifyContent: 'space-around' ,width:"110px"}}>
          <a href="#" onClick={(e) => (e.preventDefault())}>
            <i className="fab fa-facebook fa-2x" style={{ color: "#d1dddb" }} />
          </a>
          <a href="#" onClick={(e) => (e.preventDefault())}>
            <i className="fab fa-github fa-2x" style={{ color: "#d1dddb" }} />
          </a>
          <a href="#" onClick={(e) => (e.preventDefault())}>
            <i className="fab fa-instagram fa-2x" style={{ color: "#d1dddb" }} />
          </a>
        </div>
        <div style={{ color: "#d1dddb" }}>
          <Typography >© 2022 All Rights Reserved</Typography>
        </div>
      </div >
    </div >
  )
}

export default App
