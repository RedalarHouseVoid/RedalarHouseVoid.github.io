import './App.css';
import React, { useState, setState } from 'react';
import logo from './logo.png'

var axios = require('axios');
var data = JSON.stringify({
      "dataSource": "TestCluster",
      "database": "Test",
      "collection": "Test Collection",
      "document": {"_id": 102,
      "name": "This is a Test"}
});         

function httpSend() {
  const xhr = new XMLHttpRequest()
  // open a POST request
  xhr.open("POST", "https://data.mongodb-api.com/app/data-ytjwq/endpoint/data/v1/action/insertOne")
  // set content-type header to JSON
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader('api-key', 'YHze2ryYyTptJ7b6mjnXxtmRZe70BXGTrg6Fb86FJQ7VAX5q9pk7kiH5eKXfmOuC');
  // send JSON data to the remote server
  xhr.send(data)

  // Event Handlers

  // track data upload progress
  xhr.upload.onprogress = function(e) {
    console.log(`${e.loaded}B of ${e.total}B uploaded!`)
  }

  // triggered when data upload is finished
  xhr.upload.onload = function(e) {
    console.log("Upload completed")
  }

  // triggered when the response is fully received
  xhr.onload = function() {
    console.log(xhr.status)
  }

  // triggered due to a network-level error
  xhr.onerror = function() {
    console.log("Network error occurred")
  }
}

