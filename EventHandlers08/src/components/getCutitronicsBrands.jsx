/*NOT READY TO USE SIMPLY ADDED AS A DUMMY EXAMPLE TO BUILD UPON*/
import { useState } from 'react';

function GetCutironicsBrands (){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // Empty dependency for useEffect means it will only run once similar to componentDidMount() as there are no dependency ids to change 

    useEffect ( () => (
        fetch("https://kccd03v2sc.execute-api.eu-west-2.amazonaws.com/Dev/SystemAdmin/getCutitronicsBrands")
           .then( res => res.json())
           .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                    },
                    // Important to se (error) instead of catch() block as we might swallow exceptions from bugs in components
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    ) , [])

    if (error) {
        return 
            (<div>Error: (error.message)</div>);

    } else if (!isLoaded) {
        return (<div>Loading...</div>);
    } else {
        return (
          <ul>
            {items.map(item => (
              <li key={item.id}>
                {item.name} {item.price}
              </li>
            ))}
          </ul>
        );
     }
}