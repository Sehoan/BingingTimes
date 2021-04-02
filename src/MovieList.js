import React from 'react'
import Media from 'react-bootstrap/Media'
import Image from 'react-bootstrap/Image'

const MovieList = ({ data }) => {
    return (
        <ol className="list-unstyled">
            {data.map(movie => {
                if (movie.display_title.localeCompare("") !== 0 && 
                    movie.multimedia != null) {
                    return (
                        <Media as="li" key={movie.display_title}>
                            <Image 
                                width="400"
                                height="400"
                                thumbnail 
                                src={movie.multimedia.src} 
                                alt="best scene" />
                            <Media.Body style={{padding: "1rem"}}>
                                <h2>{movie.display_title}</h2>
                                <h5>{movie.headline}</h5>
                                <p style={{color: "grey"}}>{movie.summary_short}</p>
                                For more info about the movie, click 
                                <a href={movie.link.url}> link</a>
                            </Media.Body>
                        </Media>
                    )
                } 
            })}

        </ol>
    )
} 

export default MovieList
