import './App.css';
import React, { useState, setState } from 'react';
import logo from './logo.png'
/*
var axios = require('axios');
var data = JSON.stringify({
    "collection": "Test Collection",
    "database": "Test",
    "dataSource": "TestCluster",
    "projection": {
        "_id": 1
    }
});

            
var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-ytjwq/endpoint/data/v1/action/findOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'YHze2ryYyTptJ7b6mjnXxtmRZe70BXGTrg6Fb86FJQ7VAX5q9pk7kiH5eKXfmOuC',
    },
    data: data
};
            
axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });

*/

let classes = {
  rogue: {
  'hitDice': 'd8',
  level1: { 'proficiencies': ['Light armor', 'Simple weapons', 'hand crossbows', 'longswords', 'rapiers', 'shortswords', 'Thieves tools'],
            'savingThrows': ['Dexterity', 'Intelligence'],
            'features': ['Sneak Attack', 'Expertise', 'Thieves Cant']},
  level2: { 'features': ['Cunning Action']},
  level3: {'subclassFeatures': [],},
  level4: { 'features': ['ASI']},
  level5: { 'features': [`Uncanny Dodge`]},
  },
  fighter: {
    'hitDice': 'd10',
    level1: {'proficiencies': [`Simple Weapons`],
            'features': ['Fighting Style', `Second Wind`]},
    level2: { 'features': ['Action Surge']       },
    level3: {'subclass': [],
            'subclassFeatures': [],
            'features': []	       },
    level4: { 'features': []	       },
    level5: { 'features': []	       },
    },
    paladin: {
      'hitDice': 'd10',
      level1: {'proficiencies': [],
              'features': ['Divine Sense', 'Lay on Hands']	       },
      level2: { 'features': [	'Fighting Style', 'Spellcasting', 'Divine Smite']       },
      level3: {'subclass': [],
      'subclassFeatures': [],
      'features': []	       },
      level4: { 'features': []	       },
      level5: { 'features': []	       },
      },
      sorcerer: {
        'hitDice': 'd6',
        level1: {'proficiencies': [],
                'features': [	'Spellcasting', 'Sorcerous Origin']},
        level2: { 'features': ['Font of Magic']       },
        level3: {'subclass': [],
        'subclassFeatures': [],
        'features': []	       },
        level4: { 'features': []	       },
        level5: { 'features': []	       },
        },

  }
 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {characterLevel: [],
                  characterClassFeatures: {},
                  characterSubclassFeatures: {},};
  }
addLevel = className => {
    let Level = this.state.characterLevel.reverse().find(item => item.includes(`${className}`) )
    let newLevel
    if(Level) {  
      newLevel = parseInt(Level.split('').filter(item => item.toLowerCase() === item.toUpperCase()).join('')) + 1

      this.setState({
        characterLevel: this.state.characterLevel.filter(item => !item.startsWith(`${className}`)).concat([`${className} ${newLevel}`]).sort()
      })
    } else {
      newLevel = 1
      this.setState({
        characterLevel: this.state.characterLevel.concat([`${className} 1`]).sort()
      })
      
    }
    let newClassFeatures = {}
    
    Object.assign(newClassFeatures, this.state.characterClassFeatures)

    if(`${className}` in newClassFeatures) {
      newClassFeatures[`${className}`] = newClassFeatures[`${className}`].concat(classes[`${className}`][`level${newLevel}`].features)
    } else {
      newClassFeatures[`${className}`] = classes[`${className}`][`level${newLevel}`].features
    }
   
    console.log(newClassFeatures)
    
    this.setState({
      
      characterClassFeatures: newClassFeatures
     }, function() {
      console.log(this.state.characterClassFeatures)
    })
              

}
componentDidMount() {}
componentWillUnmount() {}




  render() {
    return (
      <div className='App-header'>
      <button onClick={() => this.addLevel('rogue')}>Add Rogue Level</button>
      <button onClick={() => this.addLevel('fighter')}>Add Fighter Level</button>
      <button onClick={() => this.addLevel('paladin')}>Add Paladin Level</button>
      <button onClick={() => this.addLevel('sorcerer')}>Add Sorcerer Level</button>

      
      
       
        

        <p>{this.state.characterLevel.join(' ')}</p>
        {Object.entries(this.state.characterClassFeatures).map((item, i) => { return <ClassFeatureList key={i} classData = {item}/>})}
        <img className="logo" src={logo} alt="Logo"></img>
      </div>
    );
  }
}
class ClassFeatureList extends React.Component { 
  render() { 
     return ( 
        <div> 
          <p>{this.props.classData[0].slice(0, 1).toUpperCase() +  this.props.classData[0].slice(1, this.props.classData[0].length)} Features</p> 
           <ul>
           {this.props.classData[1].map((item) => { return <li>{item} </li>})}
           </ul>
           
        </div> 
     ); 
  }
} 


export default App;
