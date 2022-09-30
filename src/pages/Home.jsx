import { Box } from "components/Box";
import { useState, useEffect } from "react";
import api from "../services/getMoviesAPI";
import { Movie } from "components/Movie/Movie";

const Home = () => {
    const [moviesPopular, setMoviesPopular] = useState('');

    useEffect(() => {
        api.fetchTrending()
        .then(setMoviesPopular)
    }, []);

    return (
        <Box display="flex" as="main">
            {moviesPopular && <Movie items={moviesPopular.results} />}

        </Box>
    )
};

export default Home;