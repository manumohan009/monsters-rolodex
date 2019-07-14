import React from 'react';
import './card-list.styles.css';
import { Card } from './../card/card.component';
// class CardList from React.Component{
//     constructor(){
//         super();
//         this.state = {}
//     }
//     render(){

//     }
// }

// export default CardList;

export const CardList = (props) => {
    // console.log(props)
    return (
        <div className='card-list'>
            {
                props.monsters.map(monster => {
                    return(
                        <Card key={monster.id} monster={monster}/>
                    )
                })
            }

        </div>
    )

}