import React from "react"
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button
} from "@mui/material"
import Image from "./image.jpg"

export default function ContactUspage(){
    return(
        <Grid container
          style={{
            display:"flex",
            justifyContent:"center",
            backgroundColor:"#fafafa",
            paddingTop:"15rem"
          }}
        >
            <Grid item container size={{lg:8, xs:12}}>
                        <Grid item size={{lg:12, xs:12}} style={{marginBottom:"5rem"}}>
                                   <Typography
                                     style={{
                                       fontSize:"1.2rem"
                                     }}
                                   >
                                   Contact 📞
                                   </Typography>
                                   <Typography
                                     style={{
                                       fontSize:"2.5rem"
                                     }}
                                   >
                                    Feel free to Contact me by submitting the form below and I will get back to you as soon as possible
                                   </Typography>
                          </Grid> 
                          <Grid item container size={{lg:12}}>
                             <Grid item size={{lg:7, xs:7}}>
                                <Box
                                  style={{
                                    backgroundColor:"#ffffff",
                                    padding:"2rem"
                                  }}
                                >
                                    <Grid container spacing={3}  style={{padding:"2rem"}}>
                                        <Grid item size={{lg:12, xs:12}}>
                                            <Typography id="input-slider" gutterBottom>
                                                NAME
                                            </Typography>
                                            <TextField
                                              fullWidth
                                              placeholder="Enter Your Name"
                                              variant="outlined"
                                            />

                                        </Grid>
                                        <Grid item size={{lg:12, xs:12}}>
                                            <Typography id="input-slider" gutterBottom>
                                                EMAIL
                                            </Typography>
                                            <TextField
                                              fullWidth
                                              placeholder="Enter Your Email"
                                              variant="outlined"
                                            />

                                        </Grid>
                                        <Grid item size={{lg:12, xs:12}}>
                                            <Typography id="input-slider" gutterBottom>
                                                MESSAGE
                                            </Typography>
                                            <TextField
                                              fullWidth
                                              multiline
                                              rows={10}
                                              placeholder="Enter Your Message"
                                              variant="outlined"
                                            />

                                        </Grid>
                                        <Grid item size={{lg:12, xs:12}}>
                                            <Button
                                              variant="contained"
                                              size="large"
                                              color=""
                                              fullWidth
                                              style={{
                                                backgroundColor:"#1da1f2",
                                                color:"white",
                                                padding:"1rem"
                                              }}

                                            >
                                               Submit
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Box>
                             </Grid>
                             <Grid item size={{lg:5, xs:5}}>
                                <Box
                                  style={{
                                    width:"100%"
                                  }}
                                >
                                    <img
                                    src={Image}
                                    alt="bgimage"
                                    style={{
                                      width:"100%"
                                    }}
                                    />
                                </Box>
                                
                             </Grid>

                          </Grid>
            </Grid>
        </Grid>
    )
}