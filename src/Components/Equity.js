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
import axios from 'axios';



const Item = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center'
}));

const Equity = (props) => {

  const {
    securityId,
    securityName,
    securityDescription,
    hasPosition,
    isActiveSecurity,
    lotSize,
    bbgUniqueName,
    cusip,
    isin,
    sedol,
    bloombergTicker,
    bloombergUniqueId,
    bbgGlobalId,
    tickerAndExchange,
    isAdrFlag,
    adrUnderlyingTicker,
    adrUnderlyingCurrency,
    sharesPerAdr,
    ipoDate,
    pricingCurrency,
    settleDays,
    totalSharesOutstanding,
    votingRightsPerShare,
    averageVolume,
    beta,
    shortInterest,
    returns,
    volatility,
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
    countryOfIssuance,
    exchange,
    issuer,
    issueCurrency,
    tradingCurrency,
    bbgIndustrySubGroup,
    bloombergIndustryGroup,
    bloombergSector,
    countryOfIncorporation,
    riskCurrency,
    openPrice,
    closePrice,
    volume,
    lastPrice,
    askPrice,
    bidPrice,
    peRatio,
    dividendDeclaredDate,
    dividendExDate,
    dividendRecordDate,
    dividendPayDate,
    dividendAmount,
    frequency,
    dividendType
  }=props.eqData

  const formattedipoDate = ipoDate ? ipoDate.split('T')[0] : '';
  const formattedDividendDate = dividendDeclaredDate ? dividendDeclaredDate.split('T')[0] : '';
  const formattedExDate = dividendExDate ? dividendExDate.split('T')[0] : '';
  const formattedRecordDate = dividendRecordDate ? dividendRecordDate.split('T')[0] : '';
  const formattedPayDate = dividendPayDate ? dividendPayDate.split('T')[0] : '';

  const handleDelete = ()=>{

        axios.delete(`http://localhost:5150/api/Equity/DeleteEquity/${securityId}`)
        .then(res => {alert("Record Deleted Successfully");
window.location.reload(true)})
        .catch(err => {alert("Please Enter Valid Security ID")});
  }

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
                          <TextField multiline disabled={!isInputEnabled} type="text" variant='filled' name=""name="securityName" defaultValue={securityName} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Security Description</FormLabel>
                          <TextField multiline disabled={!isInputEnabled} multiline type="text" variant='filled' name=""name="securityDescription" defaultValue={securityDescription} />
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
                            name="hasPosition"
                            value={hasPosition}
                          >
                            <FormControlLabel value="True" disabled={!isInputEnabled} control={<Radio />} label="True" />
                            <FormControlLabel value="Talse" disabled={!isInputEnabled} control={<Radio />} label="False" />
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
                            name="isActiveSecurity"
                            value={ isActiveSecurity}
                          >
                            <FormControlLabel value="True" disabled={!isInputEnabled} control={<Radio />} label="True" />
                            <FormControlLabel value="False" disabled={!isInputEnabled} control={<Radio />} label="False" />
                          </RadioGroup>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Lot Size</FormLabel>
                          <TextField multiline disabled={!isInputEnabled} type="number" variant='filled' name="lotSize" defaultValue={lotSize}/>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>BBG Unique Name</FormLabel>
                          <TextField multiline disabled={!isInputEnabled} type="text" variant='filled' name="" name="bbgUniqueName" defaultValue={bbgUniqueName} />
                        </Stack>
                      </Item>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} sx={{
                      m: 2,
                      p: 2

                    }}>
                      <Stack sx={{ placeContent: "center" }} direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 4 }}>
                        <Button size="small" variant="contained" onClick={enableInput} >EDIT</Button>
                        <Button size="small" variant="contained" color="error" startIcon={<DeleteIcon />} onClick={()=>handleDelete()}>DELETE</Button>
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
                          <FormLabel sx={{ width: '150px' }}>CUSIP</FormLabel>
                          <TextField multiline disabled={!isInputEnabled} type="text" variant='filled' name=""name='cusip' defaultValue={cusip} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>ISIN</FormLabel>
                          <TextField multiline disabled={!isInputEnabled} type="text" variant='filled' name="isin" defaultValue={isin}/>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>SEDOL</FormLabel>
                          <TextField multiline disabled={!isInputEnabled} type="text" variant='filled' name="sedol" defaultValue={sedol} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Bloomberg Ticker</FormLabel>
                          <TextField multiline disabled={!isInputEnabled} type="text" variant='filled' name="bloombergTicker" defaultValue={bloombergTicker}/>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Bloomberg Unique ID</FormLabel>
                          <TextField multiline disabled={!isInputEnabled} type="text" variant='filled' name="bloombergUniqueId" defaultValue={bloombergUniqueId}/>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>BBG Global ID</FormLabel>
                          <TextField multiline disabled={!isInputEnabled} type="text" variant='filled' name="bbgGlobalId" defaultValue={bbgGlobalId}/>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Ticker and Exchange</FormLabel>
                          <TextField multiline disabled={!isInputEnabled} type="text" variant='filled' name="tickerAndExchange" defaultValue={tickerAndExchange}/>
                        </Stack></Item>

                    </Grid>
                    <Grid item xs={12} sm={12} md={12} sx={{
                      m: 2,
                      p: 2

                    }}>
                      <Stack sx={{ placeContent: "center" }} direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 4 }}>
                        <Button size="small" variant="contained" onClick={enableInput} >EDIT</Button>
                        <Button size="small" variant="contained" color="error" startIcon={<DeleteIcon />} onClick={()=>handleDelete()}>DELETE</Button>
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
                          <FormLabel sx={{ width: '150px' }}>Is ADR</FormLabel>
                          <RadioGroup
                            sx={{ textAlign: 'center', m: 2 }}
                            row
                            name="isAdrFlag"
                            value={isAdrFlag}
                          >
                            <FormControlLabel disabled={!isInputEnabled} value="True" control={<Radio />} label="True" />
                            <FormControlLabel disabled={!isInputEnabled} value="False" control={<Radio />} label="False" />
                          </RadioGroup>

                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>ADR Underlying Ticker</FormLabel>
                          <TextField multiline disabled={!isInputEnabled} type="text" variant='filled' name="adrUnderlyingTicker" defaultValue={adrUnderlyingTicker}/>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>ADR Underlying Currency</FormLabel>
                          <TextField multiline disabled={!isInputEnabled} type="text" variant='filled' name="adrUnderlyingCurrency" defaultValue={adrUnderlyingCurrency}/>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Shares Per ADR</FormLabel>
                          <TextField multiline disabled={!isInputEnabled} type="text" variant='filled' name="sharesPerAdr" defaultValue={sharesPerAdr}/>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>IPO Date</FormLabel>
                          <TextField
                            type="date"
                            name='ipoDate'
                            variant='filled'
                            defaultValue={formattedipoDate}
                            disabled={!isInputEnabled}
                        
                          />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Price Currency</FormLabel>
                          <TextField multiline disabled={!isInputEnabled} type="text" variant='filled' name="pricingCurrency" defaultValue={pricingCurrency}/>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Settle Days</FormLabel>
                          <TextField multiline disabled={!isInputEnabled} type="number" variant='filled' name='settleDays' defaultValue={settleDays}/>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Shares Outstanding</FormLabel>
                          <TextField multiline disabled={!isInputEnabled} type="text" variant='filled' name="totalSharesOutstanding" defaultValue={ totalSharesOutstanding}/>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Voting Rights Per Share</FormLabel>
                          <TextField multiline disabled={!isInputEnabled} type="text" variant='filled' name="votingRightsPerShare" defaultValue={votingRightsPerShare}/>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} sx={{
                      m: 2,
                      p: 2

                    }}>
                      <Stack sx={{ placeContent: "center" }} direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 4 }}>
                        <Button size="small" variant="contained" onClick={enableInput} >EDIT</Button>
                        <Button size="small" variant="contained" color="error" startIcon={<DeleteIcon />} onClick={()=>handleDelete()}>DELETE</Button>
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
                          <FormLabel sx={{ width: '150px' }}>20 day Average Volume</FormLabel>
                          <TextField multiline disabled={!isInputEnabled} type="text" variant='filled' name="averageVolume" defaultValue={averageVolume}/>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Beta</FormLabel>
                          <TextField multiline disabled={!isInputEnabled} type="text" variant='filled' name="beta" defaultValue={beta}/>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Short Interest</FormLabel>
                          <TextField multiline disabled={!isInputEnabled} type="text" variant='filled' name="shortInterest" defaultValue={shortInterest}/>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>YTD Return</FormLabel>
                          <TextField multiline disabled={!isInputEnabled} type="text" variant='filled' name="returns" defaultValue={returns}/>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>90 Days Price Volatility</FormLabel>
                          <TextField multiline disabled={!isInputEnabled} type="text" variant='filled' name="volatility" defaultValue={volatility}/>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} sx={{
                      m: 2,
                      p: 2

                    }}>
                      <Stack sx={{ placeContent: "center" }} direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 4 }}>
                        <Button size="small" variant="contained" onClick={enableInput}>EDIT</Button>
                        <Button size="small" variant="contained" color="error" startIcon={<DeleteIcon />} onClick={()=>handleDelete()}>DELETE</Button>
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
                          <FormLabel sx={{ width: '150px' }}>PF Asset Class </FormLabel>
                          <TextField multiline disabled={!isInputEnabled} type="text" variant='filled' name="pfAssetClass" defaultValue={pfAssetClass}/>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>PF Country</FormLabel>
                          <TextField multiline disabled={!isInputEnabled} type="text" variant='filled' name="pfCountry" defaultValue={pfCountry}/>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>PF Credit Rating</FormLabel>
                          <TextField multiline disabled={!isInputEnabled} type="text" variant='filled' name="pfCreditRating" defaultValue={pfCreditRating}/>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>PF Currency</FormLabel>
                          <TextField multiline disabled={!isInputEnabled} type="text" variant='filled' name="pfCurrency" defaultValue={pfCurrency}/>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>PF Instrument</FormLabel>
                          <TextField multiline disabled={!isInputEnabled} type="text" variant='filled' name="pfInstrument" defaultValue={pfInstrument}/>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>PF Liquidity Profile</FormLabel>
                          <TextField multiline disabled={!isInputEnabled} type="text" variant='filled' name="pfLiquidityProfile" defaultValue={pfLiquidityProfile}/>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>PF Maturity</FormLabel>
                          <TextField multiline disabled={!isInputEnabled} type="text" variant='filled' name="pfMaturity" defaultValue={pfMaturity}/>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>PF NAICS Code</FormLabel>
                          <TextField multiline disabled={!isInputEnabled} type="text" variant='filled' name="pfNaicsCode" defaultValue={pfNaicsCode}/>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>PF Region</FormLabel>
                          <TextField multiline disabled={!isInputEnabled} type="text" variant='filled' name="pfRegion" defaultValue={pfRegion}/>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>PF Sector</FormLabel>
                          <TextField multiline disabled={!isInputEnabled} type="text" variant='filled' name="pfSector" defaultValue={pfSector}/>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>PF Sub Asset Class</FormLabel>
                          <TextField multiline disabled={!isInputEnabled} type="text" variant='filled' name="pfSubAssetClass" defaultValue={pfSubAssetClass}/>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} sx={{
                      m: 2,
                      p: 2

                    }}>
                      <Stack sx={{ placeContent: "center" }} direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 4 }}>
                        <Button size="small" variant="contained" onClick={enableInput}>EDIT</Button>
                        <Button size="small" variant="contained" color="error" startIcon={<DeleteIcon />} onClick={()=>handleDelete()}>DELETE</Button>
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
                          <FormLabel sx={{ width: '150px' }}>Issue Country </FormLabel>
                          <TextField multiline disabled={!isInputEnabled} type="text" variant='filled' name="countryOfIssuance" defaultValue={countryOfIssuance}/>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Exchange</FormLabel>
                          <TextField multiline disabled={!isInputEnabled} type="text" variant='filled' name="exchange" defaultValue={exchange}/>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Issuer</FormLabel>
                          <TextField multiline disabled={!isInputEnabled} type="text" variant='filled' name="issuer" defaultValue={issuer}/>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Issuer Currency</FormLabel>
                          <TextField multiline disabled={!isInputEnabled} type="text" variant='filled' name="issueCurrency" defaultValue={issueCurrency}/>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Trading Currency</FormLabel>
                          <TextField multiline disabled={!isInputEnabled} type="text" variant='filled' name="tradingCurrency" defaultValue={tradingCurrency}/>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>BBG Industry Sub Group</FormLabel>
                          <TextField multiline disabled={!isInputEnabled} type="text" variant='filled' name="bbgIndustrySubGroup" defaultValue={bbgIndustrySubGroup}/>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>BBG Industry Group</FormLabel>
                          <TextField multiline disabled={!isInputEnabled} type="text" variant='filled' name="bloombergIndustryGroup" defaultValue={bloombergIndustryGroup}/>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>BBG Industry Sector</FormLabel>
                          <TextField multiline disabled={!isInputEnabled} type="text" variant='filled' name="bloombergSector" defaultValue={bloombergSector}/>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Country of Incorporation</FormLabel>
                          <TextField multiline disabled={!isInputEnabled} type="text" variant='filled' name="countryOfIncorporation" defaultValue={countryOfIncorporation}/>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Risk Currency</FormLabel>
                          <TextField multiline disabled={!isInputEnabled} type="text" variant='filled' name="riskCurrency" defaultValue={riskCurrency}/>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} sx={{
                      m: 2,
                      p: 2

                    }}>
                      <Stack sx={{ placeContent: "center" }} direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 4 }}>
                        <Button size="small" variant="contained" onClick={enableInput}>EDIT</Button>
                        <Button size="small" variant="contained" color="error" startIcon={<DeleteIcon />} onClick={()=>handleDelete()}>DELETE</Button>
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
                          <FormLabel sx={{ width: '150px' }}>Open Price </FormLabel>
                          <TextField multiline disabled={!isInputEnabled} type="text" variant='filled' name="openPrice" defaultValue={openPrice}/>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Close Price</FormLabel>
                          <TextField multiline disabled={!isInputEnabled} type="text" variant='filled' name="closePrice" defaultValue={closePrice}/>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Volume</FormLabel>
                          <TextField multiline disabled={!isInputEnabled} type="text" variant='filled' name="volume" defaultValue={volume}/>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Last Price</FormLabel>
                          <TextField multiline disabled={!isInputEnabled} type="text" variant='filled' name="lastPrice" defaultValue={lastPrice}/>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Ask Price</FormLabel>
                          <TextField multiline disabled={!isInputEnabled} type="text" variant='filled' name="askPrice" defaultValue={askPrice}/>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Bid Price</FormLabel>
                          <TextField multiline disabled={!isInputEnabled} type="text" variant='filled' name="bidPrice" defaultValue={bidPrice}/>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>PE Ratio</FormLabel>
                          <TextField multiline disabled={!isInputEnabled} type="text" variant='filled' name="peRatio" defaultValue={peRatio}/>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} sx={{
                      m: 2,
                      p: 2

                    }}>
                      <Stack sx={{ placeContent: "center" }} direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 4 }}>
                        <Button size="small" variant="contained" onClick={enableInput}>EDIT</Button>
                        <Button size="small" variant="contained" color="error" startIcon={<DeleteIcon />} onClick={()=>handleDelete()}>DELETE</Button>
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
                          <FormLabel sx={{ width: '150px' }}>Dividend Declared Date</FormLabel>
                          <TextField
                            type="date"
                            name='DividendDeclaredDate'
                            variant='filled'
                            name="dividendDeclaredDate"
                            defaultValue={formattedDividendDate}
                            disabled={!isInputEnabled}
                          />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Dividend Ex Date</FormLabel>
                          <TextField
                            type="date"
                            name='DividendExDate'
                            variant='filled'
                            name="dividendExDate"
                            defaultValue={formattedExDate}
                            disabled={!isInputEnabled}
                          />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Dividend Record Date</FormLabel>
                          <TextField
                            type="date"
                            name='DividendRecordDate'
                            variant='filled'
                            name="dividendRecordDate"
                            defaultValue={formattedRecordDate}
                            disabled={!isInputEnabled}
                          />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Dividend Pay Date</FormLabel>
                          <TextField
                            type="date"
                            name='DividendPayDate'
                            defaultValue={dividendPayDate}
                            name="dividendPayDate"
                            variant='filled'
                            defaultValue={formattedPayDate}
                            disabled={!isInputEnabled}
                         
                          />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Dividend Amount</FormLabel>
                          <TextField multiline disabled={!isInputEnabled} type="text" variant='filled' name="dividendAmount" defaultValue={dividendAmount}/>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Frequency</FormLabel>
                          <TextField multiline disabled={!isInputEnabled} type="text" variant='filled' name="frequency" defaultValue={frequency}/>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Dividend Type</FormLabel>
                          <TextField multiline disabled={!isInputEnabled} type="text" variant='filled' name="dividendType" defaultValue={dividendType}/>
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} sx={{
                      m: 2,
                      p: 2

                    }}>
                      <Stack sx={{ placeContent: "center" }} direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 4 }}>
                        <Button size="small" variant="contained" onClick={enableInput}>EDIT</Button>
                        <Button size="small" variant="contained" color="error" startIcon={<DeleteIcon />} onClick={()=>handleDelete()}>DELETE</Button>
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

export default Equity

