import { Suspense, useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Box } from "components/Box";
import { BackLink } from "components/BackLink/BackLink";

import api from "services/getMoviesAPI";

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const location = useLocation();

    useEffect(() => {
        api.fetchMovieDetalis(movieId).then(setMovie)
    }, [movieId])

    if (!movie) {
        return null;
    }

    const { backdrop_path, original_title, popularity, overview, genres } = movie;
    const backLinkHref = location?.state?.from ?? '/movies';

    return (
        <div>
            <BackLink to={backLinkHref}>Go back</BackLink>
            <Box display="flex" as="article">
                
                <Box width="400px" >
                        {<img src={`https://image.tmdb.org/t/p/w400/${backdrop_path}`} alt={original_title} />}
                </Box>

                <Box maxWidth="50%" ml='10px' >
                    <h2>{original_title}</h2>
                    <p>User score: {popularity}%</p>
                    <h2>Overview</h2>
                    <p>{overview}</p>
                    <h2>Genres</h2>
                    {/* <Box as="div" display="flex" flex-direction="column"> */}
                        {genres.map(({id, name}) => <p key={id}>{name}</p>)}
                    {/* </Box> */}
                </Box>
                    
            </Box>

            <Box as="ul" p="10px" >
                <li>
                  <Link to="cast" state={{from: backLinkHref}}>Cast</Link>
                </li>
                <li>
                  <Link to="reviews" state={{from: backLinkHref}}>Reviews</Link>
                </li>
            </Box>
            
            <Suspense fallback={<div>Loading page...</div>}>
                <Outlet />
            </Suspense>
        </div>
    )
}

export default MovieDetails;