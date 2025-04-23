
    import "./player css.css";
    import rec from './playerdata.jsx';
    import Card from './card';
    import { useState } from 'react';


    export default function Player() {
        const [gender, setGender] = useState("all");

    const Gul= (V)=>{
        setGender(V.target.value);
    }



    return (
        <>
        <select className='dropdown' onChange={Gul} value={gender}>
    <option value="all">All</option>
    <option value="men">Men</option>
    <option value="women">women</option>
    </select>
        <div className='container'>
        {
        rec.filter((item)=>{return item.type===gender||gender==="all"})
            .map((item)=>{return <Card pic={item.pic} ttl={item.player} team={item.team} gnd={item.type} sport={item.sport} />
            })
        }

    </div>
        </>
        
    );
    }

