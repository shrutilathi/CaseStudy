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


  const [equity, setEquity] = useState(props.eqData)


  const handleValueChange = (e) => {
    const { name, value } = e.target;
    setEquity((prevState) => ({
        ...prevState,
        [name]: value,
    }));
};

  // const {
  //   securityId,
  //   securityName,
  //   securityDescription,
  //   hasPosition,
  //   isActiveSecurity,
  //   lotSize,
  //   bbgUniqueName,
  //   cusip,
  //   isin,
  //   sedol,
  //   bloombergTicker,
  //   bloombergUniqueId,
  //   bbgGlobalId,
  //   tickerAndExchange,
  //   isAdrFlag,
  //   adrUnderlyingTicker,
  //   adrUnderlyingCurrency,
  //   sharesPerAdr,
  //   ipoDate,
  //   pricingCurrency,
  //   settleDays,
  //   totalSharesOutstanding,
  //   votingRightsPerShare,
  //   averageVolume,
  //   beta,
  //   shortInterest,
  //   returns,
  //   volatility,
  //   pfAssetClass,
  //   pfCountry,
  //   pfCreditRating,
  //   pfCurrency,
  //   pfInstrument,
  //   pfLiquidityProfile,
  //   pfMaturity,
  //   pfNaicsCode,
  //   pfRegion,
  //   pfSector,
  //   pfSubAssetClass,
  //   countryOfIssuance,
  //   exchange,
  //   issuer,
  //   issueCurrency,
  //   tradingCurrency,
  //   bbgIndustrySubGroup,
  //   bloombergIndustryGroup,
  //   bloombergSector,
  //   countryOfIncorporation,
  //   riskCurrency,
  //   openPrice,
  //   closePrice,
  //   volume,
  //   lastPrice,
  //   askPrice,
  //   bidPrice,
  //   peRatio,
  //   dividendDeclaredDate,
  //   dividendExDate,
  //   dividendRecordDate,
  //   dividendPayDate,
  //   dividendAmount,
  //   frequency,
  //   dividendType
  // } = props.eqData

  const formattedipoDate = equity.ipoDate ? equity.ipoDate.split('T')[0] : '';
  const formattedDividendDate = equity.dividendDeclaredDate ? equity.dividendDeclaredDate.split('T')[0] : '';
  const formattedExDate = equity.dividendExDate ? equity.dividendExDate.split('T')[0] : '';
  const formattedRecordDate = equity.dividendRecordDate ? equity.dividendRecordDate.split('T')[0] : '';
  const formattedPayDate = equity.dividendPayDate ? equity.dividendPayDate.split('T')[0] : '';

  const handleDelete = () => {

    axios.delete(`http://localhost:5150/api/Equity/DeleteEquity/${equity.securityId}`)
      .then(res => {
        alert("Record Deleted Successfully");
        window.location.reload(true)
      })
      .catch(err => { alert("Please Enter Valid Security ID") });
  }

  const [value, setValue] = React.useState("1");
  const [data,setdata] = React.useState()
  const handleTabValueChange = (event, newValue) => {
    setValue(newValue);
  };
  const [isInputEnabled, setInputEnabled] = useState(false);

  const enableInput = () => {
    setInputEnabled(true);
  };

  const handleSave = () => {
    axios.put(`http://localhost:5150/api/Equity/UpdateEquity/${equity.securityId}`,equity).then(res => {
      alert("Updated Successfull")
      window.location.reload(true)

    }).catch(err => {
      alert("Update Error")
    })
  }

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
              onChange={handleTabValueChange}
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
                          <TextField multiline disabled={!isInputEnabled} type="text" variant='filled' name="securityName" value={equity.securityName} onChange={handleValueChange} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Security Description</FormLabel>
                          <TextField onChange={handleValueChange} multiline disabled={!isInputEnabled} multiline type="text" variant='filled' name="securityDescription" value={equity.securityDescription} />
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
                            value={equity.hasPosition}
                            onChange={handleValueChange}
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
                            onChange={handleValueChange}
                            sx={{ textAlign: 'center', m: 2 }}
                            row
                            name="isActiveSecurity"
                            value={equity.isActiveSecurity}
                            onChange={handleValueChange}
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
                          <TextField onChange={handleValueChange} multiline disabled={!isInputEnabled} type="number" variant='filled' name="lotSize" value={equity.lotSize} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>BBG Unique Name</FormLabel>
                          <TextField onChange={handleValueChange} multiline disabled={!isInputEnabled} type="text" variant='filled' name="bbgUniqueName" value={equity.bbgUniqueName} />
                        </Stack>
                      </Item>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} sx={{
                      m: 2,
                      p: 2

                    }}>
                      <Stack sx={{ placeContent: "center" }} direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 4 }}>
                        <Button size="small" variant="contained" onClick={enableInput} >EDIT</Button>
                        <Button size="small" variant="contained" color="error" startIcon={<DeleteIcon />} onClick={() => handleDelete()}>DELETE</Button>
                        <LoadingButton
                          size="small"
                          color="success"
                          startIcon={<SaveIcon />}
                          onClick={handleSave}
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
                          <TextField onChange={handleValueChange} multiline disabled={!isInputEnabled} type="text" variant='filled' name='cusip' value={equity.cusip} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>ISIN</FormLabel>
                          <TextField onChange={handleValueChange} multiline disabled={!isInputEnabled} type="text" variant='filled' name="isin" value={equity.isin} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>SEDOL</FormLabel>
                          <TextField onChange={handleValueChange} multiline disabled={!isInputEnabled} type="text" variant='filled' name="sedol" value={equity.sedol} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Bloomberg Ticker</FormLabel>
                          <TextField onChange={handleValueChange} multiline disabled={!isInputEnabled} type="text" variant='filled' name="bloombergTicker" value={equity.bloombergTicker} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Bloomberg Unique ID</FormLabel>
                          <TextField onChange={handleValueChange} multiline disabled={!isInputEnabled} type="text" variant='filled' name="bloombergUniqueId" value={equity.bloombergUniqueId} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>BBG Global ID</FormLabel>
                          <TextField onChange={handleValueChange} multiline disabled={!isInputEnabled} type="text" variant='filled' name="bbgGlobalId" value={equity.bbgGlobalId} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Ticker and Exchange</FormLabel>
                          <TextField onChange={handleValueChange} multiline disabled={!isInputEnabled} type="text" variant='filled' name="tickerAndExchange" value={equity.tickerAndExchange} />
                        </Stack></Item>

                    </Grid>
                    <Grid item xs={12} sm={12} md={12} sx={{
                      m: 2,
                      p: 2

                    }}>
                      <Stack sx={{ placeContent: "center" }} direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 4 }}>
                        <Button size="small" variant="contained" onClick={enableInput} >EDIT</Button>
                        <Button size="small" variant="contained" color="error" startIcon={<DeleteIcon />} onClick={() => handleDelete()}>DELETE</Button>
                        <LoadingButton
                          size="small"
                          color="success"
                          startIcon={<SaveIcon />}
                          variant="contained"
                          onClick={handleSave}
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
                            onChange={handleValueChange}
                            sx={{ textAlign: 'center', m: 2 }}
                            row
                            name="isAdrFlag"
                            value={equity.isAdrFlag}
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
                          <TextField onChange={handleValueChange} multiline disabled={!isInputEnabled} type="text" variant='filled' name="adrUnderlyingTicker" value={equity.adrUnderlyingTicker} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>ADR Underlying Currency</FormLabel>
                          <TextField onChange={handleValueChange} multiline disabled={!isInputEnabled} type="text" variant='filled' name="adrUnderlyingCurrency" value={equity.adrUnderlyingCurrency} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Shares Per ADR</FormLabel>
                          <TextField onChange={handleValueChange} multiline disabled={!isInputEnabled} type="text" variant='filled' name="sharesPerAdr" value={equity.sharesPerAdr} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>IPO Date</FormLabel>
                          <TextField
                            onChange={handleValueChange}
                            type="date"
                            name='ipoDate'
                            variant='filled'
                            value={equity.formattedipoDate}
                            disabled={!isInputEnabled}

                          />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Price Currency</FormLabel>
                          <TextField onChange={handleValueChange} multiline disabled={!isInputEnabled} type="text" variant='filled' name="pricingCurrency" value={equity.pricingCurrency} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Settle Days</FormLabel>
                          <TextField onChange={handleValueChange} multiline disabled={!isInputEnabled} type="number" variant='filled' name='settleDays' value={equity.settleDays} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Shares Outstanding</FormLabel>
                          <TextField onChange={handleValueChange} multiline disabled={!isInputEnabled} type="text" variant='filled' name="totalSharesOutstanding" value={equity.totalSharesOutstanding} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Voting Rights Per Share</FormLabel>
                          <TextField onChange={handleValueChange} multiline disabled={!isInputEnabled} type="text" variant='filled' name="votingRightsPerShare" value={equity.votingRightsPerShare} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} sx={{
                      m: 2,
                      p: 2

                    }}>
                      <Stack sx={{ placeContent: "center" }} direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 4 }}>
                        <Button size="small" variant="contained" onClick={enableInput} >EDIT</Button>
                        <Button size="small" variant="contained" color="error" startIcon={<DeleteIcon />} onClick={() => handleDelete()}>DELETE</Button>
                        <LoadingButton
                          size="small"
                          color="success"
                          startIcon={<SaveIcon />}
                          variant="contained"
                          onClick={handleSave}
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
                          <TextField onChange={handleValueChange} multiline disabled={!isInputEnabled} type="text" variant='filled' name="averageVolume" value={equity.averageVolume} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Beta</FormLabel>
                          <TextField onChange={handleValueChange} multiline disabled={!isInputEnabled} type="text" variant='filled' name="beta" value={equity.beta} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Short Interest</FormLabel>
                          <TextField multiline disabled={!isInputEnabled} type="text" variant='filled' name="shortInterest" value={equity.shortInterest} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>YTD Return</FormLabel>
                          <TextField onChange={handleValueChange} multiline disabled={!isInputEnabled} type="text" variant='filled' name="returns" value={equity.returns} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>90 Days Price Volatility</FormLabel>
                          <TextField onChange={handleValueChange} multiline disabled={!isInputEnabled} type="text" variant='filled' name="volatility" value={equity.volatility} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} sx={{
                      m: 2,
                      p: 2

                    }}>
                      <Stack sx={{ placeContent: "center" }} direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 4 }}>
                        <Button size="small" variant="contained" onClick={enableInput}>EDIT</Button>
                        <Button size="small" variant="contained" color="error" startIcon={<DeleteIcon />} onClick={() => handleDelete()}>DELETE</Button>
                        <LoadingButton
                          size="small"
                          color="success"
                          startIcon={<SaveIcon />}
                          variant="contained"
                          onClick={handleSave}
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
                          <TextField onChange={handleValueChange} multiline disabled={!isInputEnabled} type="text" variant='filled' name="pfAssetClass" value={equity.pfAssetClass} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>PF Country</FormLabel>
                          <TextField onChange={handleValueChange} multiline disabled={!isInputEnabled} type="text" variant='filled' name="pfCountry" value={equity.pfCountry} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>PF Credit Rating</FormLabel>
                          <TextField onChange={handleValueChange} multiline disabled={!isInputEnabled} type="text" variant='filled' name="pfCreditRating" value={equity.pfCreditRating} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>PF Currency</FormLabel>
                          <TextField onChange={handleValueChange} multiline disabled={!isInputEnabled} type="text" variant='filled' name="pfCurrency" value={equity.pfCurrency} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>PF Instrument</FormLabel>
                          <TextField onChange={handleValueChange} multiline disabled={!isInputEnabled} type="text" variant='filled' name="pfInstrument" value={equity.pfInstrument} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>PF Liquidity Profile</FormLabel>
                          <TextField onChange={handleValueChange} multiline disabled={!isInputEnabled} type="text" variant='filled' name="pfLiquidityProfile" value={equity.pfLiquidityProfile} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>PF Maturity</FormLabel>
                          <TextField onChange={handleValueChange} multiline disabled={!isInputEnabled} type="text" variant='filled' name="pfMaturity" value={equity.pfMaturity} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>PF NAICS Code</FormLabel>
                          <TextField onChange={handleValueChange} multiline disabled={!isInputEnabled} type="text" variant='filled' name="pfNaicsCode" value={equity.pfNaicsCode} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>PF Region</FormLabel>
                          <TextField onChange={handleValueChange} multiline disabled={!isInputEnabled} type="text" variant='filled' name="pfRegion" value={equity.pfRegion} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>PF Sector</FormLabel>
                          <TextField onChange={handleValueChange} multiline disabled={!isInputEnabled} type="text" variant='filled' name="pfSector" value={equity.pfSector} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>PF Sub Asset Class</FormLabel>
                          <TextField onChange={handleValueChange} multiline disabled={!isInputEnabled} type="text" variant='filled' name="pfSubAssetClass" value={equity.pfSubAssetClass} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} sx={{
                      m: 2,
                      p: 2

                    }}>
                      <Stack sx={{ placeContent: "center" }} direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 4 }}>
                        <Button size="small" variant="contained" onClick={enableInput}>EDIT</Button>
                        <Button size="small" variant="contained" color="error" startIcon={<DeleteIcon />} onClick={() => handleDelete()}>DELETE</Button>
                        <LoadingButton
                          size="small"
                          color="success"
                          startIcon={<SaveIcon />}
                          variant="contained"
                          onClick={handleSave}
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
                          <TextField onChange={handleValueChange} multiline disabled={!isInputEnabled} type="text" variant='filled' name="countryOfIssuance" value={equity.countryOfIssuance} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Exchange</FormLabel>
                          <TextField onChange={handleValueChange} multiline disabled={!isInputEnabled} type="text" variant='filled' name="exchange" value={equity.exchange} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Issuer</FormLabel>
                          <TextField onChange={handleValueChange} multiline disabled={!isInputEnabled} type="text" variant='filled' name="issuer" value={equity.issuer} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Issuer Currency</FormLabel>
                          <TextField onChange={handleValueChange} multiline disabled={!isInputEnabled} type="text" variant='filled' name="issueCurrency" value={equity.issueCurrency} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Trading Currency</FormLabel>
                          <TextField onChange={handleValueChange} multiline disabled={!isInputEnabled} type="text" variant='filled' name="tradingCurrency" value={equity.tradingCurrency} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>BBG Industry Sub Group</FormLabel>
                          <TextField onChange={handleValueChange} multiline disabled={!isInputEnabled} type="text" variant='filled' name="bbgIndustrySubGroup" value={equity.bbgIndustrySubGroup} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>BBG Industry Group</FormLabel>
                          <TextField onChange={handleValueChange} multiline disabled={!isInputEnabled} type="text" variant='filled' name="bloombergIndustryGroup" value={equity.bloombergIndustryGroup} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>BBG Industry Sector</FormLabel>
                          <TextField onChange={handleValueChange} multiline disabled={!isInputEnabled} type="text" variant='filled' name="bloombergSector" value={equity.bloombergSector} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Country of Incorporation</FormLabel>
                          <TextField onChange={handleValueChange} multiline disabled={!isInputEnabled} type="text" variant='filled' name="countryOfIncorporation" value={equity.countryOfIncorporation} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Risk Currency</FormLabel>
                          <TextField onChange={handleValueChange} multiline disabled={!isInputEnabled} type="text" variant='filled' name="riskCurrency" value={equity.riskCurrency} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} sx={{
                      m: 2,
                      p: 2

                    }}>
                      <Stack sx={{ placeContent: "center" }} direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 4 }}>
                        <Button size="small" variant="contained" onClick={enableInput}>EDIT</Button>
                        <Button size="small" variant="contained" color="error" startIcon={<DeleteIcon />} onClick={() => handleDelete()}>DELETE</Button>
                        <LoadingButton
                          size="small"
                          color="success"
                          startIcon={<SaveIcon />}
                          variant="contained"
                          onClick={handleSave}
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
                          <TextField onChange={handleValueChange} multiline disabled={!isInputEnabled} type="text" variant='filled' name="openPrice" value={equity.openPrice} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Close Price</FormLabel>
                          <TextField onChange={handleValueChange} multiline disabled={!isInputEnabled} type="text" variant='filled' name="closePrice" value={equity.closePrice} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Volume</FormLabel>
                          <TextField onChange={handleValueChange} multiline disabled={!isInputEnabled} type="text" variant='filled' name="volume" value={equity.volume} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Last Price</FormLabel>
                          <TextField onChange={handleValueChange} multiline disabled={!isInputEnabled} type="text" variant='filled' name="lastPrice" value={equity.lastPrice} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Ask Price</FormLabel>
                          <TextField onChange={handleValueChange} multiline disabled={!isInputEnabled} type="text" variant='filled' name="askPrice" value={equity.askPrice} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Bid Price</FormLabel>
                          <TextField onChange={handleValueChange} multiline disabled={!isInputEnabled} type="text" variant='filled' name="bidPrice" value={equity.bidPrice} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>PE Ratio</FormLabel>
                          <TextField onChange={handleValueChange} multiline disabled={!isInputEnabled} type="text" variant='filled' name="peRatio" value={equity.peRatio} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} sx={{
                      m: 2,
                      p: 2

                    }}>
                      <Stack sx={{ placeContent: "center" }} direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 4 }}>
                        <Button size="small" variant="contained" onClick={enableInput}>EDIT</Button>
                        <Button size="small" variant="contained" color="error" startIcon={<DeleteIcon />} onClick={() => handleDelete()}>DELETE</Button>
                        <LoadingButton
                          size="small"
                          color="success"
                          startIcon={<SaveIcon />}
                          variant="contained"
                          onClick={handleSave}
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
                            onChange={handleValueChange}
                            type="date"
                            name='DividendDeclaredDate'
                            variant='filled'
                            name="dividendDeclaredDate"
                            value={equity.formattedDividendDate}
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
                            onChange={handleValueChange}
                            type="date"
                            name='DividendExDate'
                            variant='filled'
                            name="dividendExDate"
                            value={equity.formattedExDate}
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
                            onChange={handleValueChange}
                            type="date"
                            name='DividendRecordDate'
                            variant='filled'
                            name="dividendRecordDate"
                            value={equity.formattedRecordDate}
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
                            onChange={handleValueChange}
                            type="date"
                            name='DividendPayDate'
                            value={equity.dividendPayDate}
                            name="dividendPayDate"
                            variant='filled'
                            value={equity.formattedPayDate}
                            disabled={!isInputEnabled}

                          />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Dividend Amount</FormLabel>
                          <TextField onChange={handleValueChange} multiline disabled={!isInputEnabled} type="text" variant='filled' name="dividendAmount" value={equity.dividendAmount} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Frequency</FormLabel>
                          <TextField onChange={handleValueChange} multiline disabled={!isInputEnabled} type="text" variant='filled' name="frequency" value={equity.frequency} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Item>
                        <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                          <FormLabel sx={{ width: '150px' }}>Dividend Type</FormLabel>
                          <TextField onChange={handleValueChange} multiline disabled={!isInputEnabled} type="text" variant='filled' name="dividendType" value={equity.dividendType} />
                        </Stack>
                      </Item>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} sx={{
                      m: 2,
                      p: 2

                    }}>
                      <Stack sx={{ placeContent: "center" }} direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 4 }}>
                        <Button size="small" variant="contained" onClick={enableInput}>EDIT</Button>
                        <Button size="small" variant="contained" color="error" startIcon={<DeleteIcon />} onClick={() => handleDelete()}>DELETE</Button>
                        <LoadingButton
                          size="small"
                          color="success"
                          startIcon={<SaveIcon />}
                          variant="contained"
                          onClick={handleSave}
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
          {console.log(equity)}
        </Box>
      </Card>
    </Box>

  )
}

export default Equity

