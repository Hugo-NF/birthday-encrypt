import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import {
  Button,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

import { JSEncrypt } from 'jsencrypt';

import SampleCertificate from '../../assets/sample';

import encrypted from '../../assets/encrypted';
import Player from '../Player';

export interface ICertificateInputProps {
  setContent: Dispatch<SetStateAction<string>>
}

const Alert = forwardRef<HTMLDivElement, AlertProps>((
  props,
  ref,
) => <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />);

const CertificateInput = ({ setContent }: ICertificateInputProps) => {
  const [certificate, setCertificate] = useState<string>(localStorage.getItem('certificate') || '');
  const [display, setDisplay] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const mountRef = useRef(false);

  // Start decryptor
  const decryptor = new JSEncrypt();

  const decryptContent = useCallback(() => {
    decryptor.setPrivateKey(certificate);
    setContent('');

    encrypted.forEach((messageEnc) => {
      const uncrypted = decryptor.decrypt(messageEnc);
      if (uncrypted) {
        setContent((prevContent) => prevContent.concat(uncrypted));
        setDisplay(false);
        localStorage.setItem('certificate', certificate);
      } else {
        setError(true);
      }
    });
  }, [certificate]);

  useEffect(() => {
    if (!mountRef.current) {
      if (certificate.length > 0) {
        decryptContent();
      }
      mountRef.current = true;
    }
  }, []);

  return display ? (
    <Grid
      container
      direction="row"
      spacing={3}
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Snackbar
        open={error}
        autoHideDuration={10000}
        onClose={() => setError(false)}
      >
        <Alert severity="error">O certificado enviado está incorreto, confira se copiou todo o conteúdo do mesmo</Alert>
      </Snackbar>
      <Grid item>
        <Typography variant="h5">Certificado</Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="outlined-multiline-static"
          label="Insira o certificado que você recebeu pelo WhatsApp"
          multiline
          minRows={10}
          maxRows={15}
          placeholder={SampleCertificate}
          fullWidth
          value={certificate}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setCertificate(event.target.value)}
        />
      </Grid>
      <Grid item>
        <Button variant="contained" onClick={decryptContent}>Revelar conteúdo</Button>
      </Grid>
    </Grid>

  ) : (<Player />);
};

export default CertificateInput;
