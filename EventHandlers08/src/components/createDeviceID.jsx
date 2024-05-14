// NOT READY HERE FOR BASE CASE AJAX => REACT
import { useEffect, useState } from 'react';
import { createNewDevice } from './services/creatNewDevice';
import { getDevices } from './services/getDevices';

export default function createDeviceID() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [devices, setDevices] = useState([]);
    const [alert, setAlert] = useState(false);

    useEffect(  () => {
        let mounted = true;
        getDevices()
            .then( items => {
                if(mounted) {
                    setDevices(items);
                }
            })
            return () => mounted = false;

            }, [])


        const handleSumbit = (e) => {
            e.preventDefaul();
            createNewDevice()
                .then( (result) => {
                    setItems(result.rows); // ?
                    setAlert(true);        // ?
                })
            };
        // MOSTLY MADE UP {device.id} for example THIS IS A DUMMY PLACEHOLDER FOR NOW
        return (
            <div className='wrapper'>
                <h1> My Grocery List</h1>
                <ul>
                    {devices.map( (device) => <li key={device.id}>{device.id}</li>)}
                </ul>
                <form></form>
            </div>
        )

} _



    

    // Empty dependencies for useEffect hook means it will only execute once similar to componentDidMount() as there are no dependecy ids to change
