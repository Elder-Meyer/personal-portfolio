import { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import TrapFocus from '@mui/material/Unstable_TrapFocus';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CookieOutlined } from "@mui/icons-material";
import Slide from '@mui/material/Slide';
import Cookies from 'js-cookie';

export const CookiesDialog = () => {
    const [bannerOpen, setBannerOpen] = useState(true);

    const closeBanner = () => {
      setBannerOpen(false);
      Cookies.set('cookieBannerClosed', 'true', { expires: 365 }); 
    };

    useEffect(() => {
      const isBannerClosed = Cookies.get('cookieBannerClosed'); 
      if (isBannerClosed === 'true') { setBannerOpen(false) }
    }, []);

  return (
    <TrapFocus open={bannerOpen} disableAutoFocus disableEnforceFocus>
      <Slide direction="up" appear={false} in={bannerOpen}>
        <Paper variant="outlined" role="dialog" aria-modal="false" aria-label="Cookie banner" tabIndex={-1}
          sx={{
            position: 'fixed',
            width: { sm : "auto", md: 526},
            bottom: { xs: 0, sm: 0, md:30},
            right: { xs: 0, sm: 0, md:30},
            left: { xs: 0, sm: 0, md: "auto" },
            m: {xs: 1, sm: 2, md: 3},
            p: 3, borderWidth: 2, borderColor: "divider", zIndex :100,
          }}
        >
          <Stack direction={"column"} justifyContent="center" gap={2}>
            <Box>
              <CookieOutlined fontSize="large" sx={{mb:1}}/>
              <Typography fontWeight="bold">This website uses cookies</Typography>
              <Typography variant="body2">To improve your experience this website use cookies</Typography>
            </Box>
            <Button size="small" onClick={closeBanner} variant="contained">Allow all</Button>
          </Stack>
        </Paper>
      </Slide>
    </TrapFocus>
  )
}