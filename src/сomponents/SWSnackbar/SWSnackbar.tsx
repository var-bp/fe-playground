import * as React from 'react';
import * as SC from './SWSnackbar.style';

const SWSnackbar = () => (
  <SC.Container id="sw-snackbar">
    <SC.Surface>
      <SC.Label>A new version of the website available</SC.Label>
      <SC.Action>Reload page</SC.Action>
    </SC.Surface>
  </SC.Container>
);

export default React.memo(SWSnackbar);
