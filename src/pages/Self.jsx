import req from '../components/self/axiosInstance'
import React from "react"
import { useState, useEffect, useMemo, useRef } from "react"

export default function App() {
  const [data, setData] = useState(null)
  const isGetData = useRef(false)
  const getData = () => {
    return req('get')
    // 原本API待修，改用 mock 的 json-server
    // return req('get','http://localhost:3000/people')
  }

  useEffect(() => {
    getData()
      .then((response) => {
        isGetData.current = true
        setData(response.data)
        console.log(':::Self_useEffect_response.data: ', response.data)
      })
  }, [])

  const dajiaAir = useMemo(() => {
    // 將台中市環保署之 OpenData 大甲站空氣品質即時資料 放進 dajiaData
    if (isGetData.current) {
      // 抓大甲資料
      let dajiaData = []
      dajiaData = data.filter((item) => {
        if (item["測站名稱"] === "大甲站") {
          return item
        }
      })
      console.log(':::Self_useMemo_dajiaData: ', dajiaData)
      // 抓大甲資料中的 pm 2.5
      let dajiaAir = dajiaData.find(target => target["監測項目"] === "2.5u懸浮微粒")
      console.log(':::Self_useMemo_dajiaAir: ', dajiaAir)
      return dajiaAir
    } else {
      console.log(':::Self_useMemo_dajiaAir: data 還沒 get 到')
      return {}
    }
  }, [data])


  return (
    <div style={{ padding: "1rem 0" }}>
      <h2>Self Introduction</h2>
      <p> 大甲PM2.5: {dajiaAir["測值"]} </p>
    </div>
  )
}