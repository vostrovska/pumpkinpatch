import {useState} from 'react';
import {data} from './data';
import Buttons from './Buttons';
import Services from './Services';

function Home(){
    const [services, setServices] = useState(data);

    const chosenPrice = (searchTerm) => {
        const newPrice = data.filter(element => element.searchTerm === searchTerm);
        setServices(newPrice);
    }
    return(<div>
        <div className='cont'>
            <h1>Pumpkin Patch Festival</h1>
        </div>
        <Buttons filteredPrice ={chosenPrice}/>
        <Services itemForSale = { services}/>
    </div>

    )
}

export default Home;