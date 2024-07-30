import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, styled } from '@mui/material';

// Import your image
import backgroundImage from '../images/indigo_flight.webp';

const RootContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    textAlign: 'center',
    color: '#fff',
    padding: theme.spacing(4),
    borderTop: `10px solid #fff`, // White border at the top
    borderBottom: `10px solid #fff`, // White border at the bottom
    position: 'relative', // For absolute positioning of overlay
}));

const Overlay = styled('div')(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent overlay
    zIndex: -1, // Ensure overlay is behind content
}));

const ContentBox = styled('div')(({ theme }) => ({
    position: 'relative',
    padding: theme.spacing(4),
    borderRadius: '8px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    zIndex: 1, // Ensure content box is above the overlay
}));

const Heading = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(4),
    fontWeight: 'bold',
    fontSize: '2.5rem',
    color: '#000', // Dark text color for better readability on light background
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)', // Text shadow for better readability
}));

const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
    padding: theme.spacing(1, 2),
    fontSize: '16px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    textTransform: 'none',
}));

const PrimaryButton = styled(StyledButton)(({ theme }) => ({
    backgroundColor: '#3f51b5',
    color: '#fff',
    '&:hover': {
        backgroundColor: '#303f9f',
    },
}));

const SecondaryButton = styled(StyledButton)(({ theme }) => ({
    backgroundColor: '#f50057',
    color: '#fff',
    '&:hover': {
        backgroundColor: '#c51162',
    },
}));

const HomePage = () => {
    return (
        <RootContainer>
            <Overlay /> {/* Add the overlay */}
            <ContentBox>
                <Heading variant="h4">
                    Flight Status Portal
                </Heading>
                <PrimaryButton
                    component={Link}
                    to="/admin-login"
                    variant="contained"
                >
                    Admin Login
                </PrimaryButton>
                <SecondaryButton
                    component={Link}
                    to="/user-login"
                    variant="contained"
                >
                    User Login
                </SecondaryButton>
            </ContentBox>
        </RootContainer>
    );
};

export default HomePage;