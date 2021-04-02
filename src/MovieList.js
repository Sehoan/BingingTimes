import React from 'react'

const MovieList = ({ data }) => {
    return (
        <ol>
            {data.map(movie => {
                if (movie.display_title.localeCompare("") !== 0) {
                    return (
                        <li key={movie.display_title}>
                            <p>{movie.display_title}</p>
                            <p>{movie.headline}</p>
                            <img src={movie.multimedia.src} alt="movie scene" />
                            <p style={{color: "grey"}}>{movie.summary_short}</p>
                            For more info about the movie, click 
                            <a href={movie.link.url}> link</a>
                        </li>
                    )
                } 
            })}

        </ol>
    )
} 

export default MovieList
