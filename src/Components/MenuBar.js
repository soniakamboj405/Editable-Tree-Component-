import React, { useState, useMemo } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Drawer from '@material-ui/core/Drawer'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import menuItems from './menuItems'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import _ from "lodash";


const styles = {
  list: {
    width: 250,
  },
  links: {
    textDecoration:'none',
  },
  menuHeader: {
    paddingLeft: '35px'
  }
};
function MenuBar(props) {
  const [level, setLevel] = useState({});
  const [allLevelsData, setLevelData] = useState(menuItems.data);
  const [selectedLevel, setSelectedLevel] = useState({});
  const [value, setValue] = useState({});

// this method sets the current state of a menu item i.e whether it is in expanded or collapsed or a collapsed state
const handleClick = ( item ) => {
	setSelectedLevel(item);
    setLevel( prevState => ( 
      { ...level, [ item ]: !prevState[ item ] } 
    ) )
  }

const addLevel = () => {
	console.log("selectedLevel---", selectedLevel)
	let allData = menuItems.data;
	let level1 = _.includes(selectedLevel, ".") ? _.split(selectedLevel, ".")[0] : selectedLevel;
	let levelIndex1 = _.findIndex(allData, ['name', level1]);
	let levelSelected = _.includes(selectedLevel, ".") ? _.find(allData[levelIndex1].children, ['name', selectedLevel]) : _.find(allData, ['name', selectedLevel]);
	let levelIndex = _.findIndex(allData, ['name', selectedLevel]);
	let index = _.size(_.get(levelSelected, "children")) > 0 ? _.size(_.get(levelSelected, "children"))+1 : 0;
	let newLevel = insert(_.get(levelSelected, "children", []), index, {
		name: selectedLevel + "."+ index
	  });
	  console.log("levelIndex---", levelIndex, levelSelected)
	if(_.size(_.get(levelSelected, "children")) > 0 && !_.includes(selectedLevel, ".")) {
		allData[levelIndex].children = newLevel;
	}
	else{
		levelSelected.children = newLevel
	}
	setLevelData(allData)
	setValue(!value);
  }

  const insert = (arr, index, newItem) => [
	...arr.slice(0, index),
	newItem,
	...arr.slice(index)
  ];

const removeLevel = () => {
	let allData = menuItems.data;
	let level1 = _.includes(selectedLevel, ".") ? _.split(selectedLevel, ".")[0] : selectedLevel;
	let levelIndex1 = _.findIndex(allData, ['name', level1]);
	let levelSelected = _.includes(selectedLevel, ".") ? _.find(allData[levelIndex1].children, ['name', selectedLevel]) : _.find(allData, ['name', selectedLevel]);
	let levelIndex = _.findIndex(allData, ['name', selectedLevel]);
	if(_.includes(selectedLevel, ".")) {
		levelSelected.children = [];
	  }
	else{
		allData[levelIndex].children = [];
	}
	setLevelData(allData)
	setValue(!value);
  }

// if the menu item doesn't have any child, this method simply returns a clickable menu item that redirects to any location and if there is no child this method uses recursion to go until the last level of children and then returns the item by the first condition.
const handler = ( children ) => {
const { classes } = props

return children.map( ( subOption ) => {
      if ( !subOption.children ) {
        return (
          <div key={ subOption.name }>
            <ListItem 
              button 
			  onClick={ () => handleClick( subOption.name ) }
              key={ subOption.name }>
              <Link 
                to={ "#" }
                className={ classes.links }>
                <ListItemText 
                  inset 
                  primary={ subOption.name }
                  style={{paddingLeft: "20px"}}
                />
              </Link>
            </ListItem>
          </div>
        )
      }
      return (
        <div key={ subOption.name }>
          <ListItem 
            button 
            onClick={ () => handleClick( subOption.name ) }>
            <ListItemText 
              inset 
              primary={ subOption.name } 
              style={{paddingLeft: "20px"}}
              />
            { level[ subOption.name ] ? 
              <ExpandLess /> :
              <ExpandMore />
            }
          </ListItem>
          <Collapse 
            in={ level[ subOption.name ] } 
            timeout="auto" 
            unmountOnExit
            style={{paddingLeft: "30px"}}
          >
            { handler( subOption.children ) }
          </Collapse>
        </div>
      )
    } )
  }
    const { classes, drawerOpen, menuOptions } = props;
    return (
      <div className={classes.list}>
        <Drawer 
          variant="persistent" 
          anchor="left"
          open
          classes={ { paper: classes.list } }>
          <div>
            <List style={{padding: "0"}}>
              <ListItem 
                key="menuHeading"
                divider
                disableGutters
                style={{paddingTop: "16px", paddingBottom: "16px"}}
              >
                <ListItemText
                className={ classes.menuHeader }
                  inset
                  primary="List Menu"
                />
              </ListItem>
            { handler( allLevelsData ) }
            </List>
          </div>

          <Paper style={{position: "fixed", bottom: "0", left: "0", width: "250px"}}>
            <div className='left-button' style={{float: "left"}}>
              <Button variant="outlined" style={{backgroundColor: "#00e", color: "#fff", minWidth: "auto", margin: "5px", fontWeight: "bold"}} onClick={addLevel}>+</Button>
              <Button variant="outlined" style={{backgroundColor: "#00e", color: "#fff", minWidth: "auto", margin: "5px", fontWeight: "bold"}} onClick={removeLevel}>-</Button>
            </div>
            <div className='right-button' style={{float: "right"}}>
              <Button variant="outlined" style={{backgroundColor: "#00e", color: "#fff", minWidth: "auto", margin: "5px", fontWeight: "bold"}}>&lt;</Button>
              <Button variant="outlined" style={{backgroundColor: "#00e", color: "#fff", minWidth: "auto", margin: "5px", fontWeight: "bold"}}>&gt;</Button>
            </div>
          </Paper>
        </Drawer>
      </div>
    )
  }

  export default withStyles(styles)(MenuBar)