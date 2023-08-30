import { Calculator, Keyboard, Screen, Key } from "./calculator"


function App() {

  return (
    <>
      <Calculator>
       
        <Screen/>
        <Keyboard>
          <Key type="number" value={7} />
          <Key type="number" value={8} />
          <Key type="number" value={9} />
          <Key type="operator" value={"C"} />
          <Key type="number" value={4} />
          <Key type="number" value={5} />
          <Key type="number" value={6} />
          <Key type="operator" value={"X"} />
          <Key type="number" value={1} />
          <Key type="number" value={2} />
          <Key type="number" value={3} />
          <Key type="operator" value={"-"} />
          <Key type="number" value={0} />
          <Key type="operator" value={"/"} />
          <Key type="operator" value={"="} />
          <Key type="operator" value={"+"} />
        </Keyboard>

      </Calculator>
    </>
  )

}

export default App;
