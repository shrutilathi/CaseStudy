import React, { useState } from 'react'
import { TextField, FormControl, FormLabel, Grid, styled, Box, Stack, Button, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const Item = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center'
}));

const BSecDetails = () => {
  const [isInputEnabled, setInputEnabled] = useState(false);

  const enableInput = () => {
    setInputEnabled(true);
  };
  return (
    <Box sx={{ width: '100%' }}>
      <FormControl>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
          First coupon date
          <Grid item xs={12} sm={6} md={6}>
            <Item>
              <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                <FormLabel sx={{ width: '150px' }}>Coupon Cap</FormLabel>
                <TextField disabled={!isInputEnabled} type="text" variant='filled' />
              </Stack>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Item>
              <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                <FormLabel sx={{ width: '150px' }}>Coupon Floor</FormLabel>
                <TextField disabled={!isInputEnabled} type="text" variant='filled' />
              </Stack>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Item>
              <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                <FormLabel sx={{ width: '150px' }}>Coupon Frequency</FormLabel>
                <TextField disabled={!isInputEnabled} type="text" variant='filled' />
              </Stack>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Item>
              <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                <FormLabel sx={{ width: '150px' }}>Coupon Rate</FormLabel>
                <TextField disabled={!isInputEnabled} type="text" variant='filled' />
              </Stack>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Item>
              <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                <FormLabel sx={{ width: '150px' }}>Coupon Type</FormLabel>
                <TextField disabled={!isInputEnabled} type="text" variant='filled' />
              </Stack>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Item>
              <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                <FormLabel sx={{ width: '150px' }}>  Float Spread</FormLabel>
                <TextField disabled={!isInputEnabled} type="text" variant='filled' />
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
          Issue Date
          Last Reset Date
          rMaturity
          <Grid item xs={12} sm={6} md={6}>
            <Item>
              <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                <FormLabel sx={{ width: '150px' }}>Maximum Call Notice Days</FormLabel>
                <TextField disabled={!isInputEnabled} type="text" variant='filled' />
              </Stack>
            </Item>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Item>
              <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                <FormLabel sx={{ width: '150px' }}>Maximum Put Notice Days</FormLabel>
                <TextField disabled={!isInputEnabled} type="text" variant='filled' />
              </Stack>
            </Item>
          </Grid>
          Penultimate Coupon Date
          <Grid item xs={12} sm={6} md={6}>
            <Item>
              <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
                <FormLabel sx={{ width: '150px' }}>Reset Frequency</FormLabel>
                <TextField disabled={!isInputEnabled} type="text" variant='filled' />
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
                  <FormControlLabel value="false"disabled={!isInputEnabled}  control={<Radio />} label="False" />
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
  )
}

export default BSecDetails
