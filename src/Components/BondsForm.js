import React from 'react'
import {Box,Tab} from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import BSecSummary from './BondsComponents/BSecSummary';
import BSecIdentifier from './BondsComponents/BSecIdentifier';
import BSecDetails from './BondsComponents/BSecDetails';
import BRisk from './BondsComponents/BRisk';
import BRegDetails from './BondsComponents/BRegDetails';
import BRefData from './BondsComponents/BRefData';
import BPutSchedule from './BondsComponents/BPutSchedule';
import BPricingAnalytics from './BondsComponents/BPricingAnalytics';
import BCallSchedule from './BondsComponents/BCallSchedule';
const BondsForm = () => {
    const [value, setValue] = React.useState("1");

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <TabContext value={value}>
          <TabList
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="Security Summary" value="1" />
            <Tab label="Security Identifier" value="2" />
            <Tab label="Security Details" value="3" />
            <Tab label="Risk" value="4" />
            <Tab label="Regulatory Details" value="5" />
            <Tab label="Reference Data" value="6" />
            <Tab label="Put Schedule" value="7" />
            <Tab label="Pricing and Analytics" value="8" />
            <Tab label="Call Schedule" value="9" />
          </TabList>
          <TabPanel value="1">
            <BSecSummary/>
          </TabPanel>
          <TabPanel value="2">
            <BSecIdentifier/>
          </TabPanel>
          <TabPanel value="3">
            <BSecDetails/>
          </TabPanel>
          <TabPanel value="4">
            <BRisk/>
          </TabPanel>
          <TabPanel value="5">
            <BRegDetails/>
          </TabPanel>
          <TabPanel value="6">
            <BRefData/>
          </TabPanel>
          <TabPanel value="7">
            <BPutSchedule/>
          </TabPanel>
          <TabPanel value="8">
            <BPricingAnalytics/>
          </TabPanel>
          <TabPanel value="9">
            <BCallSchedule/>
          </TabPanel>
          </TabContext>
        </Box>
  )
}

export default BondsForm
