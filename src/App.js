import logo from './logo.svg';
import './App.css';
import Countries from './components/Countries/Countries';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';



function App() {
  return (
    <div className="App bg-success">
      <Header></Header>
      <Countries></Countries>
      <Footer></Footer>
    </div>
  );
}


/* <LoadCountries></LoadCountries> */

// function LoadCountries() {
//   const [countries, setCountries] = useState([]);
//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//       .then(res => res.json())
//       .then(data => setCountries(data))
//   }, [])
//   return (
//     <div>
//       <h1>Visiting Every Country of the world!!</h1>
//       <h3>Available Countries: {countries.length}</h3>
//       {
//         countries.map(countrie => < Country name={countrie.name.common} population={countrie.population}></Country>)
//       }
//     </div >
//   )
// }

// function Country(props) {
//   return (
//     <div>
//       <h2>Name: {props.name}</h2>
//       <p>Population: {props.population}</p>
//     </div>
//   )
// }


export default App;
