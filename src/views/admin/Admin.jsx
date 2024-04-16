import { Box, Typography } from "@mui/material"

export const Admin = () => {
  return (
    <Box sx={{ my: 2 }}>
      <Typography variant='h1'> Admin </Typography>
      {[...new Array(33)].map( () => `Cras mattis consectetur purus sit amet fermentum.
        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
      ).join('\n')}
    </Box>
  )
}