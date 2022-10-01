import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "services/getMoviesAPI";

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState(null);
    console.log(movieId);

    useEffect(() => {
        api.fetchReviews(movieId).then(setReviews)
    }, [movieId]);

    if (!reviews) {
        return null;
    }

    return (
        <div>
            <ul>
                {reviews && reviews.length > 0 ?
                    (reviews.results.map(({ id, author, content }) =>
                    <li key={id}>
                        <h4>{author}</h4> 
                        <p>{content}</p>
                    </li>))  : (<p> Sorry, reviews not found </p>) }

             </ul>
       </div> 
    );
};

export default Reviews;