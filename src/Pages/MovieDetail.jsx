import React, { useEffect, useState } from 'react'
import {
    Box,
    Card,
    CardMedia,
    Rating,
    Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { tmdbInstanceReq } from "../Apis/tmdb";
import { Header } from '../Component/Header';
import { Footer } from '../Component/Footer';

export const MovieDetail = () => {
    const baseUrlForMovie = "https://image.tmdb.org/t/p/w300";

    const [movies, setMovies] = useState([]);
    let params = useParams();

    useEffect(() => {
        const MovieID = params.MovieID;

        const fetchDataMovies = async () => {
            try {
                // Gunakan instance tmdb di sini
                const responseDariTMDB = await tmdbInstanceReq.get(
                    // Nah di sini kita tidak perlu menuliskan terlalu panjang lagi
                    `/movie/${MovieID}`
                );
                // Jangan lupa set statenya
                // Perhatikan di sini responseDariTMDB ada .data (response schema axios)
                setMovies(responseDariTMDB.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchDataMovies();
    }, []);

    return (
        <>
            <Header />
            <Box sx={{ padding: "1em", backgroundColor: "#3E065F" }}>
                <Typography
                    sx={{
                        padding: "1em",
                        color: "#3E065F",
                        backgroundColor: "#fff",
                        fontWeight: "bold",
                        margin: "auto",
                        width: "30em",
                        borderBottomLeftRadius: "40px",
                        borderBottomRightRadiusRadius: "40px",
                        textAlign: "center"
                    }}
                >
                    MOVIE DETAIL
                </Typography>
                <Card className="boxy" sx={{ margin: "5px", padding: '2em' }}>
                    <Box className="boxy" sx={{ width: "70em", margin: 'auto' }}>
                        <CardMedia
                            component="img"
                            image={`${baseUrlForMovie}${movies.backdrop_path}`}
                            alt={movies.title}
                        ></CardMedia>
                    </Box>
                    <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", margin: 'auto', width: '70em' }}>
                        <Box className="boxy" sx={{ width: "20em" }}>
                            <CardMedia
                                component="img"
                                image={`${baseUrlForMovie}${movies.poster_path}`}
                                alt={movies.title}
                            ></CardMedia>
                        </Box>

                        <Box className="boxy" sx={{ width: "100%", textAlign: "left", marginLeft: '-5em' }}>
                            <Typography variant="h3" sx={{ textAlign: "center" }}>
                                {movies.title}
                            </Typography>
                            <br />
                            <Typography>Release Date : {movies.release_date}</Typography>
                            <Rating value={movies.vote_average / 2} precision={0.1} readOnly />
                            <br />
                            <br />
                            <Typography>Tagline : {movies.tagline}</Typography>
                            <br />
                            <Typography>Overvie : {movies.overview}</Typography>
                            <br />
                            <Typography>Original Language : {movies.original_language}</Typography>
                        </Box>
                    </Box>
                </Card>
            </Box>
            <Footer />
        </>
    )
}
