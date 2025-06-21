import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  IconButton,
  Link,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  LinkedIn as LinkedInIcon
} from '@mui/icons-material';
import info from '../assets/info.json';

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const contactItems = [
    {
      icon: <EmailIcon sx={{ fontSize: 28 }} />,
      label: 'Email',
      value: info.contact.email,
      href: `mailto:${info.contact.email}`,
      color: '#D44638'
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 28 }} />,
      label: 'Phone',
      value: info.contact.phone,
      href: `tel:${info.contact.phone}`,
      color: '#25D366'
    },
    {
      icon: <LinkedInIcon sx={{ fontSize: 28 }} />,
      label: 'LinkedIn',
      value: 'jimin-park-ml',
      href: info.contact.linkedin,
      color: '#0077B5'
    }
  ];

  return (
    <Box
      id="contact"
      sx={{
        py: 8,
        px: { xs: 2, sm: 4, md: 8 },
        backgroundColor: theme.palette.mode === 'light' ? '#f8f9fa' : '#1a1a1a'
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
        <Typography
          variant="h3"
          component="h2"
          sx={{
            textAlign: 'center',
            mb: 1,
            fontWeight: 700,
            color: theme.palette.text.primary,
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
          }}
        >
          Contact Me
        </Typography>
        
        <Typography
          variant="h6"
          sx={{
            textAlign: 'center',
            mb: 6,
            color: theme.palette.text.secondary,
            fontWeight: 400,
            fontSize: { xs: '1rem', sm: '1.1rem' }
          }}
        >
          Let's connect and create impact together.
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {contactItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'all 0.3s ease-in-out',
                  cursor: item.href ? 'pointer' : 'default',
                  '&:hover': item.href ? {
                    transform: 'translateY(-4px)',
                    boxShadow: theme.shadows[8],
                    '& .contact-icon': {
                      transform: 'scale(1.1)'
                    }
                  } : {},
                  backgroundColor: theme.palette.background.paper,
                  border: `1px solid ${theme.palette.mode === 'light' ? '#e0e0e0' : '#333'}`
                }}
                onClick={item.href ? () => window.open(item.href, '_blank') : undefined}
              >
                <Box
                  className="contact-icon"
                  sx={{
                    width: 60,
                    height: 60,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2,
                    backgroundColor: `${item.color}15`,
                    color: item.color,
                    transition: 'all 0.3s ease-in-out'
                  }}
                >
                  {item.icon}
                </Box>
                
                <Typography
                  variant="h6"
                  sx={{
                    mb: 1,
                    fontWeight: 600,
                    color: theme.palette.text.primary
                  }}
                >
                  {item.label}
                </Typography>
                
                {item.href ? (
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: theme.palette.primary.main,
                      textDecoration: 'none',
                      '&:hover': {
                        textDecoration: 'underline'
                      }
                    }}
                  >
                    {item.value}
                  </Link>
                ) : (
                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.text.secondary,
                      wordBreak: 'break-word'
                    }}
                  >
                    {item.value}
                  </Typography>
                )}
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            Thanks for visiting my website!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact; 