let classes = {
  rogue: {
  'hitDice': 'd8',
  level1: { 'proficiencies': ['Light armor', 'Simple weapons', 'hand crossbows', 'longswords', 'rapiers', 'shortswords', 'Thieves tools'],
            'savingThrows': ['Dexterity', 'Intelligence'],
            'features': ['Sneak Attack', 'Expertise', 'Thieves Cant']},
  level2: { 'features': ['Cunning Action']},
  level3: {'features': ['Roguish Archetype']},
  level4: { 'features': ['ASI']},
  level5: { 'features': [`Uncanny Dodge`]},
  level6: { 'features': ['Expertise']},
  level7: { 'features': ['Evasion']},
  level8: { 'features': ['ASI']},
  level9: { 'features': ['Roguish Archetype Feature']},
  level10: { 'features': ['ASI']},
  level11: { 'features': ['Reliable Talent']},
  level12: { 'features': ['ASI']},
  level13: { 'features': ['Roguish Archetype Feature']},
  level14: { 'features': ['BlindSense']},
  level15: { 'features': ['Slippery Mind']},
  level16: { 'features': ['ASI']},
  level17: { 'features': ['Roguish Archetype Feature']},
  level18: { 'features': ['Elusive']},
  level19: { 'features': ['ASI']},
  level20: { 'features': ['Stroke of Luck']},
  },
  fighter: {
    'hitDice': 'd10',
    level1: {'proficiencies': [`Simple Weapons`, `Martial Weapons`, `All Armor`, `Shields`],
             'savingThrows': [`Strength`, `Constitution`],
            'features': ['Fighting Style', `Second Wind`]},
    level2: { 'features': ['Action Surge']},
    level3: {'features': ['Martial Archetype']},
    level4: { 'features': ['ASI']},
    level5: { 'features': ['Extra Attack (1)']},
    level6: { 'features': ['ASI']},
    level7: { 'features': ['Martial Archetype Feature']},
    level8: { 'features': ['ASI']},
    level9: { 'features': ['Indomitable']},
    level10: { 'features': ['Martial Archetype Feature']},
    level11: { 'features': ['Extra Attack (2)']},
    level12: { 'features': ['ASI']},
    level13: { 'features': ['Indomitable (2)']},
    level14: { 'features': ['ASI']},
    level15: { 'features': ['Martial Archetype Feature']},
    level16: { 'features': ['ASI']},
    level17: { 'features': ['Action Surge (2)', 'Indomitable (3)']},
    level18: { 'features': ['Martial Archetype Feature']},
    level19: { 'features': ['ASI']},
    level20: { 'features': ['Extra Attack (3)']},
    },
    paladin: {
      'hitDice': 'd10',
      level1: {'proficiencies': [`Simple Weapons`, `Martial Weapons`, `All Armor`, `Shields`],
               'savingThrows': [`Wisdom`, `Charisma`],
              'features': ['Divine Sense', 'Lay on Hands']},
      level2: { 'features': [	'Fighting Style', 'Half Spellcasting', 'Divine Smite']},
      level3: {'features': ['Divine Health','Sacred Oath']},
      level4: { 'features': [`ASI`]},
      level5: { 'features': ['Extra Attack (1)']},
      level6: { 'features': ['Aura of Protection']},
      level7: { 'features': ['Sacred Oath Feature']},
      level8: { 'features': ['ASI']},
      level9: { 'features': []},
      level10: { 'features': ['Aura of Courage']},
      level11: { 'features': ['Improved Divine Smite']},
      level12: { 'features': ['ASI']},
      level13: { 'features': []},
      level14: { 'features': ['Cleansing Touch']},
      level15: { 'features': ['Sacred Oath Feature']},
      level16: { 'features': ['ASI']},
      level17: { 'features': []},
      level18: { 'features': ['Aura Improvements']},
      level19: { 'features': ['ASI']},
      level20: { 'features': ['Sacred Oath Feature']},
      },
      sorcerer: {
        'hitDice': 'd6',
        level1: {'proficiencies': ['Daggers', 'Darts', 'Slings', 'Quarterstaffs', 'Light Crossbows'],
                 'savingThrows': [`Constitution`, `Charisma`],
                'features': [	'Full Spellcasting', 'Sorcerous Origin']},
        level2: { 'features': ['Font of Magic']},
        level3: {'features': ['Metamagic']},
        level4: { 'features': [`ASI`]},
        level5: { 'features': []},
        level6: { 'features': ['Sorcerous Origin Feature']},
        level7: { 'features': []},
        level8: { 'features': ['ASI']},
        level9: { 'features': []},
        level10: { 'features': ['Metamagic']},
        level11: { 'features': []},
        level12: { 'features': ['ASI']},
        level13: { 'features': []},
        level14: { 'features': ['Sorcerous Origin Feature']},
        level15: { 'features': []},
        level16: { 'features': ['ASI']},
        level17: { 'features': ['Metamagic']},
        level18: { 'features': ['Sorcerous Origin Feature']},
        level19: { 'features': ['ASI']},
        level20: { 'features': ['Sorcerous Restoration']},
        
        },
        barbarian: {
          'hitDice': 'd12',
          level1: {'proficiencies': ['Simple Weapons', 'Short Swords'],
                  'savingThrows': [`Constitution`, `Strength`],
                  'features': ['Rage', 'Unarmored Defense']},
          level2: { 'features': ['Reckless Attack', 'Danger Sense']},
          level3: {'features': ['Primal Path']},
          level4: { 'features': ['ASI']},
          level5: { 'features': ['Extra Attack (1)', 'Fast Movement']},
          level6: { 'features': ['Primal Path Feature']},
          level7: { 'features': ['Feral Instinct']},
          level8: { 'features': ['ASI']},
          level9: { 'features': ['Brutal Critical (1)']},
          level10: { 'features': ['Primal Path Feature']},
          level11: { 'features': ['Relentless Rage']},
          level12: { 'features': ['ASI']},
          level13: { 'features': ['Brutal Critical (2)']},
          level14: { 'features': ['Primal Path Feature']},
          level15: { 'features': ['Persistent Rage']},
          level16: { 'features': ['ASI']},
          level17: { 'features': ['Brutal Critical (3)']},
          level18: { 'features': ['Indomitable Might']},
          level19: { 'features': ['ASI']},
          level20: { 'features': ['Primal Champion']},
          
          },
          monk: {
            'hitDice': 'd8',
            level1: {'proficiencies': ['Light Armor', 'Medium Armor', 'Shields', 'Simple Weapons', 'Short Swords'],
                      'savingThrows': [`Dexterity`, `Strength`],

                    'features': ['Unarmored Defense', 'Martial Arts']},
            level2: { 'features': ['Ki', 'Unarmored Movement']},
            level3: {'features': ['Monastic Tradition', 'Deflect Missiles']},
            level4: { 'features': ['ASI']},
            level5: { 'features': ['Extra Attack', 'Stunning Strike']},
            level6: { 'features': ['Ki-Empowered Strikes', 'Monastic Tradition Feature']},
            level7: { 'features': ['Evasion', 'Stillness of Mind']},
            level8: { 'features': ['ASI']},
            level9: { 'features': ['Unarmored Movement improvement']},
            level10: { 'features': ['Purity of Body']},
            level11: { 'features': ['Monastic Tradition Feature']},
            level12: { 'features': ['ASI']},
            level13: { 'features': ['Tongue of the Sun and Moon']},
            level14: { 'features': ['Diamond Soul']},
            level15: { 'features': ['Timeless Body']},
            level16: { 'features': ['ASI']},
            level17: { 'features': ['Monastic Tradition Feature']},
            level18: { 'features': ['Empty Body']},
            level19: { 'features': ['ASI']},
            level20: { 'features': ['Perfect Self']},
            
            },
            ranger: {
              'hitDice': 'd10',
              level1: {'proficiencies': ['Light Armor', 'Medium Armor', 'Shields','Simple Weapons', 'Martial Weapons'],
                       'savingThrows': [`Strength`, `Dexterity`],
                      'features': ['Favored Enemy', 'Natural Explorer']},
              level2: { 'features': ['Fighting Style', 'Half Spellcasting']},
              level3: {'features': ['Primeval Awareness', 'Ranger Conclave']},
              level4: { 'features': ['ASI']},
              level5: { 'features': ['Extra Attack (1)']},
              level6: { 'features': ['Favored Enemy Improvement', 'Natural Explorer Improvement']},
              level7: { 'features': ['Ranger Conclave Feature']},
              level8: { 'features': ['Ability Score Improvement', `Land's Stride`]},
              level9: { 'features': []},
              level10: { 'features': ['Natural Explorer Improvement', 'Hide in Plain Sight']},
              level11: { 'features': ['Ranger Conclave Feature']},
              level12: { 'features': ['ASI']},
              level13: { 'features': []},
              level14: { 'features': ['	Favored Enemy Improvement', 'Vanish']},
              level15: { 'features': ['Ranger Conclave Feature']},
              level16: { 'features': ['ASI']},
              level17: { 'features': []},
              level18: { 'features': ['Feral Senses']},
              level19: { 'features': ['ASI']},
              level20: { 'features': ['Foe Slayer']},
              
              },
              wizard: {
                'hitDice': 'd6',
                level1: {'proficiencies': ['Daggers', 'Darts', 'Slings', 'Quarterstaffs', 'Light Crossbows'],
                         'savingThrows': [`Intelligence`, `Wisdom`],
                        'features': ['Full Spellcasting', 'Arcane Recovery']},
                level2: { 'features': ['Arcane Tradition']},
                level3: {'features': []},
                level4: { 'features': ['ASI']},
                level5: { 'features': []},
                level6: { 'features': ['Arcane Tradition Feature']},
                level7: { 'features': []},
                level8: { 'features': ['ASI']},
                level9: { 'features': []},
                level10: { 'features': ['Arcane Tradition Feature']},
                level11: { 'features': []},
                level12: { 'features': ['ASI']},
                level13: { 'features': []},
                level14: { 'features': ['Arcane Tradition Feature']},
                level15: { 'features': []},
                level16: { 'features': ['ASI']},
                level17: { 'features': []},
                level18: { 'features': ['Spell Mastery']},
                level19: { 'features': ['ASI']},
                level20: { 'features': ['Signature Spells']},
                
                },
                cleric: {
                  'hitDice': 'd8',
                  level1: {'proficiencies': ['Light Armor', 'Medium Armor', 'Shields' ,'Simple Weapons'],
                           'savingThrows': [`Charisma`, `Wisdom`],
                          'features': ['Full Spellcasting', 'Divine Domain']},
                  level2: { 'features': ['Channel Divinity (1)', 'Divine Domain feature']},
                  level3: {'features': []},
                  level4: { 'features': ['ASI']},
                  level5: { 'features': ['Destroy Undead (CR 1/2)']},
                  level6: { 'features': ['Channel Divinity (2)', 'Divine Domain Feature']},
                  level7: { 'features': []},
                  level8: { 'features': ['Ability Score Improvement', 'Destroy Undead (CR 1)', 'Divine Domain Feature']},
                  level9: { 'features': []},
                  level10: { 'features': ['Divine Intervention']},
                  level11: { 'features': ['Destroy Undead (CR 2)']},
                  level12: { 'features': ['ASI']},
                  level13: { 'features': []},
                  level14: { 'features': ['Destroy Undead (CR 3)']},
                  level15: { 'features': []},
                  level16: { 'features': ['ASI']},
                  level17: { 'features': ['Destroy Undead (CR 4)', 'Divine Domain Feature']},
                  level18: { 'features': ['	Channel Divinity (3)']},
                  level19: { 'features': ['ASI']},
                  level20: { 'features': ['Divine Intervention Improvement']},
                  
                  },
                  bard: {
                    'hitDice': 'd8',
                    level1: {'proficiencies': ['Light Armor', 'Hand Crossbows', 'Longswords', 'Rapiers', 'Shorts Swords'],
                             'savingThrows': [`Dexterity`, `Charisma`],
                            'features': ['Full Spellcasting','Bardic Inspiration (d6)']},
                    level2: { 'features': ['Jack of All Trades', 'Song of Rest (d6)']},
                    level3: {'features': ['Bard College', 'Expertise']},
                    level4: { 'features': ['ASI']},
                    level5: { 'features': ['Bardic Inspiration (d8)', 'Font of Inspiration']},
                    level6: { 'features': ['Countercharm', 'Bard College Feature']},
                    level7: { 'features': []},
                    level8: { 'features': ['ASI']},
                    level9: { 'features': ['Song of Rest (d8)']},
                    level10: { 'features': ['Bardic Inspiration (d10)', 'Expertise', 'Magical Secrets']},
                    level11: { 'features': []},
                    level12: { 'features': ['ASI']},
                    level13: { 'features': ['Song of Rest (d10)']},
                    level14: { 'features': ['	Magical Secrets, Bard College Feature']},
                    level15: { 'features': ['Bardic Inspiration (d12)']},
                    level16: { 'features': ['ASI']},
                    level17: { 'features': ['Song of Rest (d12)']},
                    level18: { 'features': ['Magical Secrets']},
                    level19: { 'features': ['ASI']},
                    level20: { 'features': ['Superior Inspiration']},
                    
                    },
                    druid: {
                      'hitDice': 'd8',
                      level1: {'proficiencies': ['Light Armor', 'Medium Armor', 'Clubs', 'Daggers', 'Darts', 'Javelins', 'Maces', 'Quarterstaffs', 'Scimitars', 'Sickles', 'Slings', 'Spears'],
                               'savingThrows': [`Intelligence`, `Wisdom`],
                              'features': ['Full Spellcasting','Druidic']},
                      level2: { 'features': ['Wild Shape', 'Druid Circle']},
                      level3: {'features': []},
                      level4: { 'features': ['ASI', 'Wild Shape Improvement']},
                      level5: { 'features': []},
                      level6: { 'features': ['Druid Circle Feature']},
                      level7: { 'features': []},
                      level8: { 'features': ['Wild Shape Improvement','ASI']},
                      level9: { 'features': []},
                      level10: { 'features': ['Druid Circle Feature']},
                      level11: { 'features': []},
                      level12: { 'features': ['ASI']},
                      level13: { 'features': []},
                      level14: { 'features': ['Druid Circle Feature']},
                      level15: { 'features': []},
                      level16: { 'features': ['ASI']},
                      level17: { 'features': []},
                      level18: { 'features': ['Timeless Body', 'Beast Spells']},
                      level19: { 'features': ['ASI']},
                      level20: { 'features': ['Archdruid']},
                      
                      },
                    
                    artificer: {
                      'hitDice': 'd8',
                      level1: {'proficiencies': ['Light Armor', 'Medium Armor', 'Shields', 'Simple Weapons'],
                               'savingThrows': [`Constitution`,`Intelligence`],
                              'features': ['Magical Tinkering','Half Spellcasting']},
                      level2: { 'features': ['Infuse Item']},
                      level3: {'features': ['Artificer Specialty', 'The Right Tool for the Job']},
                      level4: { 'features': ['ASI']},
                      level5: { 'features': ['Artificer Specialty Feature']},
                      level6: { 'features': ['Tool Expertise']},
                      level7: { 'features': ['Flash of Genius']},
                      level8: { 'features': ['ASI']},
                      level9: { 'features': ['Artificer Specialty Feature']},
                      level10: { 'features': ['Magic Item Adept']},
                      level11: { 'features': ['Spell-Storing Item']},
                      level12: { 'features': ['ASI']},
                      level13: { 'features': []},
                      level14: { 'features': ['Magic Item Savant']},
                      level15: { 'features': ['Artificer Specialty Feature']},
                      level16: { 'features': ['ASI']},
                      level17: { 'features': []},
                      level18: { 'features': ['Magic Item Master']},
                      level19: { 'features': ['ASI']},
                      level20: { 'features': ['Soul of Artifice']},
                      
                      },

  }
 
