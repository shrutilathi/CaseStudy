import React, { useState } from 'react';
import { TextField, Button, Stack, RadioGroup, Radio, FormControl, FormLabel, ThemeProvider, createTheme, Card, FormControlLabel } from '@mui/material';
import { Link } from "react-router-dom"
import axios from 'axios'
import {
    useNavigate
} from 'react-router-dom';
let theme = createTheme({
    palette: {
        primary: {
            main: '#F2CE72',
        }
    },
});

const InsertEquity = () => {
    const navigate = useNavigate();

    const [equity, setEquity] = useState({
        "securityId": 0,
        "securityName": "string",
        "securityDescription": "string",
        "hasPosition": "string",
        "isActiveSecurity": "string",
        "lotSize": 0,
        "bbgUniqueName": "string",
        "cusip": "string",
        "isin": "string",
        "sedol": "string",
        "bloombergTicker": "string",
        "bloombergUniqueId": "string",
        "bbgGlobalId": "string",
        "tickerAndExchange": "string",
        "isAdrFlag": "string",
        "adrUnderlyingTicker": "string",
        "adrUnderlyingCurrency": "string",
        "sharesPerAdr": "string",
        "ipoDate": "string",
        "pricingCurrency": "string",
        "settleDays": 0,
        "totalSharesOutstanding": 0,
        "votingRightsPerShare": 0,
        "averageVolume": 0,
        "beta": 0,
        "shortInterest": 0,
        "return": 0,
        "volatility": 0,
        "pfAssetClass": "string",
        "pfCountry": "string",
        "pfCreditRating": "string",
        "pfCurrency": "string",
        "pfInstrument": "string",
        "pfLiquidityProfile": "string",
        "pfMaturity": "string",
        "pfNaicsCode": "string",
        "pfRegion": "string",
        "pfSector": "string",
        "pfSubAssetClass": "string",
        "countryOfIssuance": "string",
        "exchange": "string",
        "issuer": "string",
        "issueCurrency": "string",
        "tradingCurrency": "string",
        "bbgIndustrySubGroup": "string",
        "bloombergIndustryGroup": "string",
        "bloombergSector": "string",
        "countryOfIncorporation": "string",
        "riskCurrency": "string",
        "openPrice": 0,
        "closePrice": 0,
        "volume": 0,
        "lastPrice": 0,
        "askPrice": 0,
        "bidPrice": 0,
        "peRatio": 0,
        "dividendDeclaredDate": "2023-08-17T10:41:15.844Z",
        "dividendExDate": "2023-08-17T10:41:15.844Z",
        "dividendRecordDate": "2023-08-17T10:41:15.844Z",
        "dividendPayDate": "2023-08-17T10:41:15.844Z",
        "dividendAmount": 0,
        "frequency": 0,
        "dividendType": "string"
    })

    function handleSubmit(event) {
        event.preventDefault();
        axios.post("http://localhost:5150/api/Equity/AddEquity", equity).then(res => {alert("Equity Inserted Successfully")}).catch(err => {alert("OOPS! Something Went wrong..Try Again")});
    }

    const handleValueChange = (e) => {
        const { name, value } = e.target;
        setEquity((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <ThemeProvider theme={theme}>
            <Card sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h2 style={{ textAlign: "center" }}>Insert Equity</h2>
                <form>
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Security Name"
                        name="securityName"
                        value={equity.securityName}
                        onChange={handleValueChange}
                        fullWidth
                        required
                        sx={{ mb: 4 }}
                    />

                    <TextField
                        type="text"
                        variant='outlined'
                        label="Security Description"
                        name="securityDescription"
                        value={equity.securityDescription}
                        onChange={handleValueChange}
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <Stack sx={{ mb: 4 }} direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                        <FormLabel sx={{ p: "15px" }}>
                            Has Position
                        </FormLabel>
                        <RadioGroup
                            sx={{ textAlign: 'center' }}
                            row
                            name="hasPosition"
                            value={equity.hasPosition}
                            onChange={handleValueChange}
                        >
                            <FormControlLabel value="true" control={<Radio />} label="True" />
                            <FormControlLabel value="false" control={<Radio />} label="False" />
                        </RadioGroup>
                    </Stack>
                    <Stack sx={{ mb: 4 }} direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                        <FormLabel sx={{ p: "15px" }}>
                            IS Active Security
                        </FormLabel>
                        <RadioGroup
                            sx={{ textAlign: 'center' }}
                            row
                            name="isActiveSecurity"
                            value={equity.isActiveSecurity}
                            onChange={handleValueChange}
                        >
                            <FormControlLabel value="true" control={<Radio />} label="True" />
                            <FormControlLabel value="false" control={<Radio />} label="False" />
                        </RadioGroup>
                    </Stack>
                    <TextField
                        type="number"
                        variant='outlined'
                        label="Lot Size"
                        fullWidth
                        name="lotSize"
                        value={equity.lotSize}
                        onChange={handleValueChange}
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="BBG Unique Name"
                        fullWidth
                        name="bbgUniqueName"
                        value={equity.bbgUniqueName}
                        onChange={handleValueChange}
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="CUSIP"
                        fullWidth
                        name="cusip"
                        value={equity.cusip}
                        onChange={handleValueChange}
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="ISIN"
                        name="isin"
                        value={equity.isin}
                        onChange={handleValueChange}
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="SEDOL"
                        name="sedol"
                        value={equity.sedol}
                        onChange={handleValueChange}
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Bloomberg Ticker"
                        name="bloombergTicker"
                        value={equity.bloombergTicker}
                        onChange={handleValueChange}
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Bloomberg Unique ID"
                        name="bloombergUniqueId"
                        value={equity.bloombergUniqueId}
                        onChange={handleValueChange}
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="BBG Global ID"
                        name="bbgGlobalId"
                        value={equity.bbgGlobalId}
                        onChange={handleValueChange}
                        fullWidth
                        sx={{ mb: 4 }}
                    />

                    <TextField
                        type="text"
                        variant='outlined'
                        label="Ticker and Exchange"
                        name="tickerAndExchange"
                        value={equity.tickerAndExchange}
                        onChange={handleValueChange}
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <Stack sx={{ mb: 4 }} direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                        <FormLabel sx={{ p: "15px" }}>
                            IS ADR Flag
                        </FormLabel>
                        <RadioGroup
                            sx={{ textAlign: 'center' }}
                            row
                            name="isAdrFlag"
                            value={equity.isAdrFlag}
                            onChange={handleValueChange}
                        >
                            <FormControlLabel value="true" control={<Radio />} label="True" />
                            <FormControlLabel value="false" control={<Radio />} label="False" />
                        </RadioGroup>
                    </Stack>
                    <TextField
                        type="text"
                        variant='outlined'
                        label="ADR Underlying Ticker"
                        name="adrUnderlyingTicker"
                        value={equity.adrUnderlyingTicker}
                        onChange={handleValueChange}
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="ADR Underlying Currency"
                        name="adrUnderlyingCurrency"
                        value={equity.adrUnderlyingCurrency}
                        onChange={handleValueChange}
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Shares Per ADR"
                        name="sharesPerAdr"
                        value={equity.sharesPerAdr}
                        onChange={handleValueChange}
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <Stack sx={{ mb: 4 }} direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                        <FormLabel sx={{ p: '15px' }}>IPO Date</FormLabel>
                        <TextField
                            type="date"
                            name='ipoDate'
                            value={equity.ipoDate}
                            onChange={handleValueChange}
                        />


                    </Stack>

                    <TextField
                        type="text"
                        variant='outlined'
                        label="Pricing Currency"
                        fullWidth
                        name="pricingCurrency"
                        value={equity.pricingCurrency}
                        onChange={handleValueChange}
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Total Shares Outstanding"
                        name="totalSharesOutstanding"
                        value={equity.totalSharesOutstanding}
                        onChange={handleValueChange}
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Voting Rights Per Share"
                        name="votingRightsPerShare"
                        value={equity.votingRightsPerShare}
                        onChange={handleValueChange}
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Average Volume - 20D"
                        name="averageVolume"
                        value={equity.averageVolume}
                        onChange={handleValueChange}
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Beta"
                        name="beta"
                        value={equity.beta}
                        onChange={handleValueChange}
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Short Interest"
                        name="shortInterest"
                        value={equity.shortInterest}
                        onChange={handleValueChange}
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Return - YTD"
                        name="return"
                        value={equity.return}
                        onChange={handleValueChange}
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Volatility - 90D"
                        name="volatility"
                        value={equity.volatility}
                        onChange={handleValueChange}
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="PF Assest Class"
                        name="pfAssetClass"
                        value={equity.pfAssetClass}
                        onChange={handleValueChange}
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="PF Country"
                        name="pfCountry"
                        value={equity.pfCountry}
                        onChange={handleValueChange}
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="PF Credit Rading"
                        name="pfCreditRating"
                        value={equity.pfCreditRating}
                        onChange={handleValueChange}
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="PF Currency"
                        name="pfCurrency"
                        value={equity.pfCurrency}
                        onChange={handleValueChange}
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="PF Instrument"
                        name="pfInstrument"
                        value={equity.pfInstrument}
                        onChange={handleValueChange}
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="PF Liquidity Profile"
                        name="pfLiquidityProfile"
                        value={equity.pfLiquidityProfile}
                        onChange={handleValueChange}
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="PF Maturity"
                        name="pfMaturity"
                        value={equity.pfMaturity}
                        onChange={handleValueChange}
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="PF NAICS Code"
                        name="pfNaicsCode"
                        value={equity.pfNaicsCode}
                        onChange={handleValueChange}
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="PF Region"
                        name="pfRegion"
                        value={equity.pfRegion}
                        onChange={handleValueChange}
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="PF Sector"
                        name="pfSector"
                        value={equity.pfSector}
                        onChange={handleValueChange}
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="PF Sub Assest Class"
                        name="pfSubAssetClass"
                        value={equity.pfSubAssetClass}
                        onChange={handleValueChange}
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Country of Issuance"
                        name="countryOfIssuance"
                        value={equity.countryOfIssuance}
                        onChange={handleValueChange}
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Exchange"
                        name="exchange"
                        value={equity.exchange}
                        onChange={handleValueChange}
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Issuer"
                        name="issuer"
                        value={equity.issuer}
                        onChange={handleValueChange}
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Issue Currency"
                        name="issueCurrency"
                        value={equity.issueCurrency}
                        onChange={handleValueChange}
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Trading Currency"
                        name="tradingCurrency"
                        value={equity.tradingCurrency}
                        onChange={handleValueChange}
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="BBG Industry Sub Group"
                        name="bbgIndustrySubGroup"
                        value={equity.bbgIndustrySubGroup}
                        onChange={handleValueChange}
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Bloomberg Industry Group"
                        name="bloombergIndustryGroup"
                        value={equity.bloombergIndustryGroup}
                        onChange={handleValueChange}
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Bloomberg Sector"
                        name="bloombergSector"
                        value={equity.bloombergSector}
                        onChange={handleValueChange}
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Country of Incorporation"
                        name="countryOfIncorporation"
                        value={equity.countryOfIncorporation}
                        onChange={handleValueChange}
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Risk Currency"
                        name="riskCurrency"
                        value={equity.riskCurrency}
                        onChange={handleValueChange}
                        fullWidth
                        sx={{ mb: 4 }}
                    />

                    <TextField
                        type="text"
                        variant='outlined'
                        label="Open Price"
                        name="openPrice"
                        value={equity.openPrice}
                        onChange={handleValueChange}
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Close Price"
                        name="closePrice"
                        value={equity.closePrice}
                        onChange={handleValueChange}
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Volume"
                        name="volume"
                        value={equity.volume}
                        onChange={handleValueChange}
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Last Price"
                        name="lastPrice"
                        value={equity.lastPrice}
                        onChange={handleValueChange}
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Ask Price"
                        name="askPrice"
                        value={equity.askPrice}
                        onChange={handleValueChange}
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Bid Price"
                        name="bidPrice"
                        value={equity.bidPrice}
                        onChange={handleValueChange}
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="PE Ratio"
                        name="peRatio"
                        value={equity.peRatio}
                        onChange={handleValueChange}
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <Stack sx={{ mb: 4 }} direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                        <FormLabel sx={{ p: '15px' }}>Dividend Declared Date</FormLabel>
                        <TextField
                            type="date"
                            name='dividendDeclaredDate'
                            value={equity.dividendDeclaredDate}
                            onChange={handleValueChange}
                        >

                        </TextField>
                    </Stack>
                    <Stack sx={{ mb: 4 }} direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                        <FormLabel sx={{ p: '15px' }}>Dividend Ex Date</FormLabel>
                        <TextField
                            type="date"
                            name='dividendExDate'
                            value={equity.dividendExDate}
                            onChange={handleValueChange}
                        >

                        </TextField>
                    </Stack>
                    <Stack sx={{ mb: 4 }} direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                        <FormLabel sx={{ p: '15px' }}>Dividend Record Date</FormLabel>

                        <TextField
                            type="date"
                            name='dividendRecordDate'
                            value={equity.dividendRecordDate}
                            onChange={handleValueChange}
                        >

                        </TextField>
                    </Stack>
                    <Stack sx={{ mb: 4 }} direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                        <FormLabel sx={{ p: '15px' }}>Dividend Pay Date</FormLabel>
                        <TextField
                            type="date"
                            name='dividendPayDate'
                            value={equity.dividendPayDate}
                            onChange={handleValueChange}
                        >

                        </TextField>
                    </Stack>
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Dividend Amount"
                        name="dividendAmount"
                        value={equity.dividendAmount}
                        onChange={handleValueChange}
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Frequency"
                        name="frequency"
                        value={equity.frequency}
                        onChange={handleValueChange}
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Dividend Type"
                        name="dividendType"
                        value={equity.dividendType}
                        onChange={handleValueChange}
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <div style={{
                        display: "flex",
                        justifyContent: "center"
                    }}>
                        <Button size="small" variant="contained" type="submit" sx={{ m: 2 }} onClick={() => navigate(-1)}>GO Back</Button>
                        <Button variant="contained" type="submit" onClick={handleSubmit} sx={{ m: 2 }}>Submit</Button>
                    </div>
                </form>
            </Card>
        </ThemeProvider>

    )
}

export default InsertEquity;