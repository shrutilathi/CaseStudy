import React, { useEffect } from "react";
import {Box,Tab} from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import SecSummary from "./EquityComponents/SecSummary";
import SecIdentifier from "./EquityComponents/SecIdentifier";
import SecDetails from "./EquityComponents/SecDetails";
import Risk from "./EquityComponents/Risk";
import RegDetails from "./EquityComponents/RegDetails";
import ReferenceData from "./EquityComponents/ReferenceData";
import PricingDetails from "./EquityComponents/PricingDetails";
import DividentHistory from "./EquityComponents/DividentHistory";




const EquityForm = () => {
 
  const [value, setValue] = React.useState("1");
// const [data,setdata] = React.useState()
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
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
            <Tab label="Pricing Details" value="7" />
            <Tab label="Dividend History" value="8" />
          </TabList>
          <TabPanel value="1">
            <SecSummary />
          </TabPanel>
          <TabPanel value="2">
            <SecIdentifier />
          </TabPanel>
          <TabPanel value="3">
            <SecDetails />
          </TabPanel>
          <TabPanel value="4">
            <Risk />
          </TabPanel>
          <TabPanel value="5">
            <RegDetails />
          </TabPanel>
          <TabPanel value="6">
            <ReferenceData />
          </TabPanel>
          <TabPanel value="7">
            <PricingDetails />
          </TabPanel>
          <TabPanel value="8">
            <DividentHistory />
          </TabPanel>
        </TabContext>
      </Box>
      {/* 
      <Tabs aria-label="Flex one tabs">
        <TabList tabFlex={1}>
          <Tab>First tab</Tab>
          <Tab>Example of a very long tab label</Tab>
          <Tab>Third tab</Tab>
        </TabList>
      </Tabs> */}
    </div>
  );
};

export default EquityForm;
