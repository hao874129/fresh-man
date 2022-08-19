import { useParams } from "react-router-dom"
import { getSchool } from "./StudySchoolData"

export default function Invoice() {
  let params = useParams()
  let school = getSchool(parseInt(params.StudySchoolId, 10))
  // 把在雲科的經歷特別抽出來 (資管、熱舞社)
  if (school.graduated === 2021) {
    const special = school.special 
    console.log(special)
    return (
      <div style={{ padding: "1rem" }}>
        <h2>{school.name}</h2>
        <p>
          就讀時間: {school.year}
        </p>
        <p>畢業時間: {school.graduated}</p>
        <div>
          <div>
            <h3>{special.IM.major}</h3>
            <h4> 傑出校友 </h4>
            <div>
              <p>1.{special.IM.bro[0]}</p>
              <p>2.{special.IM.bro[1]}</p>
            </div>
          </div>
          <div>
            <h3>{special.basketball.major}</h3>
            <h4> 比賽紀錄 </h4>
            <div >
              <p>1.{special.basketball.awards[0]}</p>
              <p>2.{special.basketball.awards[1]}</p>
            </div>
          </div>
          <div>
            <h3>{special.hotDacnceClub.major}</h3>
            <h4> 傑出學長 </h4>
            <div>
              <p>1.{special.hotDacnceClub.bro[0]}</p>
              <p>2.{special.hotDacnceClub.bro[1]}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div style={{ padding: "1rem" }}>
      <h2>{school.name}</h2>
      <p>
        就讀時間: {school.year}
      </p>
      <p>畢業時間: {school.graduated}</p>
    </div>
  )
}