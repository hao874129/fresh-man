// Router 設定
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import RouterLink from './router/RouterLink'

// 自我介紹
import Self from './pages/Self'

// 學習歷程
import Study from "./pages/Study"
import StudySchool from "./components/study/StudySchool"

// 工作經歷
import Job from "./pages/Job"

// 工作經歷
import Future from "./pages/Future"


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
                    <p>Select an School</p>
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
                <main style={{ padding: "1rem" }}>
                  <p>{"There's nothing here!"}</p>
                </main>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
      <div>
        <h1>這裡是FOOTER</h1>
      </div>
    </div>
  )
}

export default App
