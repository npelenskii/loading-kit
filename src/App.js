import "./App.css";
import Circle from "./UIElements/Circle";
import CircleBars from "./UIElements/CircleBars";
import Cog from "./UIElements/Cog";
import Dots from "./UIElements/Dots";
import Levels from "./UIElements/Levels";

function App() {
    return (
        <div className="App">
            <Cog />
            <Circle />
            <Levels />
            <Dots />
            <CircleBars />
        </div>
    );
}

export default App;
