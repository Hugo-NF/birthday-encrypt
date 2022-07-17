import {
  Box,
  Button,
  Typography,
} from '@mui/material';

import { useState } from 'react';

import CertificateInput from '../../components/CertificateInput';

import encrypted from '../../assets/encrypted';

const Letter = () => {
  const [content, setContent] = useState<string>(encrypted);

  return (
    <Box sx={{ margin: 10 }}>
      <CertificateInput content={content} setContent={setContent} />
      <Typography variant="body1">{content}</Typography>
      <Button variant="outlined" onClick={() => window.print()} sx={{ margin: 5 }}>Imprimir</Button>
    </Box>
  );
};

export default Letter;
