import React from 'react';
import Title from "../components/Title";
import Icon from "../components/Icon"
import List from "../components/List"

import movieIcons from "../apis/movieIcons"
import watchList from "../apis/watchList"

export default function Watch(){
    const movies = movieIcons.map(movie => <Icon title={movie.title} name={movie.author}
                                  image={movie.imgURL} alt={movie.imgCap} link={movie.link}
                                  imgHeight="150px" imgWidth="150px" />)

    return(
        <div style={{
          height: "100%",
          width: "100vw"
        }}>
            <Title title="Watch List" subheading="Selection of TV Shows and Movies for education and entertainment"/>
            <div style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
            }}>
              {movies}
            </div>
            <List data={watchList} alignment="left"/>
        </div>
    );
}
