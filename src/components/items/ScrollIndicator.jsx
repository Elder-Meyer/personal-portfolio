import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, LinearProgress } from '@mui/material';

export const ScrollIndicator = () => {
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
    return () => { window.removeEventListener('scroll', handleScroll) };
  }, []);

  return (
    <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: theme.zIndex.appBar + 1 }}>
        <LinearProgress variant="determinate" value={scrollPercentage} sx={{  bgcolor: "transparent", '& .MuiLinearProgress-bar' : { backgroundImage: "linear-gradient(92deg, #7F7EFF 10%, #56A5FE 60%, #02FFFF)" }}} />
    </Box>
  );
};