import React from "react";
import ReactDOM from "react-dom";

const movie = {
  title: "The Avengers",
  vote_avetage: 8.5,
  image:
    "https://specials-images.forbesimg.com/imageserve/5cc0c243a7ea436c70f3ba2f/960x0.jpg?fit=scale",
  overview:
    "The film's development began when Marvel Studios received a loan from Merrill Lynch in April 2005. After the success of the film Iron Man in May 2008, Marvel announced that The Avengers would be released in July 2011. With the signing of Johansson in March 2009, the film was pushed back for a 2012 release. Whedon was brought on board in April 2010 and rewrote the original screenplay by Zak Penn. Production began in April 2011 in Albuquerque, New Mexico, before moving to Cleveland, Ohio, in August and New York City in September. The film was converted to 3D in post-production."
};

function Image(props) {
  return <img width="100%" src={props.src} alt={props.title} />;
}

// function MovieItem(props) {
//   const {
//     data: { title, vote_avetage, image }
//   } = props;
//   return (
//     <div>
//       <Image src={image} alt={title} />
//       <p>{title}</p>
//       <p>{vote_avetage}</p>
//     </div>
//   );
// }

// MovieItem = new React.Component()
class MovieItem extends React.Component {
  constructor() {
    super();

    this.state = {
      show: false,
      like: false
    };
  }

  toggleOverview = () => {
    this.setState({
      show: !this.state.show
    });
  };

  handleLike = () => {
    this.setState({
      like: !this.state.like
    });
  };

  render() {
    const {
      data: { title, vote_avetage, image, overview }
    } = this.props;
    return (
      <div style={{ width: "300px" }}>
        <Image src={image} alt={title} />
        <p>{title}</p>
        <p>{vote_avetage}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button type="button" onClick={this.toggleOverview}>
            {this.state.show ? "hide" : "show"}
          </button>
          <button
            type="button"
            onClick={this.handleLike}
            style={{ background: this.state.like ? "blue" : "white" }}
          >
            Like
          </button>
        </div>
        {this.state.show ? <p>{overview}</p> : null}
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <MovieItem data={movie} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
