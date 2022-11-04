let schools = [
  {
    name: "雲林科技大學",
    type: "University",
    graduated : 2021,
    year: "Sep 2017 - Jun 2021",
    special: {
      IM: {
        major: '資管系',
        bro: ['IM','IT']
      },
      basketball: {
        major: '資管系籃',
        awards: ['新生盃亞軍','管院盃亞軍']
      },
      hotDacnceClub: {
        major: '熱舞社',
        bro: ['彰雲嘉評鑑特優','熱舞社成發']
      }
    }
  },
  {
    name: "大甲高工",
    type: "Senior High School",
    graduated : 2017,
    year: "Sep 2014 - Jun 2017",
    special: {
      information: {
        name: '資訊科',
        major: ['電子學']
      },
      scouts: {
        name: '童軍社',
        position: ['活動長']
      }
    }
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