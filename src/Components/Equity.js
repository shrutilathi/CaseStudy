import React, { useState, useEffect } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";
import { Tab } from "@mui/material";
import { Card, TextField, FormControl, FormLabel, Grid, styled, Box, Stack, Button, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';


import SecSummary from "./EquityComponents/SecSummary";
import SecIdentifier from "./EquityComponents/SecIdentifier";
import SecDetails from "./EquityComponents/SecDetails";
import Risk from "./EquityComponents/Risk";
import RegDetails from "./EquityComponents/RegDetails";
import ReferenceData from "./EquityComponents/ReferenceData";
import PricingDetails from "./EquityComponents/PricingDetails";
import DividentHistory from "./EquityComponents/DividentHistory";

const Item = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center'
}));

const Equity = () => {
  const [value, setValue] = React.useState("1");
  // const [data,setdata] = React.useState()
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [isInputEnabled, setInputEnabled] = useState(false);

  const enableInput = () => {
    setInputEnabled(true);
  };


  return (
    <Box sx={{ p: 2 }}>
      <Box display="flex"
        justifyContent="center"
        alignItems="center">
        <Button size="small" startIcon={<AddIcon />} variant="contained" sx={{ m: 2 }} >
          <Link to="insertEquity">Insert New Equity</Link>
        </Button>
      </Box>

      <Card variant="outlined">
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


              <Box sx={{ width: '100%' }}>
                <FormControl>
                  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Security Name</FormLabel>
                          <TextField disabled={!isInputEnabled} type="text" variant='filled' defaultValue={""} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Security Description</FormLabel>
                          <TextField disabled={!isInputEnabled} multiline type="text" variant='filled' defaultValue={"s"} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 4 }}>
                          <FormLabel sx={{ width: '150px' }}>
                            Has Position
                          </FormLabel>
                          <RadioGroup
                            sx={{ textAlign: 'center', m: 2 }}
                            row
                            name="row-radio-buttons-group"
                            defaultValue="true"
                          >
                            <FormControlLabel value="true" disabled={!isInputEnabled} control={<Radio />} label="True" />
                            <FormControlLabel value="false" disabled={!isInputEnabled} control={<Radio />} label="False" />
                          </RadioGroup>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 4 }}>
                          <FormLabel sx={{ width: '150px' }}>
                            Is Active Security
                          </FormLabel>
                          <RadioGroup
                            sx={{ textAlign: 'center', m: 2 }}
                            row
                            name="row-radio-buttons-group"
                            defaultValue="true"
                          >
                            <FormControlLabel value="true" disabled={!isInputEnabled} control={<Radio />} label="True" />
                            <FormControlLabel value="false" disabled={!isInputEnabled} control={<Radio />} label="False" />
                          </RadioGroup>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Lot Size</FormLabel>
                          <TextField disabled={!isInputEnabled} type="number" variant='filled' />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>BBG Unique Name</FormLabel>
                          <TextField disabled={!isInputEnabled} type="text" variant='filled' />
                        </Stack>
                      </Item>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} sx={{
                      m: 2,
                      p: 2

                    }}>
                      <Stack sx={{ placeContent: "center" }} direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 4 }}>
                        <Button size="small" variant="contained" onClick={enableInput} >EDIT</Button>
                        <Button size="small" variant="contained" color="error" startIcon={<DeleteIcon />}>DELETE</Button>
                        <LoadingButton
                          size="small"
                          color="success"
                          startIcon={<SaveIcon />}
                          variant="contained"
                        >
                          <span>Save</span>
                        </LoadingButton>
                      </Stack>
                    </Grid>
                  </Grid>
                </FormControl>
              </Box>
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
      </Card>
    </Box>

  )
}

export default Equity

