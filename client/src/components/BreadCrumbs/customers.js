import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function BreadCrumbCustomers() {
  return (
    <div style={{backgroundColor:'red'}}>
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="white" onClick={() => window.location.href = '/'}>
          Home
        </Link>
        <Link underline="hover" color="white" onClick={() => window.location.href = '/MyShops'}>
          MyShops
        </Link>
        <Link underline="hover" color="white" onClick={() => window.location.href = '/Dashboard'}>
          Dashboard
        </Link>
        <Typography color="white">Customers</Typography>
      </Breadcrumbs>
    </div>
    </div>
  );
}
