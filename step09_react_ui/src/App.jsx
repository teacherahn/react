
import { useState } from 'react';

import LineChartEx from './components/step01_recharts/LineChartEx';
import RadarChartEx from './components/step01_recharts/RadarChartEx';
import ScatterChartEx from './components/step01_recharts/ScatterChartEx';
import TreemapEx from './components/step01_recharts/TreemapEx';
import CustomActiveShapePieChartEx from './components/step01_recharts/CustomActiveShapePieChartEx';
import ComposedChartWithAxisLabelsEx from './components/step01_recharts/ComposedChartWithAxisLabelsEx';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import { TextField , Button , Modal, Stack, Slider, Box, Typography   } from '@mui/material';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = useState(30);


  return (
    <div>

      {/* <LineChartEx />
      <hr/>
      <RadarChartEx/>
      <hr/>
      <ScatterChartEx/>
      <hr/>
      <TreemapEx />
      <hr/>     
      <CustomActiveShapePieChartEx />
      <hr/>
      <ComposedChartWithAxisLabelsEx/>  */}

<TextField id="outlined-basic" label="Outlined" variant="outlined" />
<TextField id="filled-basic" label="Filled" variant="filled" />
<TextField id="standard-basic" label="Standard" variant="standard" />

<Button variant="text">Text</Button>
<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>
<Button>Primary</Button>
<Button disabled>Disabled</Button>
<Button href="#text-buttons">Link</Button>


<Box sx={{ width: 200 }}>
      <Stack spacing={2} direction="row" sx={{ alignItems: 'center', mb: 1 }}>
        <VolumeDown />
        <Slider aria-label="Volume" value={value} onChange={(e) => setValue(e.target.value)} />
        <VolumeUp />
      </Stack>
      <Slider disabled defaultValue={30} aria-label="Disabled slider" />
    </Box>


    <Button onClick={handleOpen}>Open modal</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Text in a modal
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </Typography>
  </Box>
</Modal>


    </div>
  );
}

export default App
