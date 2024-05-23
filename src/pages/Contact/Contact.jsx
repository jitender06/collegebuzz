import { Box, Container, Grid, Paper } from '@mui/material'
import React from 'react'
import './style.css'
import EmailIcon from '@mui/icons-material/Email';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
export default function Contact() {
  return (
    <Container sx={{padding:"40px 0px", maxWidth:"1200px"}}>
        <Grid container spacing={3} pb={4} px={"30px"}>
            <Grid item xs={12} md={6} alignContent={"center"}>
                <h1 className="block font-bold text-gray-800  text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
                    College
                    <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">Buzz</span>
                </h1>
                <span className='description'>Bridging Campus Connections </span>
                <Box marginTop={"10px"} mt={"40px"}>
                    <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                        {/* <img src={Email} alt="email" /> */}
                        <EmailIcon sx={{ fontSize: 30, color: 'rgb(37 99 235)' }}/>
                        <p>Collegebuzz@gmail.com</p>
                    </Box>
                    <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                        {/* <img src={Call} alt="call" />
                         */}
                         <PermPhoneMsgIcon sx={{ fontSize: 30, color: 'rgb(37 99 235)' }}/>
                        <p>+ 91 6239318097</p> 
                    </Box>
                </Box>
            </Grid>

            <Grid item xs={12} md={6}>
                <Paper elevation={3} sx={{padding:"20px"}}>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <input className='contact-input' type="text" placeholder='First Name'/>
                        </Grid>
                        <Grid item xs={6}>
                            <input className='contact-input' type="text" placeholder='Last Name'/>
                        </Grid>
                        <Grid item xs={6}>
                            <input className='contact-input' type="text" placeholder='Email'/>
                        </Grid>
                        <Grid item xs={6}>
                            <input className='contact-input' type="text" placeholder='Phone Number'/>
                        </Grid>
                        <Grid item xs={12}>
                            <textarea className='contact-input' rows="4" cols="50" placeholder='Message'/>
                        </Grid>
                        <Grid item xs={12}>
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Submit
                            </button>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    </Container>
  )
}
