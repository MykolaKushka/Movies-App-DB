import React from "react";
import classNames from 'classnames/bind';

class MovieTabs extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.sort_by !== this.props.sort_by) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { sort_by, updateSortBy } = this.props;
    const handleClick = value => () => {
      updateSortBy(value);
    };

    const getCLassLink = value => {
      let tabClass = classNames({
        'nav-link' : true, 
        'active' : sort_by === value
      })
      
      return tabClass;
    };



    return (
      <ul className="tabs nav nav-pills">
        <li className="nav-item">
          <div
            className={getCLassLink("popularity.desc")}
            onClick={handleClick("popularity.desc")}
          >
            Popularity desc
          </div>
        </li>
        <li className="nav-item">
          <div
            className={getCLassLink("revenue.desc")}
            onClick={handleClick("revenue.desc")}
          >
            Revenue desc
          </div>
        </li>
        <li className="nav-item">
          <div
            className={getCLassLink("vote_average.desc")}
            onClick={handleClick("vote_average.desc")}
          >
            Vote average desc
          </div>
        </li>
      </ul>
    );
  }
}

export default MovieTabs;
