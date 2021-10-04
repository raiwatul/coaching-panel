import { useEffect, useState } from 'react';


const Coach = () => {
    const [coaches, setCoaches] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setCoaches(data));

    }, [])
    return [coaches, setCoaches];



}

export default Coach;