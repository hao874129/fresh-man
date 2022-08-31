import React from 'react'
import { Outlet, NavLink } from "react-router-dom"

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
// logo
import Avatar from '@mui/material/Avatar'
import logo from '../assets/images/logo.jpg'

function RouterLink() {
  return (
    <div>
      <Box>
        <AppBar component="nav" position="sticky" color="main-darker" sx={{ padding: "25px 125px" }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <NavLink to="/" style={({ isActive }) => ({
              color: isActive ? '#7f8fb0' : '#d1dddb',
              textDecoration: 'none',
            })}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar
                  alt="EN"
                  src={logo}
                  sx={{ width: 56, height: 56 }}
                />
                <Box sx={{ flexDirection: 'column', marginLeft: "25px", alignItems: 'center' }} >
                  <Typography variant="h3">
                    EN
                  </Typography>
                  <Typography variant="subtitle2" >
                    aka GBAO GD
                  </Typography>
                </Box>
              </Box>
            </NavLink >
            <Box sx={{ display: 'block flex', justifyContent: 'flex-end' }}>

              <Button sx={{ color: '#d1dddb', padding: 0, margin: "0 20px" }}>
                <NavLink to="Self" style={({ isActive }) => ({
                  color: isActive ? '#7f8fb0' : '#d1dddb',
                  textDecoration: 'none',
                  padding: "20px"
                })}>
                  <Typography variant="h7"  >
                    個人簡介
                  </Typography>
                </NavLink >
              </Button>

              <Button sx={{ color: '#d1dddb', padding: 0, margin: "0 20px" }}>
                <NavLink to="Study" style={({ isActive }) => ({
                  color: isActive ? '#7f8fb0' : '#d1dddb',
                  textDecoration: 'none',
                  padding: "20px"
                })}>
                  <Typography variant="h7"  >
                    學習歷程
                  </Typography>
                </NavLink >
              </Button>

              <Button sx={{ color: '#d1dddb', padding: 0, margin: "0 20px" }}>
                <NavLink to="Job" style={({ isActive }) => ({
                  color: isActive ? '#7f8fb0' : '#d1dddb',
                  textDecoration: 'none',
                  padding: "20px"
                })}>
                  <Typography variant="h7"  >
                    工作經歷
                  </Typography>
                </NavLink >
              </Button>

              <Button sx={{ color: '#d1dddb', padding: 0, margin: "0 20px" }}>
                <NavLink to="Future" style={({ isActive }) => ({
                  color: isActive ? '#7f8fb0' : '#d1dddb',
                  textDecoration: 'none',
                  padding: "20px"
                })}>
                  <Typography variant="h7"  >
                    未來展望
                  </Typography>
                </NavLink >
              </Button>

            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <div className={"wrap"}>
        <ul className={"circles"}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <Outlet />
      </div>
    </div>
  )
}

export default RouterLink