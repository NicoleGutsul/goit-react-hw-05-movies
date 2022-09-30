import { Movie } from "components/Movie/Movie";
import { SearchBox } from "components/SearchBox/SearchBox";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "services/getMoviesAPI";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? "";

    useEffect(() => {
        if (!query) return;
        api.fetchMovies(query).then(setMovies)
    }, [query])

    if (!movies) {
        return null;
    }

    const handleSearch = (name) => {
        setSearchParams(name !== "" ? { query: name } : {});
    }

    return (
        <div>
            <SearchBox onSearch={handleSearch}/>
            {movies.results && <Movie items={movies.results}/>}
        </div>
    )
};

export default Movies;