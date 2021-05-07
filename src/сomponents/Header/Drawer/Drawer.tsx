import * as React from 'react';
import * as SC from './Drawer.style';

interface DrawerProps {
  isActive: boolean;
  children: React.ReactNode;
  onMaskClick(e: React.MouseEvent<HTMLDivElement>): void;
}

const Drawer = ({isActive, children, onMaskClick}: DrawerProps): JSX.Element => {
  return (
    <SC.Container isActive={isActive}>
      <SC.Mask isActive={isActive} onClick={onMaskClick} />
      <SC.ContentWrapper isActive={isActive}>
        <SC.Content>{children}</SC.Content>
      </SC.ContentWrapper>
    </SC.Container>
  );
};

export default React.memo(Drawer);
