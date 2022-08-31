let schools = [
  {
    name: "雲林科技大學",
    type: "University",
    graduated : 2021,
    year: "Sep 2017 - Jun 2021",
    special: {
      IM: {
        major: '資管系',
        bro: ['KEN','蔡尾']
      },
      basketball: {
        major: '資管系籃',
        awards: ['新生盃亞軍','管院盃亞軍']
      },
      hotDacnceClub: {
        major: '熱舞社',
        bro: ['黑達','蛋堡']
      }
    }
  },
  {
    name: "大甲高工",
    type: "Senior High School",
    graduated : 2017,
    year: "Sep 2014 - Jun 2017",
  },
  {
    name: "大甲國中",
    type: "Junior High School",
    graduated : 2014,
    year: "Sep 2011 - Jun 2014",
  },
  {
    name: "東陽國小",
    type: "Elementary School",
    graduated : 2011,
    year: "Sep 2005 - Jun 2011",
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