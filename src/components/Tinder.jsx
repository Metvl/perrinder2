import React from 'react'
import { useQuery } from 'react-query';
import { LinearProgress } from '@mui/material';
import Suitor from './Suitor';
import Accepted from './Accepted';
import Rejected from './Rejected';
import '../styles/tinder.css';

const Tinder = () => {
    const [accepted, setAccepted] = React.useState([]);
    const [rejected, setRejected] = React.useState([]);

    const getDogs = async () => {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        return response.json();
    }

    const listDogsAccepted = () => {
        const sortDogs = accepted.reverse();
        setAccepted([...sortDogs, data].reverse());
        refetch();
    }

    const listDogsRejected = () => {
        const sortDogs = rejected.reverse();
        setRejected([...sortDogs, data].reverse());
        refetch();
    }

    const declineDog = (dog) => {
        const sort = rejected.reverse();
        setRejected([...sort, dog].reverse());
        const moveAccepted = accepted.filter((item) => item !== dog);
        setAccepted(moveAccepted);
    }

    const secondChance = (dog) => {
        const sort = accepted.reverse();
        setAccepted([...sort, dog].reverse());
        const moveRejected = rejected.filter((item) => item !== dog);
        setRejected(moveRejected);
    }

    const {data, refetch , isRefetching, fetchStatus} = useQuery('dogs', getDogs);

    return (
    <div className="container">
        <div className="column suitor">
            <h1>Pretendiente</h1>
            {fetchStatus === 'loading' || isRefetching ? <LinearProgress color='inherit'/> :
                (
                    <>
                        <Suitor dog={data} fnAccepted={listDogsAccepted} fnRejected={listDogsRejected}/>
                    </>
                )
            }
        </div>
        <div className="column scroll">
            <h1>Match</h1>
            {
                accepted.length === 0 ? <p className='error'>¡ Aún no hay perros con los que hacer match !</p> :
                accepted.map((accepted, index) => (
                    <Accepted key={index} dog={accepted} fn={declineDog}/>
                ))
            }
        </div>
        <div className="column scroll">
            <h1>Rechazados</h1>
            {
                rejected.length === 0 ? <p className='error'>¡ Aún no has rechazado a ningún perro !</p> :
                rejected.map((rejected, index) => (
                    <Rejected key={index} dog={rejected} fn={secondChance}/>
                ))
            }
        </div>
    </div>
    )
}

export default Tinder;