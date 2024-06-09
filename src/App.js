import React, {  useState } from 'react';

const App = () => {

    const [test, setTest] = useState();
    console.log(test);
    return (
        <div>
            <input type="text" value={test} onChange={(e)=>setTest(e.target.value)} /> 
        </div>
    );
};

export default App;
