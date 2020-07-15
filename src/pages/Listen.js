import React from 'react';
import Title from '../components/Title';
import List from "../components/List";

const podcasts = [
  <iframe title="pcast1" src="https://open.spotify.com/embed-podcast/show/3bExJ9JQpkwNhoHvaIIuyV" width="20%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>,
  <iframe title="pcast2" src="https://open.spotify.com/embed-podcast/show/1SXD1U55jqbK9HHoPvdbsw" width="20%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>,
  <iframe title="pcast3" src="https://open.spotify.com/embed-podcast/show/2YXZqgzD27c9ijd2stGagX" width="20%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>,
  <iframe title="pcast4" src="https://open.spotify.com/embed-podcast/show/2uGBuThKR5v22Md5S2iS3k" width="20%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>,
  <iframe title="pcast5" src="https://open.spotify.com/embed-podcast/show/68pMSb4dzcYCIAluKCXPk8" width="20%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>,
  <iframe title="pcast6" src="https://open.spotify.com/embed-podcast/show/51CN011CgUdG7EUfm7cXF7" width="20%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
]

const otherMedia = [
  "Black Lives Matter Playlist on Spotify",
  "Youtube Video/Speech/Ted Talk/Conversation",
  "Youtube Video/Speech/Ted Talk/Conversation",
  "Black Artists to Listen To",
  "Black Empowerment Playlist on Apple Music",
  "Black Lives Matter Playlist on Spotify",
  "Youtube Video/Speech/Ted Talk/Conversation"
]

export default function Listen() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Title title="For Streaming" subheading="Playlists, Podcasts, and Youtube videos for self educating and new insights" />
      <div style={{marginTop: "25px"}}>
        <p style={{width: "14.4%", marginBottom: "25px", textAlign: "right", color: "#A57456"}}>Podcasts</p>
        <div style={{display: "flex", justifyContent: "space-evenly"}}>
          {[podcasts[0], podcasts[1], podcasts[2]]}
        </div>
        <div style={{display: "flex", justifyContent: "space-evenly"}}>
          {[podcasts[3], podcasts[4], podcasts[5]]}
        </div>
      </div>
      <List data={otherMedia} title="Stream" alignment="left"/>
    </div>
  );
}

// import { TwitterTimelineEmbed } from "react-twitter-embed";
// /* <div>
//               <TwitterTimelineEmbed
//                 sourceType="profile"
//                 screenName="blklivesmatter"
//                 theme="dark"
//                 options={{height: "400", width: "30%"}}
//               />
//               </div> */