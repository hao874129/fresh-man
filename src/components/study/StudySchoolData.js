let schools = [
  {
    name: "雲林科技大學",
    type: "University",
    graduated : 2021,
    year: "2017~2021",
    special: {
      IM: {
        major: '資管系',
        bro: ['蔡尾','KEN']
      },
      basketball: {
        major: '資管系籃',
        awards: ['新生盃亞軍','管院盃亞軍']
      },
      hotDacnceClub: {
        major: 'Hiphop',
        bro: ['黑達','蛋堡']
      }
    }
  },
  {
    name: "大甲高工",
    type: "Senior High School",
    graduated : 2017,
    year: "2014~2017",
  },
  {
    name: "大甲國中",
    type: "Junior High School",
    graduated : 2014,
    year: "2011~2014",
  },
  {
    name: "東陽國小",
    type: "Elementary School",
    graduated : 2011,
    year: "2005~2011",
  },
]

export function getSchools() {
  return schools
}

export function getSchool(graduated) {
  return schools.find(
    (school) => school.graduated === graduated
  )
}