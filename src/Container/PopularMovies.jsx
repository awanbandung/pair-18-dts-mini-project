import React, { useEffect, useState } from 'react'
import { tmdbInstanceReq } from '../Apis/tmdb'
import { Box, Typography } from '@mui/material'
import { CardMovie } from '../Component/MovieCard'

export const PopularMovies = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        const movieList = async () => {
            try {
                const fetchTmdb = await tmdbInstanceReq.get("/movie/popular")
                setMovies(fetchTmdb.data.results)
            } catch (err) {
                console.log(err);
            }
        }
        movieList()
    }, [])

    return (
        <>
            <Box className='container-bg' sx={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
                <Typography
                    sx={{
                        padding: "1em",
                        color: "#7A4069",
                        backgroundColor: "#fff",
                        fontWeight: "bold",
                        margin: "auto",
                        width: "30em",
                        borderBottomLeftRadius: "40px",
                        borderBottomRightRadiusRadius: "40px",
                        textAlign: "center"
                    }}
                >
                    MOST WATCHED MOVIES
                </Typography>

                <Box
                    component="div"
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        marginBottom: "1em",
                        marginTop: '1em',
                        width: '100%'
                    }}
                >
                    {movies.map(item => {
                        return <CardMovie movie={item} />
                    })}
                </Box>
            </Box>
        </>
    )
}
