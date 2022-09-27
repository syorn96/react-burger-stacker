import React, {Component} from 'react';
import Ingredients from './ingredients';
export default class IngredientList extends Component {
    state= {
        ingredientsArray: [
            {name: 'Kaiser Bun', color: 'saddlebrown'},
            {name: 'Sesame Bun', color: 'sandybrown'},
            {name: 'Gluten Free Bun', color: 'peru'},
            {name: 'Lettuce Wrap', color: 'olivedrab'},
            {name: 'Beef Patty', color: '#3F250B'},
            {name: 'Soy Patty', color: '#3F250B'},
            {name: 'Black Bean Patty', color: '#3F250B'},
            {name: 'Chicken Patty', color: 'burlywood'},
            {name: 'Lettuce', color: 'lawngreen'},
            {name: 'Tomato', color: 'tomato'},
            {name: 'Bacon', color: 'maroon'},
            {name: 'Onion', color: 'lightyellow'}
          ]
    }
  render(){
    const ingredients = this.state.ingredientsArray.map((ingredient,i)=> {
        return(
            <Ingredients 
                ingredient={ingredient.name}
                color={ingredient.color}
                key={`ingredientId${i}`}/>
    )})
    return(
      <ul>
        Ingredient List
        {ingredients}
      </ul>
    )
  }
}