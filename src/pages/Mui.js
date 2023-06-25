import {Stack} from "@mui/material";
import Button from '@mui/material/Button';

const Mui = () => {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}

export default Mui;