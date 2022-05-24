// const plantList = [
//     'Banane',
//     'Mangue',
//     'Oraange',
//     'Pomme',
//     'Pasteque'
// ]
//
// function ShoppingList() {
//     return (
//         <ul>
//             {plantList.map((plant, index) => (
//                 <li key={`${plant}-${index}`}>{plant}</li>
//             ))}
//         </ul>
//     )
// }

import {plantList} from "../datas/plantList";
import PlantItem from "./PlantItem";
import '../styles/ShoppingList.css'

function ShoppingList(){
    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )

    return (
        <div>
            <ul>
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>
            <ul className='lmj-plant-list'>
                {plantList.map(({id, name, cover, light, water}) => (
                    <PlantItem
                        id={id}
                        name={name}
                        cover={cover}
                        light={light}
                        water={water}
                    />
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList