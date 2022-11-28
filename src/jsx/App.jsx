import '../css/index.css';
import { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

const App = (props) => {

    const [data, setData] = useState([]);

    const handleClick = (event) => {
        // console.log(event)
    }

    return (
        <h1>
            Parcel React Bootstrap Template
        </h1>
    );
}

export { App };