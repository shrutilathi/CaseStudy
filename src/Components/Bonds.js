import React from 'react'
import {Box,Button,Card} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";
import BondsForm from './BondsForm';
const Bonds = () => {
  return (
    <Box sx={{ p: 2 }}>
    <Box display="flex"
      justifyContent="center"
      alignItems="center">
      <Button size="small" startIcon={<AddIcon />} variant="contained" sx={{ m: 2 }} >
        <Link to="insertBonds">Insert New Bonds</Link>
      </Button>
    </Box>

    <Card variant="outlined">
      <BondsForm/>
    </Card>
  </Box>
  )
}

export default Bonds
