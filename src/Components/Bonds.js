import React, { useState } from 'react'
import { Card, Tab, TextField, FormControl, FormLabel, Grid, styled, Box, Stack, Button, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";



const Item = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center'
}));


const Bonds = (props) => {

  const {
    bondId,
    securityDescription,
    securityName,
    assetType,
    investmentType,
    tradingFactor,
    pricingFactor,
    isin,
    bbgTicker,
    bbgUniqueId,
    cusip,
    sedol,
    firstCouponDate,
    couponCap,
    couponFloor,
    couponFrequency,
    couponRate,
    couponType,
    spread,
    callableFlag,
    fixToFloatFlag,
    putableFlag,
    issueDate,
    lastResetDate,
    maturity,
    callNotificationMaxDays,
    putNotificationMaxDays,
    penultimateCouponDate,
    resetFrequency,
    hasPosition,
    macaulayDuration,
    volatility30days,
    volatility90days,
    convexity,
    avgVolume30days,
    pfAssetClass,
    pfCountry,
    pfCreditRating,
    pfCurrency,
    pfInstrument,
    pfLiquidityProfile,
    pfMaturity,
    pfNaicsCode,
    pfRegion,
    pfSector,
    pfSubAssetClass,
    bbgIndustryGroup,
    bbgIndustrySubGroup,
    bbgIndustrySector,
    countryOfIssuance,
    issueCurrency,
    issuer,
    riskCurrency,
    putDate,
    putPrice,
    askPrice,
    highPrice,
    lowPrice,
    openPrice,
    volume,
    bidPrice,
    lastPrice,
    callDate,
    callPrice
  } = props.bondsData
  const [value, setValue] = React.useState("1");
  const [isInputEnabled, setInputEnabled] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const enableInput = () => {
    setInputEnabled(true);
  };
  return (
    // <Box sx={{ p: 2 }}>
    //   <Box display="flex"
    //     justifyContent="center"
    //     alignItems="center">
    //     <Button size="small" startIcon={<AddIcon />} variant="contained" sx={{ m: 2 }} >
    //       <Link to="insertBonds">Insert New Bonds</Link>
    //     </Button>
    //   </Box>

    //   <Card variant="outlined">
    //     <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
    //       <TabContext value={value}>
    //         <TabList
    //           onChange={handleChange}
    //           variant="scrollable"
    //           scrollButtons="auto"
    //         >
    //           <Tab label="Security Summary" value="1" />
    //           <Tab label="Security Identifier" value="2" />
    //           <Tab label="Security Details" value="3" />
    //           <Tab label="Risk" value="4" />
    //           <Tab label="Regulatory Details" value="5" />
    //           <Tab label="Reference Data" value="6" />
    //           <Tab label="Put Schedule" value="7" />
    //           <Tab label="Pricing and Analytics" value="8" />
    //           <Tab label="Call Schedule" value="9" />
    //         </TabList>
    //         <TabPanel value="1">


    //           <Box sx={{ width: '100%' }}>
    //             <FormControl>
    //               <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
    //                       <FormLabel sx={{ width: '150px' }}>Security Description</FormLabel>
    //                       <TextField disabled={!isInputEnabled} type="text" variant='filled' defaultValue={"s"} />
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
    //                       <FormLabel sx={{ width: '150px' }}>Security Name</FormLabel>
    //                       <TextField disabled={!isInputEnabled} multiline type="text" variant='filled' defaultValue={"des"} />
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
    //                       <FormLabel sx={{ width: '150px' }}>Asset Type</FormLabel>
    //                       <TextField disabled={!isInputEnabled} type="text" variant='filled' />
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
    //                       <FormLabel sx={{ width: '150px' }}>Investment Type</FormLabel>
    //                       <TextField disabled={!isInputEnabled} type="text" variant='filled' />
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
    //                       <FormLabel sx={{ width: '150px' }}>Trading Factor</FormLabel>
    //                       <TextField disabled={!isInputEnabled} type="text" variant='filled' />
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
    //                       <FormLabel sx={{ width: '150px' }}>Pricing Factor</FormLabel>
    //                       <TextField disabled={!isInputEnabled} type="text" variant='filled' />
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={12} md={12} sx={{
    //                   m: 2,
    //                   p: 2

    //                 }}>
    //                   <Stack sx={{ placeContent: "center" }} direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 4 }}>
    //                     <Button size="small" variant="contained" onClick={enableInput}>EDIT</Button>
    //                     <Button size="small" variant="contained" color="error" startIcon={<DeleteIcon />}>DELETE</Button>
    //                     <LoadingButton
    //                       size="small"
    //                       color="success"
    //                       startIcon={<SaveIcon />}
    //                       variant="contained"
    //                     >
    //                       <span>Save</span>
    //                     </LoadingButton>
    //                   </Stack>
    //                 </Grid>
    //               </Grid>
    //             </FormControl>
    //           </Box>
    //         </TabPanel>
    //         <TabPanel value="2">
    //           <Box sx={{ width: '100%' }}>
    //             <FormControl>
    //               <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
    //                       <FormLabel sx={{ width: '150px' }}>ISIN</FormLabel>
    //                       <TextField disabled={!isInputEnabled} type="text" variant='filled' />
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
    //                       <FormLabel sx={{ width: '150px' }}>Bloomberg Ticker</FormLabel>
    //                       <TextField disabled={!isInputEnabled} type="text" variant='filled' />
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
    //                       <FormLabel sx={{ width: '150px' }}>Bloomberg Unique ID</FormLabel>
    //                       <TextField disabled={!isInputEnabled} type="text" variant='filled' />
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
    //                       <FormLabel sx={{ width: '150px' }}>CUSIP</FormLabel>
    //                       <TextField disabled={!isInputEnabled} type="text" variant='filled' />
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
    //                       <FormLabel sx={{ width: '150px' }}>SEDOL</FormLabel>
    //                       <TextField disabled={!isInputEnabled} type="text" variant='filled' />
    //                     </Stack>
    //                   </Item>
    //                 </Grid>

    //                 <Grid item xs={12} sm={12} md={12} sx={{
    //                   m: 2,
    //                   p: 2

    //                 }}>
    //                   <Stack sx={{ placeContent: "center" }} direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 4 }}>
    //                     <Button size="small" variant="contained" onClick={enableInput} >EDIT</Button>
    //                     <Button size="small" variant="contained" color="error" startIcon={<DeleteIcon />}>DELETE</Button>
    //                     <LoadingButton
    //                       size="small"
    //                       color="success"
    //                       startIcon={<SaveIcon />}
    //                       variant="contained"
    //                     >
    //                       <span>Save</span>
    //                     </LoadingButton>
    //                   </Stack>
    //                 </Grid>
    //               </Grid>
    //             </FormControl>
    //           </Box>
    //         </TabPanel>
    //         <TabPanel value="3">
    //           <Box sx={{ width: '100%' }}>
    //             <FormControl>

    //               <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
    //                       <FormLabel sx={{ width: '150px' }}>First Coupon Date</FormLabel>
    //                       <TextField
    //                         type="date"
    //                         name='FirstCouponDate'
    //                         variant='filled'
    //                       // value={equity.IpoDate}
    //                       // onChange={handleValueChange}
    //                       />
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
    //                       <FormLabel sx={{ width: '150px' }}>Coupon Cap</FormLabel>
    //                       <TextField disabled={!isInputEnabled} type="text" variant='filled' />
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
    //                       <FormLabel sx={{ width: '150px' }}>Coupon Floor</FormLabel>
    //                       <TextField disabled={!isInputEnabled} type="text" variant='filled' />
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
    //                       <FormLabel sx={{ width: '150px' }}>Coupon Frequency</FormLabel>
    //                       <TextField disabled={!isInputEnabled} type="text" variant='filled' />
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
    //                       <FormLabel sx={{ width: '150px' }}>Coupon Rate</FormLabel>
    //                       <TextField disabled={!isInputEnabled} type="text" variant='filled' />
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
    //                       <FormLabel sx={{ width: '150px' }}>Coupon Type</FormLabel>
    //                       <TextField disabled={!isInputEnabled} type="text" variant='filled' />
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
    //                       <FormLabel sx={{ width: '150px' }}>  Float Spread</FormLabel>
    //                       <TextField disabled={!isInputEnabled} type="text" variant='filled' />
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 4 }}>
    //                       <FormLabel sx={{ width: '150px' }}>
    //                         Is Callable
    //                       </FormLabel>
    //                       <RadioGroup
    //                         sx={{ textAlign: 'center', m: 2 }}
    //                         row
    //                         name="row-radio-buttons-group"
    //                       >
    //                         <FormControlLabel value="true" disabled={!isInputEnabled} control={<Radio />} label="True" />
    //                         <FormControlLabel value="false" disabled={!isInputEnabled} control={<Radio />} label="False" />
    //                       </RadioGroup>
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 4 }}>
    //                       <FormLabel sx={{ width: '150px' }}>
    //                         IsFix to Float
    //                       </FormLabel>
    //                       <RadioGroup
    //                         sx={{ textAlign: 'center', m: 2 }}
    //                         row
    //                         name="row-radio-buttons-group"
    //                       >
    //                         <FormControlLabel value="true" disabled={!isInputEnabled} control={<Radio />} label="True" />
    //                         <FormControlLabel value="false" disabled={!isInputEnabled} control={<Radio />} label="False" />
    //                       </RadioGroup>
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 4 }}>
    //                       <FormLabel sx={{ width: '150px' }}>
    //                         Is Putable
    //                       </FormLabel>
    //                       <RadioGroup
    //                         sx={{ textAlign: 'center', m: 2 }}
    //                         row
    //                         name="row-radio-buttons-group"
    //                       >
    //                         <FormControlLabel value="true" disabled={!isInputEnabled} control={<Radio />} label="True" />
    //                         <FormControlLabel value="false" disabled={!isInputEnabled} control={<Radio />} label="False" />
    //                       </RadioGroup>
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
    //                       <FormLabel sx={{ width: '150px' }}>Last Reset Date</FormLabel>
    //                       <TextField
    //                         type="date"
    //                         name='FirstCouponDate'
    //                         variant='filled'
    //                       // value={equity.IpoDate}
    //                       // onChange={handleValueChange}
    //                       />
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
    //                       <FormLabel sx={{ width: '150px' }}>Maturity</FormLabel>
    //                       <TextField
    //                         type="date"
    //                         name='FirstCouponDate'
    //                         variant='filled'
    //                       // value={equity.IpoDate}
    //                       // onChange={handleValueChange}
    //                       />
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
    //                       <FormLabel sx={{ width: '150px' }}>Maximum Call Notice Days</FormLabel>
    //                       <TextField disabled={!isInputEnabled} type="text" variant='filled' />
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
    //                       <FormLabel sx={{ width: '150px' }}>Maximum Put Notice Days</FormLabel>
    //                       <TextField disabled={!isInputEnabled} type="text" variant='filled' />
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
    //                       <FormLabel sx={{ width: '150px' }}> Penultimate Coupon Date</FormLabel>
    //                       <TextField
    //                         type="date"
    //                         name='FirstCouponDate'
    //                         variant='filled'
    //                       // value={equity.IpoDate}
    //                       // onChange={handleValueChange}
    //                       />
    //                     </Stack>
    //                   </Item>
    //                 </Grid>

    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
    //                       <FormLabel sx={{ width: '150px' }}>Reset Frequency</FormLabel>
    //                       <TextField disabled={!isInputEnabled} type="text" variant='filled' />
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 4 }}>
    //                       <FormLabel sx={{ width: '150px' }}>
    //                         Has Position
    //                       </FormLabel>
    //                       <RadioGroup
    //                         sx={{ textAlign: 'center', m: 2 }}
    //                         row
    //                         name="row-radio-buttons-group"
    //                       >
    //                         <FormControlLabel value="true" disabled={!isInputEnabled} control={<Radio />} label="True" />
    //                         <FormControlLabel value="false" disabled={!isInputEnabled} control={<Radio />} label="False" />
    //                       </RadioGroup>
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={12} md={12} sx={{
    //                   m: 2,
    //                   p: 2

    //                 }}>
    //                   <Stack sx={{ placeContent: "center" }} direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 4 }}>
    //                     <Button size="small" variant="contained" onClick={enableInput}>EDIT</Button>
    //                     <Button size="small" variant="contained" color="error" startIcon={<DeleteIcon />}>DELETE</Button>
    //                     <LoadingButton
    //                       size="small"
    //                       color="success"
    //                       startIcon={<SaveIcon />}
    //                       variant="contained"
    //                     >
    //                       <span>Save</span>
    //                     </LoadingButton>
    //                   </Stack>
    //                 </Grid>
    //               </Grid>
    //             </FormControl>
    //           </Box>
    //         </TabPanel>
    //         <TabPanel value="4">
    //           <Box sx={{ width: '100%' }}>
    //             <FormControl>
    //               <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
    //                       <FormLabel sx={{ width: '150px' }}>Macaulay Duration</FormLabel>
    //                       <TextField disabled={!isInputEnabled} type="text" variant='filled' />
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
    //                       <FormLabel sx={{ width: '150px' }}>30D Volatility</FormLabel>
    //                       <TextField disabled={!isInputEnabled} type="text" variant='filled' />
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
    //                       <FormLabel sx={{ width: '150px' }}>90D Volatility</FormLabel>
    //                       <TextField disabled={!isInputEnabled} type="text" variant='filled' />
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
    //                       <FormLabel sx={{ width: '150px' }}>Convexty</FormLabel>
    //                       <TextField disabled={!isInputEnabled} type="text" variant='filled' />
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
    //                       <FormLabel sx={{ width: '150px' }}>30Day Average Volume</FormLabel>
    //                       <TextField disabled={!isInputEnabled} type="text" variant='filled' />
    //                     </Stack>
    //                   </Item>
    //                 </Grid>

    //                 <Grid item xs={12} sm={12} md={12} sx={{
    //                   m: 2,
    //                   p: 2

    //                 }}>
    //                   <Stack sx={{ placeContent: "center" }} direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 4 }}>
    //                     <Button size="small" variant="contained" onClick={enableInput}>EDIT</Button>
    //                     <Button size="small" variant="contained" color="error" startIcon={<DeleteIcon />}>DELETE</Button>
    //                     <LoadingButton
    //                       size="small"
    //                       color="success"
    //                       startIcon={<SaveIcon />}
    //                       variant="contained"
    //                     >
    //                       <span>Save</span>
    //                     </LoadingButton>
    //                   </Stack>
    //                 </Grid>
    //               </Grid>
    //             </FormControl>
    //           </Box>
    //         </TabPanel>
    //         <TabPanel value="5">
    //           <Box sx={{ width: '100%' }}>
    //             <FormControl>
    //               <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
    //                       <FormLabel sx={{ width: '150px' }}>PF Assest Class</FormLabel>
    //                       <TextField disabled={!isInputEnabled} type="text" variant='filled' />
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
    //                       <FormLabel sx={{ width: '150px' }}>PF Country</FormLabel>
    //                       <TextField disabled={!isInputEnabled} type="text" variant='filled' />
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
    //                       <FormLabel sx={{ width: '150px' }}>PF Credit Rating</FormLabel>
    //                       <TextField disabled={!isInputEnabled} type="text" variant='filled' />
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
    //                       <FormLabel sx={{ width: '150px' }}>PF Currency</FormLabel>
    //                       <TextField disabled={!isInputEnabled} type="text" variant='filled' />
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
    //                       <FormLabel sx={{ width: '150px' }}>PF Instrument</FormLabel>
    //                       <TextField disabled={!isInputEnabled} type="text" variant='filled' />
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
    //                       <FormLabel sx={{ width: '150px' }}>PF Liquidity Profile</FormLabel>
    //                       <TextField disabled={!isInputEnabled} type="text" variant='filled' />
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
    //                       <FormLabel sx={{ width: '150px' }}>PF Maturity</FormLabel>
    //                       <TextField disabled={!isInputEnabled} type="text" variant='filled' />
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
    //                       <FormLabel sx={{ width: '150px' }}>PF NAICS Code</FormLabel>
    //                       <TextField disabled={!isInputEnabled} type="text" variant='filled' />
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
    //                       <FormLabel sx={{ width: '150px' }}>PF Region</FormLabel>
    //                       <TextField disabled={!isInputEnabled} type="text" variant='filled' />
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
    //                       <FormLabel sx={{ width: '150px' }}>PF Sector</FormLabel>
    //                       <TextField disabled={!isInputEnabled} type="text" variant='filled' />
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
    //                       <FormLabel sx={{ width: '150px' }}>PF Sub Asset Class</FormLabel>
    //                       <TextField disabled={!isInputEnabled} type="text" variant='filled' />
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={12} md={12} sx={{
    //                   m: 2,
    //                   p: 2

    //                 }}>
    //                   <Stack sx={{ placeContent: "center" }} direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 4 }}>
    //                     <Button size="small" variant="contained" onClick={enableInput}>EDIT</Button>
    //                     <Button size="small" variant="contained" color="error" startIcon={<DeleteIcon />}>DELETE</Button>
    //                     <LoadingButton
    //                       size="small"
    //                       color="success"
    //                       startIcon={<SaveIcon />}
    //                       variant="contained"
    //                     >
    //                       <span>Save</span>
    //                     </LoadingButton>
    //                   </Stack>
    //                 </Grid>
    //               </Grid>
    //             </FormControl>
    //           </Box>
    //         </TabPanel>
    //         <TabPanel value="6">
    //           <Box sx={{ width: '100%' }}>
    //             <FormControl>
    //               <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
    //                       <FormLabel sx={{ width: '150px' }}>Bloomberg Industry Group</FormLabel>
    //                       <TextField disabled={!isInputEnabled} type="text" variant='filled' />
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
    //                       <FormLabel sx={{ width: '150px' }}>Bloomberg Industry Sub Group</FormLabel>
    //                       <TextField disabled={!isInputEnabled} type="text" variant='filled' />
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
    //                       <FormLabel sx={{ width: '150px' }}>Bloomberg Industry Sector</FormLabel>
    //                       <TextField disabled={!isInputEnabled} type="text" variant='filled' />
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
    //                       <FormLabel sx={{ width: '150px' }}>Country of Issuance</FormLabel>
    //                       <TextField disabled={!isInputEnabled} type="text" variant='filled' />
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
    //                       <FormLabel sx={{ width: '150px' }}>Issue Currency</FormLabel>
    //                       <TextField disabled={!isInputEnabled} type="text" variant='filled' />
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
    //                       <FormLabel sx={{ width: '150px' }}>Issuer</FormLabel>
    //                       <TextField disabled={!isInputEnabled} type="text" variant='filled' />
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
    //                       <FormLabel sx={{ width: '150px' }}>Risk Currency</FormLabel>
    //                       <TextField disabled={!isInputEnabled} type="text" variant='filled' />
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={12} md={12} sx={{
    //                   m: 2,
    //                   p: 2

    //                 }}>
    //                   <Stack sx={{ placeContent: "center" }} direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 4 }}>
    //                     <Button size="small" variant="contained" onClick={enableInput}>EDIT</Button>
    //                     <Button size="small" variant="contained" color="error" startIcon={<DeleteIcon />}>DELETE</Button>
    //                     <LoadingButton
    //                       size="small"
    //                       color="success"
    //                       startIcon={<SaveIcon />}
    //                       variant="contained"
    //                     >
    //                       <span>Save</span>
    //                     </LoadingButton>
    //                   </Stack>
    //                 </Grid>
    //               </Grid>
    //             </FormControl>
    //           </Box>
    //         </TabPanel>
    //         <TabPanel value="7">
    //           <Box sx={{ width: '100%' }}>
    //             <FormControl>
    //               <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
    //                       <FormLabel sx={{ width: '150px' }}> Put Date</FormLabel>
    //                       <TextField
    //                         type="date"
    //                         name='PutDate'
    //                         variant='filled'
    //                       // value={equity.IpoDate}
    //                       // onChange={handleValueChange}
    //                       />
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
    //                       <FormLabel sx={{ width: '150px' }}>Put Price</FormLabel>
    //                       <TextField disabled={!isInputEnabled} type="text" variant='filled' />
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={12} md={12} sx={{
    //                   m: 2,
    //                   p: 2

    //                 }}>
    //                   <Stack sx={{ placeContent: "center" }} direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 4 }}>
    //                     <Button size="small" variant="contained" onClick={enableInput}>EDIT</Button>
    //                     <Button size="small" variant="contained" color="error" startIcon={<DeleteIcon />}>DELETE</Button>
    //                     <LoadingButton
    //                       size="small"
    //                       color="success"
    //                       startIcon={<SaveIcon />}
    //                       variant="contained"
    //                     >
    //                       <span>Save</span>
    //                     </LoadingButton>
    //                   </Stack>
    //                 </Grid>
    //               </Grid>
    //             </FormControl>
    //           </Box>
    //         </TabPanel>
    //         <TabPanel value="8">
    //           <Box sx={{ width: '100%' }}>
    //             <FormControl>
    //               <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
    //                       <FormLabel sx={{ width: '150px' }}>Ask Price</FormLabel>
    //                       <TextField disabled={!isInputEnabled} type="text" variant='filled' />
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
    //                       <FormLabel sx={{ width: '150px' }}>High Price</FormLabel>
    //                       <TextField disabled={!isInputEnabled} type="text" variant='filled' />
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
    //                       <FormLabel sx={{ width: '150px' }}>Low Price</FormLabel>
    //                       <TextField disabled={!isInputEnabled} type="text" variant='filled' />
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
    //                       <FormLabel sx={{ width: '150px' }}>Open Price</FormLabel>
    //                       <TextField disabled={!isInputEnabled} type="text" variant='filled' />
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
    //                       <FormLabel sx={{ width: '150px' }}>Volume</FormLabel>
    //                       <TextField disabled={!isInputEnabled} type="text" variant='filled' />
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
    //                       <FormLabel sx={{ width: '150px' }}>Bid Price</FormLabel>
    //                       <TextField disabled={!isInputEnabled} type="text" variant='filled' />
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
    //                       <FormLabel sx={{ width: '150px' }}>Last Price</FormLabel>
    //                       <TextField disabled={!isInputEnabled} type="text" variant='filled' />
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={12} md={12} sx={{
    //                   m: 2,
    //                   p: 2

    //                 }}>
    //                   <Stack sx={{ placeContent: "center" }} direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 4 }}>
    //                     <Button size="small" variant="contained" onClick={enableInput}>EDIT</Button>
    //                     <Button size="small" variant="contained" color="error" startIcon={<DeleteIcon />}>DELETE</Button>
    //                     <LoadingButton
    //                       size="small"
    //                       color="success"
    //                       startIcon={<SaveIcon />}
    //                       variant="contained"
    //                     >
    //                       <span>Save</span>
    //                     </LoadingButton>
    //                   </Stack>
    //                 </Grid>
    //               </Grid>
    //             </FormControl>
    //           </Box>
    //         </TabPanel>
    //         <TabPanel value="9">
    //           <Box sx={{ width: '100%' }}>
    //             <FormControl>
    //               <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
    //                       <FormLabel sx={{ width: '150px' }}> Call Date</FormLabel>
    //                       <TextField
    //                         type="date"
    //                         name='FirstCouponDate'
    //                         variant='filled'
    //                       // value={equity.IpoDate}
    //                       // onChange={handleValueChange}
    //                       />
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={6} md={6}>
    //                   <Item>
    //                     <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
    //                       <FormLabel sx={{ width: '150px' }}>Call Price</FormLabel>
    //                       <TextField disabled={!isInputEnabled} defaultValue="hi" type="text" variant='filled' />
    //                     </Stack>
    //                   </Item>
    //                 </Grid>
    //                 <Grid item xs={12} sm={12} md={12} sx={{
    //                   m: 2,
    //                   p: 2

    //                 }}>
    //                   <Stack sx={{ placeContent: "center" }} direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 4 }}>
    //                     <Button size="small" variant="contained" onClick={enableInput} >EDIT</Button>
    //                     <Button size="small" variant="contained" color="error" startIcon={<DeleteIcon />}>DELETE</Button>
    //                     <LoadingButton
    //                       size="small"
    //                       color="success"
    //                       startIcon={<SaveIcon />}
    //                       variant="contained"
    //                     >
    //                       <span>Save</span>
    //                     </LoadingButton>
    //                   </Stack>
    //                 </Grid>
    //               </Grid>
    //             </FormControl>
    //           </Box>
    //         </TabPanel>
    //       </TabContext>
    //     </Box>
    //   </Card>
    // </Box>

    <Box sx={{ p: 2 }}>
      <Box display="flex"
        justifyContent="center"
        alignItems="center">
        <Button size="small" startIcon={<AddIcon />} variant="contained" sx={{ m: 2 }} >
          acf
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
              <Tab label="Put Schedule" value="7" />
              <Tab label="Pricing and Analytics" value="8" />
              <Tab label="Call Schedule" value="9" />
            </TabList>
            <TabPanel value="1">


              <Box sx={{ width: '100%' }}>
                <FormControl>
                  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Security Description</FormLabel>
                          <TextField disabled={!isInputEnabled} type="text" variant='filled' name="securityDescription" defaultValue={securityDescription} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Security Name</FormLabel>
                          <TextField disabled={!isInputEnabled} multiline type="text" variant='filled' name="securityName" defaultValue={securityName} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Asset Type</FormLabel>
                          <TextField disabled={!isInputEnabled} type="text" variant='filled' name="assetType" defaultValue={assetType} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Investment Type</FormLabel>
                          <TextField disabled={!isInputEnabled} type="text" variant='filled' name="investmentType" defaultValue={investmentType} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Trading Factor</FormLabel>
                          <TextField disabled={!isInputEnabled} type="text" variant='filled' name="tradingFactor" defaultValue={tradingFactor} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Pricing Factor</FormLabel>
                          <TextField disabled={!isInputEnabled} type="text" variant='filled' name="pricingFactor" defaultValue={pricingFactor} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} sx={{
                      m: 2,
                      p: 2

                    }}>
                      <Stack sx={{ placeContent: "center" }} direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 4 }}>
                        <Button size="small" variant="contained" onClick={enableInput}>EDIT</Button>
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
              <Box sx={{ width: '100%' }}>
                <FormControl>
                  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>ISIN</FormLabel>
                          <TextField disabled={!isInputEnabled} type="text" variant='filled' name="isin" defaultValue={isin} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Bloomberg Ticker</FormLabel>
                          <TextField disabled={!isInputEnabled} type="text" variant='filled' name="bbgTicker" defaultValue={bbgTicker} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Bloomberg Unique ID</FormLabel>
                          <TextField disabled={!isInputEnabled} type="text" variant='filled' name="bbgUniqueId" defaultValue={bbgUniqueId} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>CUSIP</FormLabel>
                          <TextField disabled={!isInputEnabled} type="text" variant='filled' name="cusip" defaultValue={cusip} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>SEDOL</FormLabel>
                          <TextField disabled={!isInputEnabled} type="text" variant='filled' name="sedol" defaultValue={sedol} />
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
            <TabPanel value="3">
              <Box sx={{ width: '100%' }}>
                <FormControl>

                  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>First Coupon Date</FormLabel>
                          <TextField
                            type="date"
                            name='FirstCouponDate'
                            variant='filled'

                          // value={equity.IpoDate}
                          // onChange={handleValueChange}
                          />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Coupon Cap</FormLabel>
                          <TextField disabled={!isInputEnabled} type="text" variant='filled' name="couponCap" defaultValue={couponCap} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Coupon Floor</FormLabel>
                          <TextField disabled={!isInputEnabled} type="text" variant='filled' name="couponFloor" defaultValue={couponFloor} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Coupon Frequency</FormLabel>
                          <TextField disabled={!isInputEnabled} type="text" variant='filled' name="couponFrequency" defaultValue={couponFrequency} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Coupon Rate</FormLabel>
                          <TextField disabled={!isInputEnabled} type="text" variant='filled' name="couponRate" defaultValue={couponRate} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Coupon Type</FormLabel>
                          <TextField disabled={!isInputEnabled} type="text" variant='filled' name="couponType" defaultValue={couponType} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>  Float Spread</FormLabel>
                          <TextField disabled={!isInputEnabled} type="text" variant='filled' name="spread" defaultValue={spread} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 4 }}>
                          <FormLabel sx={{ width: '150px' }}>
                            Is Callable
                          </FormLabel>
                          <RadioGroup
                            sx={{ textAlign: 'center', m: 2 }}
                            row
                            name="row-radio-buttons-group"
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
                            IsFix to Float
                          </FormLabel>
                          <RadioGroup
                            sx={{ textAlign: 'center', m: 2 }}
                            row
                            name="row-radio-buttons-group"
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
                            Is Putable
                          </FormLabel>
                          <RadioGroup
                            sx={{ textAlign: 'center', m: 2 }}
                            row
                            name="row-radio-buttons-group"
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
                          <FormLabel sx={{ width: '150px' }}>Last Reset Date</FormLabel>
                          <TextField
                            type="date"
                            name='FirstCouponDate'
                            variant='filled'
                            name="lastResetDate" defaultValue={lastResetDate}
                          // value={equity.IpoDate}
                          // onChange={handleValueChange}
                          />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Maturity</FormLabel>
                          <TextField
                            type="date"
                            name='FirstCouponDate'
                            variant='filled'
                            name="maturity" defaultValue={maturity}
                          // value={equity.IpoDate}
                          // onChange={handleValueChange}
                          />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Maximum Call Notice Days</FormLabel>
                          <TextField disabled={!isInputEnabled} type="text" variant='filled' name="callNotificationMaxDays" defaultValue={callNotificationMaxDays} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Maximum Put Notice Days</FormLabel>
                          <TextField disabled={!isInputEnabled} type="text" variant='filled' name="putNotificationMaxDays" defaultValue={putNotificationMaxDays} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}> Penultimate Coupon Date</FormLabel>
                          <TextField
                            type="date"
                            name='FirstCouponDate'
                            variant='filled'
                            name="penultimateCouponDate" defaultValue={penultimateCouponDate}
                          // value={equity.IpoDate}
                          // onChange={handleValueChange}
                          />
                        </Stack>
                      </Item>
                    </Grid>

                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Reset Frequency</FormLabel>
                          <TextField disabled={!isInputEnabled} type="text" variant='filled' name="resetFrequency" defaultValue={resetFrequency} />
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
                          >
                            <FormControlLabel value="true" disabled={!isInputEnabled} control={<Radio />} label="True" />
                            <FormControlLabel value="false" disabled={!isInputEnabled} control={<Radio />} label="False" />
                          </RadioGroup>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} sx={{
                      m: 2,
                      p: 2

                    }}>
                      <Stack sx={{ placeContent: "center" }} direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 4 }}>
                        <Button size="small" variant="contained" onClick={enableInput}>EDIT</Button>
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
            <TabPanel value="4">
              <Box sx={{ width: '100%' }}>
                <FormControl>
                  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Macaulay Duration</FormLabel>
                          <TextField disabled={!isInputEnabled} type="text" variant='filled' name="macaulayDuration" defaultValue={macaulayDuration} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>30D Volatility</FormLabel>
                          <TextField disabled={!isInputEnabled} type="text" variant='filled' name="volatility30days" defaultValue={volatility30days} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>90D Volatility</FormLabel>
                          <TextField disabled={!isInputEnabled} type="text" variant='filled' name="volatility90days" defaultValue={volatility90days} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Convexity</FormLabel>
                          <TextField disabled={!isInputEnabled} type="text" variant='filled' name="convexity" defaultValue={convexity} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>30Day Average Volume</FormLabel>
                          <TextField disabled={!isInputEnabled} type="text" variant='filled' name="avgVolume30days" defaultValue={avgVolume30days} />
                        </Stack>
                      </Item>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} sx={{
                      m: 2,
                      p: 2

                    }}>
                      <Stack sx={{ placeContent: "center" }} direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 4 }}>
                        <Button size="small" variant="contained" onClick={enableInput}>EDIT</Button>
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
            <TabPanel value="5">
              <Box sx={{ width: '100%' }}>
                <FormControl>
                  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>PF Assest Class</FormLabel>
                          <TextField disabled={!isInputEnabled} type="text" variant='filled' name="pfAssetClass" defaultValue={pfAssetClass} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>PF Country</FormLabel>
                          <TextField disabled={!isInputEnabled} type="text" variant='filled' name="pfCountry" defaultValue={pfCountry} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>PF Credit Rating</FormLabel>
                          <TextField disabled={!isInputEnabled} type="text" variant='filled' name="pfCreditRating" defaultValue={pfCreditRating} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>PF Currency</FormLabel>
                          <TextField disabled={!isInputEnabled} type="text" variant='filled' name="pfCurrency" defaultValue={pfCurrency} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>PF Instrument</FormLabel>
                          <TextField disabled={!isInputEnabled} type="text" variant='filled' name="pfInstrument" defaultValue={pfInstrument} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>PF Liquidity Profile</FormLabel>
                          <TextField disabled={!isInputEnabled} type="text" variant='filled' name="pfLiquidityProfile" defaultValue={pfLiquidityProfile} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>PF Maturity</FormLabel>
                          <TextField disabled={!isInputEnabled} type="text" variant='filled' name="pfMaturity" defaultValue={pfMaturity} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>PF NAICS Code</FormLabel>
                          <TextField disabled={!isInputEnabled} type="text" variant='filled' name="pfNaicsCode" defaultValue={pfNaicsCode} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>PF Region</FormLabel>
                          <TextField disabled={!isInputEnabled} type="text" variant='filled' name="pfRegion" defaultValue={pfRegion} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>PF Sector</FormLabel>
                          <TextField disabled={!isInputEnabled} type="text" variant='filled' name="pfSector" defaultValue={pfSector} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>PF Sub Asset Class</FormLabel>
                          <TextField disabled={!isInputEnabled} type="text" variant='filled' name="pfSubAssetClass" defaultValue={pfSubAssetClass} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} sx={{
                      m: 2,
                      p: 2

                    }}>
                      <Stack sx={{ placeContent: "center" }} direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 4 }}>
                        <Button size="small" variant="contained" onClick={enableInput}>EDIT</Button>
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
            <TabPanel value="6">
              <Box sx={{ width: '100%' }}>
                <FormControl>
                  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Bloomberg Industry Group</FormLabel>
                          <TextField disabled={!isInputEnabled} type="text" variant='filled' name="bbgIndustryGroup" defaultValue={bbgIndustryGroup} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Bloomberg Industry Sub Group</FormLabel>
                          <TextField disabled={!isInputEnabled} type="text" variant='filled' name="bbgIndustrySubGroup" defaultValue={bbgIndustrySubGroup} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Bloomberg Industry Sector</FormLabel>
                          <TextField disabled={!isInputEnabled} type="text" variant='filled' name="bbgIndustrySector" defaultValue={bbgIndustrySector} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Country of Issuance</FormLabel>
                          <TextField disabled={!isInputEnabled} type="text" variant='filled' name="countryOfIssuance" defaultValue={countryOfIssuance} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Issue Currency</FormLabel>
                          <TextField disabled={!isInputEnabled} type="text" variant='filled' name="issueCurrency" defaultValue={issueCurrency} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Issuer</FormLabel>
                          <TextField disabled={!isInputEnabled} type="text" variant='filled' name="issuer" defaultValue={issuer} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Risk Currency</FormLabel>
                          <TextField disabled={!isInputEnabled} type="text" variant='filled' name="riskCurrency" defaultValue={riskCurrency} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} sx={{
                      m: 2,
                      p: 2

                    }}>
                      <Stack sx={{ placeContent: "center" }} direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 4 }}>
                        <Button size="small" variant="contained" onClick={enableInput}>EDIT</Button>
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
            <TabPanel value="7">
              <Box sx={{ width: '100%' }}>
                <FormControl>
                  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}> Put Date</FormLabel>
                          <TextField
                            type="date"
                            name='PutDate'
                            variant='filled'
                            name="putDate" defaultValue={putDate}
                          // value={equity.IpoDate}
                          // onChange={handleValueChange}
                          />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Put Price</FormLabel>
                          <TextField disabled={!isInputEnabled} type="text" variant='filled' name="putPrice" defaultValue={putPrice} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} sx={{
                      m: 2,
                      p: 2

                    }}>
                      <Stack sx={{ placeContent: "center" }} direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 4 }}>
                        <Button size="small" variant="contained" onClick={enableInput}>EDIT</Button>
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
            <TabPanel value="8">
              <Box sx={{ width: '100%' }}>
                <FormControl>
                  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Ask Price</FormLabel>
                          <TextField disabled={!isInputEnabled} type="text" variant='filled' name="askPrice" defaultValue={askPrice} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>High Price</FormLabel>
                          <TextField disabled={!isInputEnabled} type="text" variant='filled' name="highPrice" defaultValue={highPrice} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Low Price</FormLabel>
                          <TextField disabled={!isInputEnabled} type="text" variant='filled' name="lowPrice" defaultValue={lowPrice} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Open Price</FormLabel>
                          <TextField disabled={!isInputEnabled} type="text" variant='filled' name="openPrice" defaultValue={openPrice} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Volume</FormLabel>
                          <TextField disabled={!isInputEnabled} type="text" variant='filled' name="volume" defaultValue={volume} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Bid Price</FormLabel>
                          <TextField disabled={!isInputEnabled} type="text" variant='filled' name="bidPrice" defaultValue={bidPrice} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Last Price</FormLabel>
                          <TextField disabled={!isInputEnabled} type="text" variant='filled' name="lastPrice" defaultValue={lastPrice} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} sx={{
                      m: 2,
                      p: 2

                    }}>
                      <Stack sx={{ placeContent: "center" }} direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 4 }}>
                        <Button size="small" variant="contained" onClick={enableInput}>EDIT</Button>
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
            <TabPanel value="9">
              <Box sx={{ width: '100%' }}>
                <FormControl>
                  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}> Call Date</FormLabel>
                          <TextField
                            type="date"
                            name='FirstCouponDate'
                            variant='filled'
                            name="callDate" defaultValue={callDate}
                          // value={equity.IpoDate}
                          // onChange={handleValueChange}
                          />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Call Price</FormLabel>
                          <TextField disabled={!isInputEnabled} defaultValue="callPrice" name="callPrice" type="text" variant='filled' />
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
          </TabContext>
        </Box>
      </Card>
    </Box>
  )
}

export default Bonds
