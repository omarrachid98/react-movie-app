const FilmCards = ({title, description} : {title: string, description: string}) => {
    return (
        <div className="card">
            {title} {description}
        </div>
    )
}

export default FilmCards;