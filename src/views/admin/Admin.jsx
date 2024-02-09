import React from 'react'
import { Typography } from '../../components/material-ui/Typography'
import { Box } from '../../components/material-ui/Box'

export const Admin = () => {
  return (
    <>
        <Typography variant='h1'>
            Admin
        </Typography>
        <Box sx={{ my: 2 }}>
          {[...new Array(33)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
        </Box>
    </>
  )
}
