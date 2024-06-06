'use client';

import React from 'react';
import { Card, CardContent, Typography, Container, Grid, Box, Link } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const Overview: React.FC = () => {
  return (
      <Container>
        <Box my={4}>
          <Typography variant="h3" gutterBottom>
            Hello Admin
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div" paddingY={"1rem"} textTransform={'uppercase'}>
                  Create a New Social Task
                </Typography>
                <Link href="/tasks" paddingBottom={"2rem"} color={"#30B5B5"} >
                  Go to Tasks Page
                </Link>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div" paddingY={"1rem"} textTransform={'uppercase'}>
                  Visit Webpage
                </Typography>
                <Link href="https/touchswap.xyz" target="_blank" rel="noopener" paddingBottom={"2rem"} color={"#30B5B5"} >
                  Go to Website
                </Link>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} sm={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div" paddingY={"1rem"} textTransform={'uppercase'}>
                  Visit Bot
                </Typography>
                <Link href="https://t.me/touchswap_bot" target="_blank" rel="noopener" paddingBottom={"2rem"} color={"#30B5B5"} >
                  Open Telegram Bot
                </Link>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
  );
};

export default Overview;
