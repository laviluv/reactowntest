import Header from './components/Header';

const name = 'Lavi'
const x=true
// function title*() {
//   return(
//     <h5>Hi React:)</h5>
//   )
// }  
// Comment  
const App = () => {
  return (
    <div className="container">
     
      <Header />   
      {/* <Header title='Hello...' />  overrides the defaultProps set in Header component*/}
      <h1>Hello {name}</h1>
    <p>{x ? 'Yes': 'No'}</p>
    </div>
  );
}

export default App;
