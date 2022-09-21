import React from 'react';
import { Box, CircularProgress, Stack , Skeleton } from '@mui/material';

const Loader = () =>  (
  <Box minHeight="95vh">
    <Stack direction='row' justifyContent='center' alignItems='center' height='80vh' >
      {/* <CircularProgress /> */}
      <Skeleton animation="wave"/>
    </Stack>
  </Box>
);

export default Loader;