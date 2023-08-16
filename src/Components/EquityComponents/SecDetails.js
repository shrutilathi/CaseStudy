import React, { useState }  from 'react'
import { TextField,FormControl, FormLabel, Grid, styled, Box, Stack, Button, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';



const Item = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center'
}));

const SecDetails = () => {
    const [isInputEnabled, setInputEnabled] = useState(false);

    const enableInput = () => {
        setInputEnabled(true);
    };
    return (
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
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel disabled={!isInputEnabled} value="true" control={<Radio />} label="True" />
                                    <FormControlLabel disabled={!isInputEnabled} value="false" control={<Radio />} label="False" />
                                </RadioGroup>

                            </Stack>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Item>
                            <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                                <FormLabel sx={{ width: '150px' }}>ADR Underlying Ticker</FormLabel>
                                <TextField disabled={!isInputEnabled} type="text" variant='filled' />
                            </Stack>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Item>
                            <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                                <FormLabel sx={{ width: '150px' }}>ADR Underlying Currency</FormLabel>
                                <TextField disabled={!isInputEnabled} type="text" variant='filled' />
                            </Stack>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Item>
                            <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                                <FormLabel sx={{ width: '150px' }}>Shares Per ADR</FormLabel>
                                <TextField disabled={!isInputEnabled} type="text" variant='filled' />
                            </Stack>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Item>
                            <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                                <FormLabel sx={{ width: '150px' }}>IPO Date</FormLabel>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>

                                    <DatePicker />
                                </LocalizationProvider>
                            </Stack>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Item>
                            <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                                <FormLabel sx={{ width: '150px' }}>Price Currency</FormLabel>
                                <TextField disabled={!isInputEnabled} type="text" variant='filled' />
                            </Stack>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Item>
                            <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                                <FormLabel sx={{ width: '150px' }}>Settle Days</FormLabel>
                                <TextField disabled={!isInputEnabled} type="number" variant='filled' />
                            </Stack>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Item>
                            <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                                <FormLabel sx={{ width: '150px' }}>Shares Outstanding</FormLabel>
                                <TextField disabled={!isInputEnabled} type="text" variant='filled' />
                            </Stack>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Item>
                            <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                                <FormLabel sx={{ width: '150px' }}>Voting Rights Per Share</FormLabel>
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
    )
}

export default SecDetails
