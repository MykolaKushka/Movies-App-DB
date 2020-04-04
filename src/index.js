import React from "react";
import ReactDOM from "react-dom";

const movie = {
  title: "Месники",
  vote_avetage: 8.5,
  image:
    "https://i2.wp.com/itc.ua/wp-content/uploads/2018/04/Avengers_Infinity_War_i00.jpg?fit=770%2C546&quality=100&strip=all&ssl=1",
  overview:
    "«Ме́сники: Війна́ Нескінче́нності» — американський супергеройський фільм, знятий братами Руссо за мотивами коміксів про однойменну команду видавництва Marvel. Він є продовженням фільмів кінематографічного всесвіту Marvel. Також він є продовженням фільмів «Месники» та « Ера Альтрона»"
};

function Image(props) {
  return <img src={props.src} alt={props.title} />;
}

function MovieItem(props) {
  const {
    data: { title, vote_avetage, image }
  } = props;
  return (
    <div>
      <Image src={image} alt={title} />
      <p>{title}</p>
      <p>{vote_avetage}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <MovieItem data={movie} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
