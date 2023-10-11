import React from "react";
import NewsList from "../NewsList";

export default function Home(props) {
  return (
    <div>
      <NewsList
        chaneProgress={props.chaneProgress}
        dataLimit={20}
        country="us"
        category="general"
      />
    </div>
  );
}
