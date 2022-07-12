import {
  Box,
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
    </Box>
  );
};

export default Letter;
