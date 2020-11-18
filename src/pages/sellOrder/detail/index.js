import { FormControl, InputLabel, List, ListItem, MenuItem, Select, TextField, Input, FormHelperText } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
  }));

export default function SellOrderDetail() {
    const classes = useStyles()
    return (
        <List className={classes.root}>
            <ListItem>
                <TextField label="充电站名称" fullWidth></TextField>
            </ListItem>
            <ListItem>
                <TextField label="负责人姓名" fullWidth></TextField>
            </ListItem>
            <ListItem>
                <TextField label="负责人手机号" fullWidth></TextField>
            </ListItem>
            <ListItem>
                <FormControl fullWidth>
                    <InputLabel>省</InputLabel>
                    <Select>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </ListItem>
            <ListItem>
                <FormControl fullWidth>
                    <InputLabel>市</InputLabel>
                    <Select>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </ListItem>
            <ListItem>
                <FormControl fullWidth>
                    <InputLabel>区</InputLabel>
                    <Select>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </ListItem>
            <ListItem>
                <FormControl error={false} fullWidth>
                    <InputLabel htmlFor="component-error">物业手机号</InputLabel>
                    <Input/>
                    <FormHelperText id="component-error-text">{false ? '物业手机号码不存在' : ''}</FormHelperText>
                </FormControl>
            </ListItem>
            <ListItem>
                <TextField type="number" label="物业分成比例" fullWidth></TextField>
            </ListItem>
            <ListItem>
                <TextField type="number" label="当地电价" fullWidth></TextField>
            </ListItem>
        </List>
    )
}