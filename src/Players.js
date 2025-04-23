    import React, { useState } from 'react';
    import './player css.css';
    import rec from './playerdata.jsx';
    import Card from './card';

    export default function Player() {
    // State to manage selected genders
    const [selectedGenders, setSelectedGenders] = useState([]);

    // Handle checkbox changes
    const handleGenderChange = (event) => {
        const { value, checked } = event.target;
        setSelectedGenders((prevSelected) => {
        if (checked) {
            // Add gender to the array
            return [...prevSelected, value];
        } else {
            // Remove gender from the array
            return prevSelected.filter((gender) => gender !== value);
        }
        });
    };

    // Filter data based on selected genders
    const filteredData =
        selectedGenders.length === 0
        ? rec
        : rec.filter((item) => selectedGenders.includes(item.type));

    return (
        <>
        <div className="filters">
            <h3>Filter by Gender</h3>
            <label>
            <input
                type="checkbox"
                value="men"
                checked={selectedGenders.includes('men')}
                onChange={handleGenderChange}
            />
            Men
            </label>
            <label>
            <input
                type="checkbox"
                value="women"
                checked={selectedGenders.includes('women')}
                onChange={handleGenderChange}
            />
            Women
            </label>
        </div>

        <div className="container">
            {filteredData.map((item, index) => (
            <Card
                key={index}
                pic={item.pic}
                ttl={item.player}
                team={item.team}
                gnd={item.type}
                sport={item.sport}
            />
            ))}
        </div>
        </>
    );
    }
