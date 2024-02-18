import { Fade, useScrollTrigger } from "@mui/material";
import { Box } from "../material-ui/Box";
import { Tooltip } from "../material-ui/Tooltip";
import { useTranslation } from "react-i18next";

export function BtnScrollTop(props) {
    const { t } = useTranslation();
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });
  
    const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector(
        '#back-to-top-anchor',
      );
  
      if (anchor) {
        anchor.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    };
  
    return (
      <Fade in={trigger}>
        <Tooltip title={t("home.backtopbtn")} placement="left" arrow>
          <Box
            onClick={handleClick}
            role="presentation"
            sx={{ position: 'fixed', bottom: 16, right: 16 }}
          >
            {children}
          </Box>
        </Tooltip>
      </Fade>
    );
  }