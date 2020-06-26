import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../ProTip';
import Link from '../Link';
import Copyright from '../components/Copyright';

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography>
          Luciana Abraao Studio
        </Typography>
        <Link href="/about" as="prueba">Ir al about</Link>
        <Copyright />
      </Box>
    </Container>
  );
}

Index.get