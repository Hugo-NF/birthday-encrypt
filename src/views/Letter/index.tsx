import {
  Box,
  Typography,
} from '@mui/material';

import { useState } from 'react';

import CertificateInput from '../../components/CertificateInput';

import encrypted from '../../assets/encrypted';

const Letter = () => {
  const [content, setContent] = useState<string>(encrypted.join(''));

  return (
    <Box sx={{ margin: 10 }}>
      <CertificateInput setContent={setContent} />
      {content.split('|').map((strToken) => (<Typography variant="body1" key={strToken.at(0)} sx={{ marginY: 1 }}>{strToken}</Typography>))}
    </Box>
  );
};

export default Letter;
