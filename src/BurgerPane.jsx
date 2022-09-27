import React, {Component} from 'react';
import BurgerStack from './BurgerStack';
import ClearBurger from './ClearBurger';
export default class BurgerPane extends Component {
  render(){
    return(
      <div className="column2">
        <ClearBurger />
        <BurgerStack />
      </div>
    )
  }
}