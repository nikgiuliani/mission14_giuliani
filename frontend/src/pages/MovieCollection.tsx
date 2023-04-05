import { useEffect, useState } from 'react';
import '../App.css';
import '../assets/bootstrap.min.css';

const MovieCollection = () => {
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetData();
  }, []);

  async function GetData() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    await fetch('https://localhost:4000/moviedata', {
      method: 'GET',
      headers: headers,
    })
      .then((response) => response.json())
      .then((json) => {
        setLoading(false);
        setMovieData(json);
      })
      .catch((error) => console.log('Authorization failed : ' + error.message));
  }

  return loading ? (
    <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
      <h1> Loading </h1>
    </div>
  ) : (
    <div>
      <table className="table table-bordered table-striped">
        <thead className="font-weight-bold ">
          <tr>
            <td> Category </td>
            <td> Title </td>
            <td> Year </td>
            <td> Director</td>
            <td> Rating </td>
            <td> Edited </td>
            <td> Lent To </td>
            <td> Notes </td>
          </tr>
        </thead>
        {movieData.map((movie: any) => (
          <tbody>
            <tr>
              <td> {movie.category} </td>
              <td> {movie.title} </td>
              <td> {movie.year} </td>
              <td> {movie.director} </td>
              <td> {movie.rating} </td>
              <td> {movie.edited} </td>
              <td> {movie.lentTo} </td>
              <td> {movie.notes} </td>
              <td>
                {/*eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a>Edit</a>
              </td>
              <td></td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default MovieCollection;
