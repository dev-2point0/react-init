import React from "react";
import { Link } from "react-router-dom";

const App = () => {
    return <div className="test">
        Hello, World! <br />
        <Link to="/test" >Test</Link>
    </div>;
};

export default App;
