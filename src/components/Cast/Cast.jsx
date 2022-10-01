import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "services/getMoviesAPI";

const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState(null);

    useEffect(() => {
        api.fetchCast(movieId).then(setCast)
    }, [movieId])

    if (!cast) {
        return null;
    }

    return (
        <div>
            <ul>
                {cast.cast.map(({ character, name, profile_path, id }) => profile_path &&
                    <li key={id}>
                        <img width="100" src={`https://image.tmdb.org/t/p/original/${profile_path}`} alt="" />
                        <p>{name}</p>
                        <p>Character: {character}</p>
                    </li>)}
            </ul>
        </div>
    );
};

export default Cast;