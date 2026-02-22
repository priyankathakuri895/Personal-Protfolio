import React, { useEffect, useState } from "react"
import axios from "axios"
import {
    Box,
    Grid,
    Button,
    Typography
} from "@mui/material"



export default function AboutUs(){
   const [category, setCategory] =useState([])
   const [loader, setLoader] =useState(null)


   console.log(process.env.SERVERURL, "data from env")
  //  async function getCategories(){
  //     try{
  //     const response = await fetch("https://bycarrapi.janaktech.com/api/v1/en/category")
  //     console.log(response, "response")

  //     if(!response.ok){
  //       throw new Error("Data not found...")
  //     }
  //     const data = await response.json()
  //     console.log(data, "data")

  //     } catch(error){
  //       console.log("Error", error.message)
  //     }

  //  }

  useEffect(()=>{
     async function getCategories(){
      setLoader(true)
      try{
      const response = await axios.get("https://bycarrapi.janaktech.com/api/v1/en/category")
      setCategory(response.data)
      

    } catch(error){
        console.log("Error", error.message)
        setLoader(false)
      }
    }
    getCategories()
  }, [])
   

  console.log(loader, "loader")
  console.log(category, "category data")

  const finalFormat =category?.data?.data
  console.log(finalFormat, "finalFormat")

    return(
        <Box
           style={{
            marginTop:"8rem"
           }}
        >
         <Grid container
           style={{
            display:"flex",
            justifyContent:"center"
           }}
         >
          Loader: {loader}
            <Grid item container size={{lg:8,xs:12}} spacing={2}>
                <Grid item size={{lg:12, xs:12}} style={{marginBottom:"5rem"}}>
                    <Typography
                      style={{
                        fontSize:"1.2rem"
                      }}
                    >
                     About 🦄
                    </Typography>
                    <Typography
                      style={{
                        fontSize:"2.5rem"
                      }}
                    >
                     Here you will find more information about me, what I do, and list of my current skills in programming
                    </Typography>
                </Grid>
                <Grid item size={{lg:6, xs:12}}>
                     <Typography
                      style={{
                        fontSize:"1.5rem"
                      }}
                    >
                     My Story
                    </Typography>

                     <Typography
                      style={{
                        fontSize:"1.2rem",
                        marginBottom:"2rem",
                        textAlign:"justify"
                      }}
                    >
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, aliquid! Itaque corrupti magnam fugiat mollitia labore magni saepe veritatis voluptatum alias fugit.
                      Explicabo ducimus sequi aut corporis odio repellendus? Lorem ipsum dolor sit amet 
                      <br/>
                      <br/>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, aliquid! Itaque corrupti magnam fugiat mollitia labore magni saepe veritatis voluptatum alias fugit. 
                      Explicabo ducimus sequi aut corporis odio repellendus? Lorem ipsum dolor sit amet 
                      <br/>
                      <br/>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, aliquid! Itaque corrupti magnam fugiat mollitia labore magni saepe veritatis voluptatum alias fugit.
                    Explicabo ducimus sequi aut corporis odio repellendus? Lorem ipsum dolor sit amet
                    </Typography>

                    <Button
                      size="large"
                      variant="contained"
                    >
                        Projects
                    </Button>
                
                </Grid>
                <Grid item size={{lg:6, xs:12}}>
                    <Typography
                      style={{
                        fontSize:"1.5rem"
                      }}
                    >
                       My Categories
                    </Typography>

                    <Box>
                        <Grid container spacing={1}>
                            {finalFormat.map((data)=>(
                               <Grid item size={{lg:6, xs:6}}>
                                    <Box
                                    style={{
                                        backgroundColor:"#eeeeee",
                                        color:"#78a7d8",
                                        textAlign:"center",
                                        padding:"1rem",
                                        borderRadius:".5rem"
                                    }}
                                    >
                                     <img
                                       src={data.logo}
                                       style={{
                                        width:"10rem",
                                        height:"10rem"
                                       }}

                                     /> 
                                    {data.name}
                                    </Box>

                               </Grid> 
                            ))}

                        </Grid>
                    </Box>
                </Grid>
            </Grid>
         </Grid>
        </Box>
    )
}