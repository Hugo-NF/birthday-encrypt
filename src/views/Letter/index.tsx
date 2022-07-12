import {
  Box,
  Typography,
} from '@mui/material';

import { useState } from 'react';
import CertificateInput from '../../components/CertificateInput';

const Letter = () => {
  const [content, setContent] = useState<string>('VsL5wPnYtU6EkaGHZCy2Ot0+EeCEURfu0FdVT+iDd2z2rv95sryHS2wzqBZbZ4eN0+DxUpLH8qwWG4Wx6rhgbmEmNWglZfwRVPlUCpmoQgQEYgYRuSUBEWifC/fZ3YigRSlBDErxPcw/eUw5303XEPZ/4jGANzi9RBTRfs+kN5E=');

  return (
    <Box sx={{ margin: 10 }}>
      <CertificateInput content={content} setContent={setContent} />
      <Typography variant="body2">{content}</Typography>
    </Box>
  );
};

export default Letter;
