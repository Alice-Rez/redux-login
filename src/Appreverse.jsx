import { useDispatch, useSelector } from "react-redux";
import {
  clearInput,
  getInput,
  reverseString,
} from "./ReverseWord/Redux/actions";

function App() {
  const { input, reversed } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <section>
      <h1>Reverse can be ynnuF</h1>
      <input
        type="text"
        placeholder="Type whatever u want"
        value={input}
        onInput={(e) => {
          dispatch(getInput(e.target.value));
        }}
      />
      <div>
        {input || reversed ? (
          <button
            onClick={() => {
              dispatch(reverseString());
            }}
          >
            Submit
          </button>
        ) : null}
        <button
          onClick={() => {
            dispatch(clearInput());
          }}
        >
          Clear
        </button>
      </div>
      <div>{reversed}</div>
    </section>
  );
}

export default App;
