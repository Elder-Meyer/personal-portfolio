import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, LinearProgress } from '@mui/material';

const ScrollIndicator = () => {
  const theme = useTheme();
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percentage = (scrollPosition / totalHeight) * 100;
      setScrollPercentage(percentage);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box sx={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: theme.zIndex.appBar + 1 }}>
      <LinearProgress variant="determinate" value={scrollPercentage} />
    </Box>
  );
};

export default ScrollIndicator;
