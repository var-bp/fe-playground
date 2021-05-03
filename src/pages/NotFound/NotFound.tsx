import * as React from 'react';
import Grid from '../../сomponents/Grid';
import * as SC from './NotFound.style';

const NotFound = (): JSX.Element => {
  return (
    <SC.Container>
      <Grid>
        <SC.Content>
          <div>
            <SC.ImageContainer>
              <SC.Image
                src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-49623.gif"
                alt="Oops! We can’t find the page that you’re looking for."
              />
            </SC.ImageContainer>
            <SC.TextContainer>
              <div>Oops!</div>
              <div>We can’t find the page that you’re looking for.</div>
              <div>Please try retyping the URL.</div>
            </SC.TextContainer>
          </div>
        </SC.Content>
      </Grid>
    </SC.Container>
  );
};

export default NotFound;
