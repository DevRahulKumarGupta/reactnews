import NewsList from "../NewsList";

export default function Science(props) {
  return (
    <div>
      <NewsList
        chaneProgress={props.chaneProgress}
        dataLimit={20}
        country="us"
        category="science"
      />
    </div>
  );
}
