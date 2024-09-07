import { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function ToDoItem({eEl, handleToggle, removeTd, labelId}){

    return (
        <ListItem
          secondaryAction={
            <IconButton edge="end" onClick={()=>removeTd(eEl.id)} aria-label="delete">
              <CloseIcon />
            </IconButton>
          }
          disablePadding
        >
          <ListItemButton role={undefined}  onClick={()=>handleToggle(eEl.id)} dense> 
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={eEl.complete}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} sx={{textDecoration: eEl.complete? 'line-through':'none'}} primary={`${eEl.text}`} />
          </ListItemButton>
        </ListItem>
      );
}