import { useDispatch, useSelector } from "react-redux";
import './fav.css'

function Favorite() {
    
    const favo = useSelector((state) => state.favorite);
    const dispatch = useDispatch();
    return (
        <div className="favorite">
            <div className="container">
                {[...favo].map((movie) => {
                    return (<div className="card">
                        <div className="image">
                            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
                        </div>
                        <div className="name">{movie.title}</div>
                        
                    </div>
                    );
                }
                )
                }
            </div>
        </div>
    );
}

export default Favorite;