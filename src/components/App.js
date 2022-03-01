// create your App component here
import React, {useState, useEffect} from "react";

function App() {
    const [loading, setLoadingState] = useState(true);
    const [src, setSrc] = useState("");

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((resp) => resp.json())
        .then((data) => {
            setSrc(data.message);
            setLoadingState(false);
        })
    },[])

    if (loading) return  <p>Loading...</p>;

    return <img src={src} alt="A Random Dog" />;
}

export default App;