import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Equity from './Equity';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Bonds from './Bonds';
import axios from 'axios'


let theme = createTheme({
  palette: {
    primary: {
      main: '#F2CE72',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
});

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const Home = () => {
  const [searchField, setSearchField] = useState(0);
  const [bonds,setBonds]=useState(false)
  const [eqData,setEqData]=useState({})
  const [bondsData,setBondsData]=useState({})
  const handleSearchChange = e => {
    axios.get(`http://localhost:5150/api/Equity/GetEquityById/${searchField}`).then(
      res=>setEqData(res.data)
    ).catch(err=>console.log(err))

    axios.get(`http://localhost:5150/api/Bonds/GetBondById/${searchField}`).then(
      res=>setBondsData(res.data)
    ).catch(err=>console.log(err))
    
    console.log(eqData)
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Stack sx={{placeContent: "center"}} spacing={4} direction="row">
          <Button variant="contained" onClick={()=>setBonds(false)}>EQUITY</Button>
          <Button variant="contained" onClick={()=>setBonds(true)}>BONDS</Button>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Enter Security ID"
              inputProps={{ 'aria-label': 'search' }}
              value={searchField}
              onChange={(e)=>setSearchField(e.target.value)}
            />
             <Button size="small" variant="outlined" sx={{margin:'4px'}}
              onClick ={handleSearchChange}
             >Search</Button>
          </Search>
        </Stack>
        {
          bonds? <Bonds bondsData={bondsData}/>: <Equity eqData={eqData}/>
        }
      
      </ThemeProvider>
    </div>
  )
}

export default Home
