import React from 'react'
import { AppBar, Toolbar, Button } from '@mui/material'
import { Typography, Box, Menu, MenuItem } from '@mui/material'
import { Link } from 'react-router-dom'

export const HeaderNavigation: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <AppBar
      position="sticky"
      color="transparent"
      sx={{ boxShadow: 'none', padding: 0, margin: 0 }}
    >
      <Toolbar>
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            alignItems: 'center',
          }}
        >
          <Typography
            variant="button"
            component={Link}
            to="/"
            sx={{ textDecoration: 'none', color: 'inherit' }}
          >
            Aurora Team
          </Typography>

          <Button color="inherit" onClick={handleClick}>
            Продукты
          </Button>
          <Button color="inherit">О нас</Button>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>Электронное меню</MenuItem>
            <MenuItem component={Link} to="/delivery" onClick={handleClose}>
              Доставка
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
