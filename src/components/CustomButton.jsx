import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const StyledButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, #4C0529 30%, #900C3F 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
}));

const RootBox = styled(Box)({
  textAlign: 'center',
  marginTop: '50px',
});

const CustomButton = ({ children }) => {
  return (
    <RootBox>
      <StyledButton>{children}</StyledButton>
    </RootBox>
  );
};

export default CustomButton;