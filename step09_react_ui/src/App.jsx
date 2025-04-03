
import { useState } from 'react';

import LineChartEx from './components/recharts/LineChartEx';
import RadarChartEx from './components/recharts/RadarChartEx';
import ScatterChartEx from './components/recharts/ScatterChartEx';
import TreemapEx from './components/recharts/TreemapEx';
import CustomActiveShapePieChartEx from './components/recharts/CustomActiveShapePieChartEx';
import ComposedChartWithAxisLabelsEx from './components/recharts/ComposedChartWithAxisLabelsEx';
import ButtonEx from './components/mui/ButtonEx';
import SliderEx from './components/mui/SliderEx';
import { ImageList, Tab } from '@mui/material';
import ImageListEx from './components/mui/ImageListEx';
import IconEx from './components/mui/IconEx';
import TabsEx from './components/mui/TabsEx';

function App() {

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

      <ButtonEx />
      <hr/>
      <SliderEx />
      <hr/>
      <TabsEx />
      <hr/>
      <ImageListEx />
      <hr/>
      <IconEx />
      <hr/>
      

    </div>
  );
}

export default App
