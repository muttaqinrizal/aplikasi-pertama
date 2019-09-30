import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

// functional component / stateless component
// class DataDiri extends React.Component {
//   render() {
//     console.log(this.props);
//     return (
//       <div>
//         <h2>Nama : {this.props.nama}</h2>
//         <h2>Hobi : {this.props.hobi}</h2>
//         <h2>Cita Cita : {this.props.cita_cita}</h2>
//       </div>
//     );
//   }
// }

// // classes component / statefull component
// class Tombol extends React.Component {
//   // state = ["kinanti", "hisnia", "apip"];
//   state = {
//     nama: "Apip",
//     hobi: ["Sepak Bola", "Renang"],
//     usia: 15
//   };
//   render() {
//     // console.log(this.state[2]);
//     console.log(this.state);

//     return (
//       <div>
//         <h3>Nama : {this.state.nama}</h3>
//         <h3>Hobi : {this.state.hobi[1]}</h3>
//         <h3>Usia : {this.state.usia}</h3>
//       </div>
//     );
//   }
// }

class App extends React.Component {
  state = {
    movies: [],
    results: [
      {
        nama: "Mas Windy",
        hobi: ["Makan", " Sepak Bola"]
      },
      {
        nama: "Fakhri",
        hobi: "Sepak Bola"
      },
      {
        nama: "Nabil",
        hobi: "Tidur"
      },
      {
        nama: "Toha",
        hobi: "Mabar"
      }
    ]
  };

  // componentWillMount() {
  //   this.getData();
  // }
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=95505221523326a53dc7a80dd32760d6&language=en-US"
      )
      .then(response => {
        // maping untuk mengambil data dari API
        const film = response.data.results.map(hasil => {
          return {
            id: hasil.id,
            judul: hasil.title,
            popular: hasil.popularity,
            poster: "https://image.tmdb.org/t/p/w500" + hasil.poster_path
          };
        });
        this.setState({
          movies: film
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    console.log(this.state.movies);

    return (
      <div>
        {/* mapping untuk menampilkan data dari state */}
        {this.state.movies.map(hasil => {
          return (
            <div>
              <h2>Judul : {hasil.judul}</h2>
              <h3>Popular : {hasil.popular}</h3>
              <img src={hasil.poster} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
