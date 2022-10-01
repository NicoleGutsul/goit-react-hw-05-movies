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
                
                <Box maxWidth="40%" >
                        {<img src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt="" />}
                </Box>

                <Box maxWidth="60%" >
                    <h3>{original_title}</h3>
                    <p>User score: {popularity}%</p>
                    <h4>Overview</h4>
                    <p>{overview}</p>
                    <h5>Genres</h5>
                    <Box as="ul" display="flex">
                        {genres.map(({id, name}) => <Box as="li" mr="10px" key={id}> {name} </Box>)}
                    </Box>
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