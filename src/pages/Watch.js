import React from 'react';
import Title from "../components/Title";
import Icon from "../components/Icon"
import List from "../components/List"

import booksList from "../apis/booksList"
import watchList from "../apis/watchList"

export default function Watch(){
    const books = booksList.map(book => <Icon title={book.title} name={book.author}
      image={book.imgURL} alt={book.imgCap} height="100px" width="100%" />)

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
              {books}
            </div>
            <List data={watchList} alignment="left"/>
        </div>
    );
}
