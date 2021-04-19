import React from 'react';
import { IconButton , Avatar, ListItem, ListItemText, Typography} from '@material-ui/core';
import './ListItems.scss';
import DeleteIcon from '@material-ui/icons/Delete';
import createStyles from '@material-ui/core/styles/createStyles';
import withStyles from '@material-ui/core/styles/withStyles';

const style = theme => createStyles({
    list: {
        backgroundColor: theme.palette.background.paper
    },
    listItem: {
        '&:hover': {
            backgroundColor: theme.palette.background.listItem
        }
    },
    
});

function ListItems(props){
    const items = props.items.slice(0, 5);
    const listItems = items.map(item =>
   {
    return <div className="list" key={item.key}>      
     <div>
     <ListItem button className={"artist-item " + props.classes.listItem}>
        
     <Avatar className="artist-image"
    src={item.image ? item.image : "/assets/images/artist-default.png"}/>
    <ListItemText primary={<Typography noWrap>{item.text}</Typography>}/>
    <span>
        <IconButton aria-label="delete" className={props.classes.list} onClick={() => {
            props.deleteItem(item.key)
             }}>
          <DeleteIcon />
        </IconButton>
        </span>  
    </ListItem>
        
        </div>
    </div>})
    return <div>
     {listItems}  
    </div>;
  }

  
export default withStyles(style)(ListItems);
