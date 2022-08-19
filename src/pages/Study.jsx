import {
  NavLink,
  Outlet,
  useSearchParams,
} from "react-router-dom"
import { getSchools } from "../components/study/StudySchoolData"

export default function App() {
  let Schools = getSchools()
  // useSearchParams 用來在 input 內搜尋想要的學習階段
  let [searchParams, setSearchParams] = useSearchParams()
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        <input
          value={searchParams.get("filter") || ""}
          onChange={(event) => {
            let filter = event.target.value
            if (filter) {
              setSearchParams({ filter })
            } else {
              setSearchParams({})
            }
          }}
        />
        {Schools
          .filter((School) => {
            let filter = searchParams.get("filter")
            if (!filter) return true
            let type = School.type.toLowerCase()
            return type.startsWith(filter.toLowerCase())
          })
          .map((School) => (
            <NavLink
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "red" : "",
                }
              }}
              to={`${School.graduated}`}
              key={School.graduated}
            >
              {School.type}
            </NavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  )
}