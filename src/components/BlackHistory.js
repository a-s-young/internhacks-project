import React, { useState, useEffect } from "react";
import getDailyFact from "../apis/dailyfact";
import { TwitterTimelineEmbed } from "react-twitter-embed";

export default function BlackHistory() {
  const [fact, setFact] = useState({});

  useEffect(function dailyFact() {
    getDailyFact().then((fact) => {
      setFact(fact);
    });
  }, []);

  return (
    <div style={{ height: "100vh", width: "100vw"}}>
      <h2>Black History Fact of the Day: {fact.date}</h2>
      <h4>{fact.title}</h4>
      <p>{fact.info}</p>

      <iframe
        title="Playlist"
        width="20%"
        height="300"
        scrolling="no"
        frameborder="no"
        //allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1070113366&color=%238c8c8c&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
      <div
        style={{
          fontSize: "10px",
          color: "#cccccc",
          lineBreak: "anywhere",
          wordBreak: "normal",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          fontFamily:
            "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
          fontWeight: "100",
        }}
      >
        <a
          href="https://soundcloud.com/playlist"
          title="Moments"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#cccccc", textDecoration: "none" }}
        >
          Moments
        </a>
        ·
        <a
          href="https://soundcloud.com/playlist/sets/blm-black-lives-matter"
          title="Black Lives Matter"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#cccccc", textDecoration: "none" }}
        >
          Black Lives Matter
        </a>
      </div>
      <div>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="blklivesmatter"
        theme="dark"
        options={{height: "400", width: "30%"}}
      />
      </div>
      
    </div>
  );
}
