import { useState, useEffect } from 'react';
import TrapFocus from '@mui/material/Unstable_TrapFocus';
import { CookieOutlined } from "@mui/icons-material";
import Cookies from 'js-cookie';
import { useTranslation } from 'react-i18next'
import { Stack, Paper, Button, Box, Typography, Slide } from '@mui/material';

export const CookiesDialog = () => {
  const { t } = useTranslation();
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
              <Typography fontWeight="bold">{t('home.cookies.title')}</Typography>
              <Typography variant="body2">{t('home.cookies.description')}</Typography>
            </Box>
            <Button size="small" onClick={closeBanner} variant="contained">{t('home.cookies.btn')}</Button>
          </Stack>
        </Paper>
      </Slide>
    </TrapFocus>
  )
}