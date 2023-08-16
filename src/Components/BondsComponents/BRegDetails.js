import React , { useState } from 'react'
import { TextField, FormControl, FormLabel, Grid, styled, Box, Stack, Button, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';

const Item = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center'
}));
const BRegDetails = () => {
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
              <FormLabel sx={{ width: '150px' }}>PF Assest Class</FormLabel>
              <TextField disabled={!isInputEnabled} type="text" variant='filled' />
            </Stack>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Item>
            <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
              <FormLabel sx={{ width: '150px' }}>PF Country</FormLabel>
              <TextField disabled={!isInputEnabled} type="text" variant='filled' />
            </Stack>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Item>
            <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
              <FormLabel sx={{ width: '150px' }}>PF Credit Rating</FormLabel>
              <TextField disabled={!isInputEnabled} type="text" variant='filled' />
            </Stack>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Item>
            <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
              <FormLabel sx={{ width: '150px' }}>PF Currency</FormLabel>
              <TextField disabled={!isInputEnabled} type="text" variant='filled' />
            </Stack>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Item>
            <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
              <FormLabel sx={{ width: '150px' }}>PF Instrument</FormLabel>
              <TextField disabled={!isInputEnabled} type="text" variant='filled' />
            </Stack>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Item>
            <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
              <FormLabel sx={{ width: '150px' }}>PF Liquidity Profile</FormLabel>
              <TextField disabled={!isInputEnabled} type="text" variant='filled' />
            </Stack>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Item>
            <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
              <FormLabel sx={{ width: '150px' }}>PF Maturity</FormLabel>
              <TextField disabled={!isInputEnabled} type="text" variant='filled' />
            </Stack>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Item>
            <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
              <FormLabel sx={{ width: '150px' }}>PF NAICS Code</FormLabel>
              <TextField disabled={!isInputEnabled} type="text" variant='filled' />
            </Stack>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Item>
            <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
              <FormLabel sx={{ width: '150px' }}>PF Region</FormLabel>
              <TextField disabled={!isInputEnabled} type="text" variant='filled' />
            </Stack>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Item>
            <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
              <FormLabel sx={{ width: '150px' }}>PF Sector</FormLabel>
              <TextField disabled={!isInputEnabled} type="text" variant='filled' />
            </Stack>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Item>
            <Stack direction={{ xs: 'column', sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 1, md: 2 }}>
              <FormLabel sx={{ width: '150px' }}>PF Sub Asset Class</FormLabel>
              <TextField disabled={!isInputEnabled} type="text" variant='filled' />
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

export default BRegDetails
