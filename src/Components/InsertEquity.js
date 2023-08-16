import React, { useState } from 'react';
import { TextField, Button, Stack, RadioGroup, Radio, FormControl, FormLabel, ThemeProvider, createTheme, Card, FormControlLabel } from '@mui/material';
import { Link } from "react-router-dom"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
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

    function handleSubmit(event) {
        event.preventDefault();
    }

    

    return (
        <ThemeProvider theme={theme}>
            <Card sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h2 style={{ textAlign: "center" }}>Insert Equity</h2>
                <form onSubmit={handleSubmit} action={<Link to="/login" />}>
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Security Name"
                        name="secName"
                        value={}
                        // onChange={}
                        fullWidth
                        required
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Security Description"
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
                            name="row-radio-buttons-group"
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
                            name="row-radio-buttons-group"
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
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="BBG Unique Name"
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="CUSIP"
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="ISIN"
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="SEDOL"
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Bloomberg Ticker"
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Bloomberg Unique ID"
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="BBG Global ID"
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
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="true" control={<Radio />} label="True" />
                            <FormControlLabel value="false" control={<Radio />} label="False" />
                        </RadioGroup>
                    </Stack>
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Ticker and Exchange"
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="ADR Underlying Ticker"
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="ADR Underlying Currency"
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Shares Per ADR"
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <Stack sx={{ mb: 4 }} direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                        <FormLabel sx={{ p: '15px' }}>IPO Date</FormLabel>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker />
                        </LocalizationProvider>
                    </Stack>
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Pricing Currency"
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Total Shares Outstanding"
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Voting Rights Per Share"
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Average Volume - 20D"
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Beta"
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Short Interest"
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Return - YTD"
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Volatility - 90D"
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="PF Assest Class"
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="PF Country"
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="PF Credit Rading"
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="PF Currency"
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="PF Instrument"
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="PF Liquidity Profile"
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="PF Maturity"
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="PF NAICS Code"
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="PF Region"
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="PF Sector"
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="PF Sub Assest Class"
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Country of Issuance"
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Exchange"
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Issuer"
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Issue Currency"
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Trading Currency"
                        fullWidth
                        required
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="BBG Industry Sub Group"
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Bloomberg Industry Group"
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Bloomberg Sector"
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Country of Incorporation"
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Risk Currency"
                        fullWidth
                        sx={{ mb: 4 }}
                    />

                    <TextField
                        type="text"
                        variant='outlined'
                        label="Open Price"
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Close Price"
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Volume"
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Last Price"
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Ask Price"
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Bid Price"
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="PE Ratio"
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <Stack sx={{ mb: 4 }} direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                        <FormLabel sx={{ p: '15px' }}>Dividend Declared Date</FormLabel>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>

                            <DatePicker />
                        </LocalizationProvider>
                    </Stack>
                    <Stack sx={{ mb: 4 }} direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                        <FormLabel sx={{ p: '15px' }}>Dividend Ex Date</FormLabel>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker />
                        </LocalizationProvider>
                    </Stack>
                    <Stack sx={{ mb: 4 }} direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                        <FormLabel sx={{ p: '15px' }}>Dividend Record Date</FormLabel>
                        {/* <TextField type="text" variant='filled' /> */}
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker />
                        </LocalizationProvider>
                    </Stack>
                    <Stack sx={{ mb: 4 }} direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                        <FormLabel sx={{ p: '15px' }}>Dividend Pay Date</FormLabel>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker />
                        </LocalizationProvider>
                    </Stack>
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Dividend Amount"
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Frequency"
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        label="Dividend Type"
                        fullWidth
                        sx={{ mb: 4 }}
                    />
                    <div style={{
                        display: "flex",
                        justifyContent: "center"
                    }}>
                        <Button size="small" variant="contained" type="submit" sx={{m:2}} onClick={() => navigate(-1)}>GO Back</Button>
                        <Button variant="contained" type="submit" sx={{m:2}}>Submit</Button>
                    </div>
                </form>
            </Card>
        </ThemeProvider>

    )
}

export default InsertEquity;