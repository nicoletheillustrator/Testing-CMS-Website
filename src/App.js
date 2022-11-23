import "./main"
import charData from './data/learning.json'
import Card from './card'
function App() {
  const charArr = charData.characters


  const card = charArr.map((item, index) => {
   return (
   <Card 
      key = {index}
      data = {item}
    />
    )
  })

  return (
    <div className="App">
      <h1>Button for adding blogs.</h1>
      <p>A start to learning headless CMS and using JSON for future clients. The main purpose is to be able to push strings of the same nature to a JSON file that will then be mapped and used to create component cards to show off blogs in a list/grid</p>
      {card}
    </div>
  );
}

export default App;
