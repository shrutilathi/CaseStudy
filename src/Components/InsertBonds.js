import React, { useState } from 'react';
import { TextField, Button, Stack, RadioGroup, Radio, FormControl, FormLabel, ThemeProvider, createTheme, Card, FormControlLabel } from '@mui/material';
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

const InsertBonds = () => {
  const navigate = useNavigate();

  const [bonds, setBonds] = useState({

    "bondId": 0,
    "securityDescription": "",
    "securityName": "",
    "assetType": "",
    "investmentType": "",
    "tradingFactor": 0,
    "pricingFactor": 0,
    "isin": "",
    "bbgTicker": "",
    "bbgUniqueId": "",
    "cusip": "",
    "sedol": "",
    "firstCouponDate": "2023-08-16T15:33:25.582Z",
    "couponCap": "",
    "couponFloor": "",
    "couponFrequency": 0,
    "couponRate": 0,
    "couponType": "",
    "spread": "",
    "callableFlag": "",
    "fixToFloatFlag": "",
    "putableFlag": "",
    "issueDate": "2023-08-16T15:33:25.582Z",
    "lastResetDate": "2023-08-16T15:33:25.582Z",
    "maturity": "2023-08-16T15:33:25.582Z",
    "callNotificationMaxDays": 0,
    "putNotificationMaxDays": 0,
    "penultimateCouponDate": "2023-08-16T15:33:25.582Z",
    "resetFrequency": "",
    "hasPosition": "",
    "macaulayDuration": 0,
    "volatility30days": 0,
    "volatility90days": 0,
    "convexity": 0,
    "avgVolume30days": 0,
    "pfAssetClass": "",
    "pfCountry": "",
    "pfCreditRating": "",
    "pfCurrency": "",
    "pfInstrument": "",
    "pfLiquidityProfile": "",
    "pfMaturity": "",
    "pfNaicsCode": "",
    "pfRegion": "",
    "pfSector": "",
    "pfSubAssetClass": "",
    "bbgIndustryGroup": "",
    "bbgIndustrySubGroup": "",
    "bbgIndustrySector": "",
    "countryOfIssuance": "",
    "issueCurrency": "",
    "issuer": "",
    "riskCurrency": "",
    "putDate": "2023-08-16T15:33:25.582Z",
    "putPrice": 0,
    "askPrice": 0,
    "highPrice": 0,
    "lowPrice": 0,
    "openPrice": 0,
    "volume": 0,
    "bidPrice": 0,
    "lastPrice": 0,
    "callDate": "2023-08-16T15:33:25.582Z",
    "callPrice": 0

  })
  function handleSubmit(event) {
    event.preventDefault();
    axios.post("http://localhost:5150/api/Bonds/AddBond", bonds).then(res => {alert("Bonds Inserted Successfully")}).catch(err => {alert("OOPS! Something Went wrong..Try Again")});
  }

  const handleValueChange = (e) => {
    const { name, value } = e.target;
    setBonds((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <ThemeProvider theme={theme}>
      <Card sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{ textAlign: "center" }}>Insert Bonds</h2>
        <form >

          <TextField
            type="text"
            variant='outlined'
            label="Security Description"
            name="securityDescription"
            value={bonds.securityDescription}
            onChange={handleValueChange}
            fullWidth
            sx={{ mb: 4 }}
          />





          <TextField
            type="text"
            variant='outlined'
            label="Security Name"
            name="securityName"
            value={bonds.securityName}
            onChange={handleValueChange}
            fullWidth
            required
            sx={{ mb: 4 }}

          />
          <TextField
            type="text"
            variant='outlined'
            label="Asset type"
            name="assetType"
            value={bonds.assetType}
            onChange={handleValueChange}
            fullWidth
            required
            sx={{ mb: 4 }}

          />
          <TextField
            type="text"
            variant='outlined'
            label="Investment Type"
            name="investmentType"
            value={bonds.investmentType}
            onChange={handleValueChange}
            fullWidth
            required
            sx={{ mb: 4 }}

          />
          <TextField
            type="text"
            variant='outlined'
            label="Trading Factor"
            name="tradingFactor"
            value={bonds.tradingFactor}
            onChange={handleValueChange}
            fullWidth
            sx={{ mb: 4 }}

          />
          <TextField
            type="text"
            variant='outlined'
            label="Pricing factor"
            name="pricingFactor"
            value={bonds.pricingFactor}
            onChange={handleValueChange}
            fullWidth
            sx={{ mb: 4 }}

          />
          <TextField
            type="text"
            variant='outlined'
            label="ISIN"
            name="isin"
            value={bonds.isin}
            onChange={handleValueChange}
            fullWidth
            sx={{ mb: 4 }}

          />
          <TextField
            type="text"
            variant='outlined'
            label="BBG Ticker"
            name="bbgTicker"
            value={bonds.bbgTicker}
            onChange={handleValueChange}
            fullWidth
            sx={{ mb: 4 }}

          />
          <TextField
            type="text"
            variant='outlined'
            label="BBG Unique ID"
            name="bbgUniqueId"
            value={bonds.bbgUniqueId}
            onChange={handleValueChange}
            required
            fullWidth
            sx={{ mb: 4 }}

          />
          <TextField
            type="text"
            variant='outlined'
            label="CUSIP"
            name="cusip"
            value={bonds.cusip}
            onChange={handleValueChange}
            fullWidth
            sx={{ mb: 4 }}

          />
          <TextField
            type="text"
            variant='outlined'
            label="SEDOL"
            name="sedol"
            value={bonds.sedol}
            onChange={handleValueChange}
            fullWidth
            sx={{ mb: 4 }}

          />
          <Stack sx={{ mb: 4 }} direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
            <FormLabel sx={{ p: '15px' }}>First Coupon Date</FormLabel>
            <TextField
              type="date"
              name='firstCouponDate'
              value={bonds.firstCouponDate}
              onChange={handleValueChange}
            >

            </TextField>
          </Stack>
          <TextField
            type="text"
            variant='outlined'
            label="Cap"
            name="couponCap"
            value={bonds.couponCap}
            onChange={handleValueChange}
            fullWidth
            sx={{ mb: 4 }}

          />
          <TextField
            type="text"
            variant='outlined'
            label="Coupon Floor"
            name="couponFloor"
            value={bonds.couponFloor}
            onChange={handleValueChange}
            fullWidth
            sx={{ mb: 4 }}

          />
          <TextField
            type="text"
            variant='outlined'
            label="Coupon Frequency"
            name="couponFrequency"
            value={bonds.couponFrequency}
            onChange={handleValueChange}
            fullWidth
            sx={{ mb: 4 }}

          />
          <TextField
            type="text"
            variant='outlined'
            label="Coupon Rate"
            name="couponRate"
            value={bonds.couponRate}
            onChange={handleValueChange}
            fullWidth
            sx={{ mb: 4 }}

          />
          <TextField
            type="text"
            variant='outlined'
            label="Coupon Type"
            name="couponType"
            value={bonds.couponType}
            onChange={handleValueChange}
            fullWidth
            sx={{ mb: 4 }}

          />
          <TextField
            type="text"
            variant='outlined'
            label="Spread"
            name="spread"
            value={bonds.spread}
            onChange={handleValueChange}
            fullWidth
            sx={{ mb: 4 }}

          />
          <Stack sx={{ mb: 4 }} direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
            <FormLabel sx={{ p: "15px" }}>
              Callable Flag
            </FormLabel>
            <RadioGroup
              sx={{ textAlign: 'center' }}
              row
              name="callableFlag"
              value={bonds.callableFlag}
              onChange={handleValueChange}
            >
              <FormControlLabel value="true" control={<Radio />} label="True" />
              <FormControlLabel value="false" control={<Radio />} label="False" />
            </RadioGroup>
          </Stack>
          <Stack sx={{ mb: 4 }} direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
            <FormLabel sx={{ p: "15px" }}>
              Fix to Float Flag
            </FormLabel>
            <RadioGroup
              sx={{ textAlign: 'center' }}
              row
              name="fixToFloatFlag"
              value={bonds.fixToFloatFlag}
              onChange={handleValueChange}
            >
              <FormControlLabel value="true" control={<Radio />} label="True" />
              <FormControlLabel value="false" control={<Radio />} label="False" />
            </RadioGroup>
          </Stack>
          <Stack sx={{ mb: 4 }} direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
            <FormLabel sx={{ p: "15px" }}>
              Putable Flag
            </FormLabel>
            <RadioGroup
              sx={{ textAlign: 'center' }}
              row
              name="putableFlag"
              value={bonds.putableFlag}
              onChange={handleValueChange}
            >
              <FormControlLabel value="true" control={<Radio />} label="True" />
              <FormControlLabel value="false" control={<Radio />} label="False" />
            </RadioGroup>
          </Stack>


          <Stack sx={{ mb: 4 }} direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
            <FormLabel sx={{ p: '15px' }}>Last Issue Date</FormLabel>
            <TextField
              type="date"
              name='issueDate'
              value={bonds.issueDate}
              onChange={handleValueChange}
            >

            </TextField>
          </Stack>
          <Stack sx={{ mb: 4 }} direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
            <FormLabel sx={{ p: '15px' }}>Last Reset Date</FormLabel>
            <TextField
              type="date"
              name="lastResetDate"
              value={bonds.lastResetDate}
              onChange={handleValueChange}

            >

            </TextField>
          </Stack>

          <Stack sx={{ mb: 4 }} direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
            <FormLabel sx={{ p: '15px' }}> Maturity</FormLabel>
            <TextField
              type="date"
              name='maturity'
              value={bonds.maturity}
              onChange={handleValueChange}
            >

            </TextField>
          </Stack>
          <TextField
            type="number"
            variant='outlined'
            label="Call Notification Max Days"
            name="callNotificationMaxDays"
            value={bonds.callNotificationMaxDays}
            onChange={handleValueChange}
            fullWidth
            sx={{ mb: 4 }}

          />
          <TextField
            type="text"
            variant='outlined'
            label="Put Notification Max Days"
            name="putNotificationMaxDays"
            value={bonds.putNotificationMaxDays}
            onChange={handleValueChange}
            fullWidth
            sx={{ mb: 4 }}

          />
          <Stack sx={{ mb: 4 }} direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
            <FormLabel sx={{ p: '15px' }}>Penultimate Coupon Date</FormLabel>
            <TextField
              type="date"
              name='penultimateCouponDate'
              value={bonds.penultimateCouponDate}
              onChange={handleValueChange}
            >

            </TextField>
          </Stack>

          <TextField
            type="text"
            variant='outlined'
            label="Reset Frequency"
            name="resetFrequency"
            value={bonds.resetFrequency}
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
              value={bonds.hasPosition}
              onChange={handleValueChange}
            >
              <FormControlLabel value="true" control={<Radio />} label="True" />
              <FormControlLabel value="false" control={<Radio />} label="False" />
            </RadioGroup>
          </Stack>



          <TextField
            type="text"
            variant='outlined'
            label="Macaulay Duration "
            name="macaulayDuration"
            value={bonds.macaulayDuration}
            onChange={handleValueChange}
            fullWidth
            sx={{ mb: 4 }}

          />
          <TextField
            type="text"
            variant='outlined'
            label="30D Volatility"
            name="volatility30days"
            value={bonds.volatility30days}
            onChange={handleValueChange}
            fullWidth
            sx={{ mb: 4 }}

          />
          <TextField
            type="text"
            variant='outlined'
            label="90D Volatility"
            name="volatility90days"
            value={bonds.volatility90days}
            onChange={handleValueChange}
            fullWidth
            sx={{ mb: 4 }}

          />
          <TextField
            type="text"
            variant='outlined'
            label="Convexity"
            name="convexity"
            value={bonds.convexity}
            onChange={handleValueChange}
            fullWidth
            sx={{ mb: 4 }}

          />
          <TextField
            type="text"
            variant='outlined'
            label="30 Days Average volume"
            name="avgVolume30days"
            value={bonds.avgVolume30days}
            onChange={handleValueChange}
            fullWidth
            sx={{ mb: 4 }}

          />
          <TextField
            type="text"
            variant='outlined'
            label="PF Asset Class"
            name="pfAssetClass"
            value={bonds.pfAssetClass}
            onChange={handleValueChange}
            fullWidth
            sx={{ mb: 4 }}

          />
          <TextField
            type="text"
            variant='outlined'
            label="PF Country"
            name="pfCountry"
            value={bonds.pfCountry}
            onChange={handleValueChange}
            fullWidth
            sx={{ mb: 4 }}

          />
          <TextField
            type="text"
            variant='outlined'
            label="PF Credit Rating"
            name="pfCreditRating"
            value={bonds.pfCreditRating}
            onChange={handleValueChange}
            fullWidth
            sx={{ mb: 4 }}

          />
          <TextField
            type="text"
            variant='outlined'
            label="PF Currency"
            name="pfCurrency"
            value={bonds.pfCurrency}
            onChange={handleValueChange}
            fullWidth
            sx={{ mb: 4 }}

          />
          <TextField
            type="text"
            variant='outlined'
            label="PF Instrument"
            name="pfInstrument"
            value={bonds.pfInstrument}
            onChange={handleValueChange}
            fullWidth
            sx={{ mb: 4 }}

          />
          <TextField
            type="text"
            variant='outlined'
            label="PF Liquidity Profile"
            name="pfLiquidityProfile"
            value={bonds.pfLiquidityProfile}
            onChange={handleValueChange}
            fullWidth
            sx={{ mb: 4 }}

          />
          <TextField
            type="text"
            variant='outlined'
            label="PF Maturity"
            name="pfMaturity"
            value={bonds.pfMaturity}
            onChange={handleValueChange}
            fullWidth
            sx={{ mb: 4 }}

          />
          <TextField
            type="text"
            variant='outlined'
            label="PFNAICS Code"
            name="pfNaicsCode"
            value={bonds.pfNaicsCode}
            onChange={handleValueChange}
            fullWidth
            sx={{ mb: 4 }}

          />
          <TextField
            type="text"
            variant='outlined'
            label="PF Region"
            name="pfRegion"
            value={bonds.pfRegion}
            onChange={handleValueChange}
            fullWidth
            sx={{ mb: 4 }}

          />
          <TextField
            type="text"
            variant='outlined'
            label="PF Sector"
            name="pfSector"
            value={bonds.pfSector}
            onChange={handleValueChange}
            fullWidth
            sx={{ mb: 4 }}

          /> <TextField
            type="text"
            variant='outlined'
            label="PF Sub Asset Class"
            name="pfSubAssetClass"
            value={bonds.pfSubAssetClass}
            onChange={handleValueChange}
            fullWidth
            sx={{ mb: 4 }}

          />
          <TextField
            type="text"
            variant='outlined'
            label="Bloomberg Industry Group"
            name="bbgIndustryGroup"
            value={bonds.bbgIndustryGroup}
            onChange={handleValueChange}
            fullWidth
            sx={{ mb: 4 }}

          />
          <TextField
            type="text"
            variant='outlined'
            label="Bloomberg Industry Sub Group"
            name="bbgIndustrySubGroup"
            value={bonds.bbgIndustrySubGroup}
            onChange={handleValueChange}
            fullWidth
            sx={{ mb: 4 }}

          />
          <TextField
            type="text"
            variant='outlined'
            label="Bloomberg Industry Sector"
            name="bbgIndustrySector"
            value={bonds.bbgIndustrySector}
            onChange={handleValueChange}
            fullWidth
            sx={{ mb: 4 }}

          />
          <TextField
            type="text"
            variant='outlined'
            label="Country of Issuance"
            name="countryOfIssuance"
            value={bonds.countryOfIssuance}
            onChange={handleValueChange}
            fullWidth
            sx={{ mb: 4 }}

          />
          <TextField
            type="text"
            variant='outlined'
            label="Issue Currency "
            name="issueCurrency"
            value={bonds.issueCurrency}
            onChange={handleValueChange}
            fullWidth
            sx={{ mb: 4 }}

          />
          <TextField
            type="text"
            variant='outlined'
            label="Issuer"
            name="issuer"
            value={bonds.issuer}
            onChange={handleValueChange}
            fullWidth
            sx={{ mb: 4 }}

          />
          <TextField
            type="text"
            variant='outlined'
            label="Risk Currency"
            name="riskCurrency"
            value={bonds.riskCurrency}
            onChange={handleValueChange}
            fullWidth
            sx={{ mb: 4 }}

          />

          <Stack sx={{ mb: 4 }} direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
            <FormLabel sx={{ p: '15px' }}>Last Reset Date</FormLabel>
            <TextField
              type="date"
              variant='outlined'
              label="Put Date"
              name="putDate"
              value={bonds.putDate}
              onChange={handleValueChange}

            >

            </TextField>
          </Stack>

          <TextField
            type="text"
            variant='outlined'
            label="Put Price"
            name="putPrice"
            value={bonds.putPrice}
            onChange={handleValueChange}
            fullWidth
            sx={{ mb: 4 }}

          />
          <TextField
            type="text"
            variant='outlined'
            label="Ask Price"
            name="askPrice"
            value={bonds.askPrice}
            onChange={handleValueChange}
            fullWidth
            sx={{ mb: 4 }}

          />
          <TextField
            type="text"
            variant='outlined'
            label="High Price "
            name="highPrice"
            value={bonds.highPrice}
            onChange={handleValueChange}
            fullWidth
            sx={{ mb: 4 }}

          />
          <TextField
            type="text"
            variant='outlined'
            label="Low Price"
            name="lowPrice"
            value={bonds.lowPrice}
            onChange={handleValueChange}
            fullWidth
            sx={{ mb: 4 }}

          />
          <TextField
            type="text"
            variant='outlined'
            label="Open Price"
            name="openPrice"
            value={bonds.openPrice}
            onChange={handleValueChange}
            fullWidth
            sx={{ mb: 4 }}

          />
          <TextField
            type="text"
            variant='outlined'
            label="Volume"
            name="volume"
            value={bonds.volume}
            onChange={handleValueChange}
            fullWidth
            sx={{ mb: 4 }}

          />
          <TextField
            type="text"
            variant='outlined'
            label="Bid Price"
            name="bidPrice"
            value={bonds.bidPrice}
            onChange={handleValueChange}
            fullWidth
            sx={{ mb: 4 }}

          />
          <TextField
            type="text"
            variant='outlined'
            label="Last Price"
            name="lastPrice"
            value={bonds.lastPrice}
            onChange={handleValueChange}
            fullWidth
            sx={{ mb: 4 }}

          />
          <TextField
            type="text"
            variant='outlined'
            label="Call Price"
            name="callPrice"
            value={bonds.callPrice}
            onChange={handleValueChange}
            fullWidth
            sx={{ mb: 4 }}

          />
          <div style={{
            display: "flex",
            justifyContent: "center"
          }}>
            <Button size="small" variant="contained" type="submit" sx={{ m: 2 }} onClick={() => navigate(-1)} >GO Back</Button>
            <Button variant="contained" type="submit" onClick={handleSubmit} sx={{ m: 2 }}>Submit</Button>
          </div>
        </form>
      </Card>
    </ThemeProvider>
  )
}

export default InsertBonds
