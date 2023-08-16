import React from 'react'
import {Box,Button,Card} from '@mui/material';
import EquityForm from './EquityForm';
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";
const Equity = ({id}) => {
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
          <EquityForm/>
        </Card>
      </Box>
    
  )
}

export default Equity

