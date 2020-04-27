import React from "react";
// import { moviesData } from "../moviesData";
import MovieItem from "./MovieItem";
import { API_URL, API_KEY_3 } from "../utils/api";
import MovieTabs from "./MovieTabs";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      moviesWillWatch: [],
      sort_by: "revenue.desc",
      page: 1
    };
  }

  componentDidMount() {
    this.getMovies();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.sort_by !== this.state.sort_by) {
      this.getMovies();
    } else if (prevState.page !== this.state.page) {
      this.getMovies();
    }
  }

  getMovies = () => {
    fetch(
      `${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${
        this.state.sort_by
      }&page=${this.state.page}`
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          movies: data.results,
          allPages: data.total_pages,
          curPage: data.page
        });
      });
  };

  removeMovie = movie => {
    const updateMovies = this.state.movies.filter(function(item) {
      return item.id !== movie.id;
    });

    this.setState({
      movies: updateMovies
    });
  };

  addMovieToWillWatch = movie => {
    // this.state.moviesWillWatch.push(movie);
    // const updateMoviesWillWatch = [...this.state.moviesWillWatch];
    // updateMoviesWillWatch.push(movie);

    const updateMoviesWillWatch = [...this.state.moviesWillWatch, movie];

    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    });
  };

  removeMovieFromWillWatch = movie => {
    const updateMoviesWillWatch = this.state.moviesWillWatch.filter(function(
      item
    ) {
      return item.id !== movie.id;
    });

    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    });
  };

  updateSortBy = value => {
    this.setState({
      sort_by: value
    });
  };

  changePage = num => {
    this.setState({
      page: this.state.page + num
    });
  };

  render() {
    const prevButton = page => {
      if (page > 1) {
        return (
          <button type="button" onClick={() => this.changePage(-1)}>
            Prev
          </button>
        );
      }
    };

    const nextButton = page => {
      if (page < this.state.allPages) {
        return (
          <button type="button" onClick={() => this.changePage(1)}>
            Next
          </button>
        );
      }
    };

    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="row mb-4">
              <div className="col-12">
                <MovieTabs
                  sort_by={this.state.sort_by}
                  updateSortBy={this.updateSortBy}
                />
              </div>
            </div>
            <div className="row">
              {this.state.movies.map(movie => {
                return (
                  <div className="col-6 mb-4" key={movie.id}>
                    <MovieItem
                      movie={movie}
                      removeMovie={this.removeMovie}
                      addMovieToWillWatch={this.addMovieToWillWatch}
                      removeMovieFromWillWatch={this.removeMovieFromWillWatch}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-3">
            <p>Will watch: {this.state.moviesWillWatch.length}</p>
          </div>
        </div>
        <div className="row mb-3 text-center">
          <div className="col-12">
            {prevButton(this.state.curPage)}
            <span className="mx-2">Current page: {this.state.curPage}</span>
            {nextButton(this.state.curPage)}
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12 text-center">
            Total pages: {this.state.allPages}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
