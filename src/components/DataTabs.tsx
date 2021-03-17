import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {getData} from './TempData';

const useStyles = makeStyles((theme) => ({
  root: {        
    height: "100%",
    display: "flex",
    position: "fixed",
    alignItems: "center",
    width: "100%",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export const DataTabs = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const data = getData();

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        {data.map((item: any, index: number) => (
          <Tab label={item.title} {...a11yProps(index)} />
        ))
        }
      </Tabs>
      {data.map((item: any, index: number) => (
          <TabPanel value={value} index={index}>
            <Typography>
            distance = {item.distance}
            </Typography>

            {item.numberOfDaysOnTheWay && 
            <Typography>Number of days on the day= {item.numberOfDaysOnTheWay}</Typography>}

            <Typography>Price = {item.price}</Typography>
        </TabPanel>
        ))
        }
    </div>
  );
}
