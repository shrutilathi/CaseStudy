import React, { useState }  from 'react'
import { TextField, FormControl, FormLabel, Grid, styled, Box, Stack, Button, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import dummy from '../../data/dummy';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';

const Item = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center'
}));

const SecSummary = ({id}) => {
    const [isInputEnabled, setInputEnabled] = useState(false);

    const enableInput = () => {
        setInputEnabled(true);
    };
    return (
        <>
            <Box sx={{ width: '100%' }}>
                <FormControl>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                        <Grid item xs={12} sm={6} md={6}>
                            <Item>
                                <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                                    <FormLabel sx={{ width: '150px' }}>Security Name{id}</FormLabel>
                                    <TextField disabled={!isInputEnabled} type="text" variant='filled' defaultValue={""} />
                                </Stack>
                            </Item>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <Item>
                                <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                                    <FormLabel sx={{ width: '150px' }}>Security Description</FormLabel>
                                    <TextField disabled={!isInputEnabled} multiline type="text" variant='filled' defaultValue={dummy[0].secDes} />
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
                                        defaultValue={dummy[0].hasPosition}
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
                                        defaultValue={dummy[0].hasPosition}
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
        </>
    )
}

export default SecSummary