function spellcastingValue (className) {
  if(className  === 'druid'  ||className === 'sorcerer' || className === 'wizard' || className === 'bard' || className === 'cleric') {
    return 'full caster'
  } else if (className  == 'paladin'  ||className === 'ranger') {
    return 'half caster'
  } else if(className == 'artificer') {
    return 'artificer'
  } else {
    return 'zero caster'
  }
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {characterLevel: [],
                  characterClassFeatures: {},
                  characterSubclassFeatures: {},
                  characterSpellcasterSlotLevel: 0,
                  characterSpellcasterKnownLevel: 0,
                  characterSneakAttackLevel: 0,
                  characterAttacks: 1,                              };
  }


levelChange = () => {
  let spellcasterKnownLevelArr = []

  let spellcasterSlotLevel = 0
  let attacks = 1
  let sneakAttack = 0
  let classFeatures = {}

  if(this.state.characterLevel.length > 1) {
    //multiclassed character
  
    for(let className of this.state.characterLevel.sort((a, b) => parseInt(a.split(' ')[1]) - parseInt(b.split(' ')[1]) )) {
      let spellcasterKnownLevel = 0
      let currentClass = className.split(' ')[0]
      let currentClassLevel = parseInt(className.split(' ')[1])
      if(spellcastingValue(currentClass) == 'full caster' || (spellcastingValue(currentClass) == 'artificer' && currentClassLevel === 1)) {
        
        if(currentClassLevel <= 17) {
          spellcasterKnownLevel += currentClassLevel
          spellcasterSlotLevel += currentClassLevel
        } else {
          spellcasterKnownLevel = 17
          spellcasterSlotLevel = 17
        }
      } else if(spellcastingValue(currentClass) == 'half caster' || spellcastingValue(currentClass) == 'artificer') {
       
        spellcasterKnownLevel += currentClassLevel * .5
        spellcasterSlotLevel +=  currentClassLevel * .5
      }
      this.setState({
        characterSpellcasterSlotLevel: Math.floor(spellcasterSlotLevel),
      
      })

     //Extra Attack Handler
     if((currentClass === 'paladin' || currentClass === 'fighter' || currentClass === 'ranger' || currentClass === 'barbarian' || currentClass === 'monk') && currentClassLevel >= 5 && currentClassLevel < 11) {
      this.setState({
        characterAttacks: 2,
      
      })

    }  else if(currentClass === 'fighter' && currentClassLevel >= 11 && currentClassLevel < 20 ) {
      this.setState({
        characterAttacks: 3,
      
      })


    } else if(currentClass === 'fighter' && currentClassLevel === 20 )  {
      this.setState({
        characterAttacks: 4,
      })


    } else {
      this.setState({
        characterAttacks: 1,
      })
    }

    //Sneak Attack Handler
    if(currentClass  === 'rogue')  {
      
      this.setState({
        characterSneakAttackLevel: currentClassLevel,
      })
    }

     //features handler
     
     classFeatures[`${currentClass}`] = Object.entries(classes[currentClass]).slice(1, currentClassLevel + 1).map(item => item = item[1].features)
     this.setState({
       characterClassFeatures: classFeatures
     
     })
     spellcasterKnownLevelArr.push(spellcasterKnownLevel)
     console.log(currentClass, spellcasterKnownLevel)
     console.log(`current multiclass spell known array`, spellcasterKnownLevelArr)
     }
    
     this.setState({
      characterSpellcasterKnownLevel: spellcasterKnownLevelArr.sort((a,b) => b-a)[0]
    })

    } else  if(this.state.characterLevel.length == 1){
      let className = this.state.characterLevel[0]
      let currentClass = className.split(' ')[0]
      let currentClassLevel = parseInt(className.split(' ')[1])
      let spellcasterKnownLevel = 0
      
   
      //single classed character
      

      //spells
      if(spellcastingValue(currentClass) == 'full caster' || (spellcastingValue(currentClass) == 'artificer' && currentClassLevel === 1)) {
        
        if(currentClassLevel <= 17) {
          spellcasterKnownLevel = currentClassLevel
          spellcasterSlotLevel = currentClassLevel
        } else {
          spellcasterKnownLevel = 17
          spellcasterSlotLevel = 17
        }
      } else if((spellcastingValue(currentClass) == 'half caster' || spellcastingValue(currentClass) == 'artificer') && currentClassLevel > 1 ) {
       
        spellcasterKnownLevel = currentClassLevel * .5
        spellcasterSlotLevel =  currentClassLevel * .5
      } else {
        spellcasterKnownLevel = 0
        spellcasterSlotLevel =  0
      }
      this.setState({
        characterSpellcasterKnownLevel: spellcasterKnownLevel,
        characterSpellcasterSlotLevel: spellcasterSlotLevel,
      
      })

     //Extra Attack Handler
     if(currentClass === 'fighter' && currentClassLevel === 20 )  {
      this.setState({
        characterAttacks: 4,
      })


    } else if(currentClass === 'fighter' && currentClassLevel >= 11 ) {
      this.setState({
        characterAttacks: 3,
      
      })


    } else if((currentClass === 'paladin' || currentClass === 'fighter' || currentClass === 'ranger' || currentClass === 'barbarian' || currentClass === 'monk') && currentClassLevel >= 5) {
      this.setState({
        characterAttacks: 2,
      
      })


    } else {
      this.setState({
        characterAttacks: 1,
      
      })
    }

    //Sneak Attack Handler
    if(currentClass  === 'rogue')  {
   
      this.setState({
        characterSneakAttackLevel: currentClassLevel,
      })
    }

    //features handler
    let classFeatures = {}
    classFeatures[`${currentClass}`] = Object.entries(classes[currentClass]).slice(1, currentClassLevel + 1).map(item => item = item[1].features)
  
    this.setState({
      characterClassFeatures: classFeatures
    
    })
    



    } else {
      this.setState({characterLevel: [],
        characterClassFeatures: {},
        characterSubclassFeatures: {},
        characterSpellcasterSlotLevel: 0,
        characterSpellcasterKnownLevel: 0,
        characterSneakAttackLevel: 0,
        characterAttacks: 1,                              })
    }
 
  
  }

  levelUp = classParam => {
    let currentLevel = this.state.characterLevel.find(item => item.startsWith(classParam))
 
    if(currentLevel) {
    //find current level in class and increment
    currentLevel = parseInt(currentLevel.split(' ')[1]) + 1
    let index = this.state.characterLevel.findIndex(item => item.startsWith(classParam))
    let newCharacterLevel = this.state.characterLevel
    newCharacterLevel.splice(index, 1, `${classParam} ${currentLevel}`)
    //set value
    this.setState({
      characterLevel: newCharacterLevel
    }, () => {
      this.levelChange()                                   
  } )
    
    } else {
      //set value to level 1 in class
      this.setState({
        characterLevel: this.state.characterLevel.concat([`${classParam} 1`])
      }, () => {
        this.levelChange()                                   
    } )
    }
  }
  levelDown = classParam => {
    let currentLevel = this.state.characterLevel.find(item => item.startsWith(classParam))
 
    if(currentLevel) {
    //find current level in class and increment
    currentLevel = parseInt(currentLevel.split(' ')[1]) - 1
    let index = this.state.characterLevel.findIndex(item => item.startsWith(classParam))
    let newCharacterLevel = this.state.characterLevel
    if(currentLevel === 0) {
     
      newCharacterLevel.splice(index, 1)
    } else {
      newCharacterLevel.splice(index, 1, `${classParam} ${currentLevel}`)
    }
    
    //set value
    this.setState({
      characterLevel: newCharacterLevel
    }, () => {
      
      this.levelChange()                                   
  } )
    
    } 
  }








  render() {
    return (
      <div className='App-header'>
      <div className='left'>
      <div className="classGrid">
      {Object.entries(classes).sort().map((item, i) => { return <ClassLeveler key={i} className = {item[0]} levelUp={this.levelUp}  levelDown={this.levelDown} />})}
      

      </div>
  
      <div className='importantFeatures'> 
      {Math.ceil(this.state.characterSpellcasterSlotLevel / 2) > 0 ? <p>Highest Level Spell Slot {this.state.characterLevel.length > 1 && this.state.characterLevel.includes('paladin') ||this.state.characterLevel.includes('ranger') ?   Math.floor(this.state.characterSpellcasterSlotLevel / 2) : Math.ceil(this.state.characterSpellcasterSlotLevel / 2)} </p> : <p></p>} 
      {Math.ceil(this.state.characterSpellcasterKnownLevel / 2) > 0 ? <p>Highest Level Spell Known {this.state.characterLevel.length > 1 && this.state.characterLevel.includes('paladin') ||this.state.characterLevel.includes('ranger') ?   Math.floor(this.state.characterSpellcasterKnownLevel / 2) : Math.ceil(this.state.characterSpellcasterKnownLevel / 2)} </p> : <p></p>} 
      {this.state.characterLevel.some(item => spellcastingValue(item) == 'half caster' || spellcastingValue(item) == 'zero caster') ? <p>Number of Attacks {this.state.characterAttacks}</p> : <p></p>}
      {Math.round(this.state.characterSneakAttackLevel / 2) > 0 ? <p>Sneak Attack Dice {Math.round(this.state.characterSneakAttackLevel / 2)}d6</p> : <p></p>}
      </div>
     
      </div>
     
       
        
<div className='right'> 
    
         {Object.entries(this.state.characterClassFeatures).map((item, i) => { return <ClassFeatureList key={i} classData = {item}/>})} 
</div>
      </div>
    );
  }
}

class ClassFeatureList extends React.Component { 
  render() { 
     return ( 
        <div className='classFeatures'> 
    
          <p>{this.props.classData[0].slice(0, 1).toUpperCase() +  this.props.classData[0].slice(1, this.props.classData[0].length)} Features</p> 
          <div className='featureList'> 
           <ul>
           {this.props.classData[1].flat().map((item) => { return <li key={item}>{item} </li>})}
           </ul>
           </div> 
        </div> 
     ); 
  }
} 
class ClassLeveler extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {className : this.props.className,
                  classLevel : 0
                  
    };
  }

  render() { 
     return ( 
      <div class="v-counter">
        <input type="button" class="minusBtn" value="−"  onClick={() => {
            this.props.levelDown(this.props.className)
            if(this.state.classLevel > 0) {
              this.setState({classLevel: this.state.classLevel - 1})
            }
          
           
            }}/>
        <input type="text" size="25" value={this.state.classLevel} class="count" />
        <input type="button" class="plusBtn" value="+" onClick={() => {
            this.props.levelUp(this.props.className)
            
              this.setState({classLevel: this.state.classLevel + 1})
            
            }
            } />
        <div className='label'>{this.props.className}</div>
      </div>
     );
  }
} 


export default App;
