import { useMemo } from "react";
import FilmCards from "../films-card/films-card";

const ShowMovie = ({films} : {films: any}) => {
    const renderFilm = useMemo(() => {
        return films && films.results.map((film: any) => {
            return (
                <FilmCards
                    title={film.original_title}
                    description={film.overview}
                />
            )  
        })
    }, [films])

    return (
        <div>
            {renderFilm}
        </div>
    )
    
}

export default ShowMovie;