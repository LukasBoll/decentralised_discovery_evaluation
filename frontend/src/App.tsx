import * as React from 'react';
import Model from './components/Model';
import MenuAppBar from './components/MenuAppBar';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Organization } from './Models/models';
import Config from './components/Config';

const theme = createTheme({
  palette: {
    text: {
      primary:'#000',
      secondary:'#fff',
    }
  },
});

export default function App() {

  const organizations:Organization[] = [{ name: "Supplier", address: 'http://localhost:8080' }, { name: "Car Manufacturer", address: 'http://localhost:8081' }];

  const [activeOrganization, setActiveOrganization] = React.useState<Organization>(organizations[0]);
  const [activeTab, setActiveTab] = React.useState<number>(0);


  return (
    <div>
      <ThemeProvider theme={theme}>
        <MenuAppBar
          organizations={organizations}
          activeOrganization={activeOrganization}
          setActiveOrganization={setActiveOrganization}
          activeTab={activeTab}
          setActiveTab={setActiveTab} />
        {activeTab == 0 ?
          <Config activeOrganization={activeOrganization} />
          : <Model activeOrganization={activeOrganization}/>}
      </ThemeProvider>
    </div>
  );
}
