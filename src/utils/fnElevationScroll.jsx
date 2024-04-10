import useScrollTrigger from '@mui/material/useScrollTrigger';
import { cloneElement } from 'react';

export function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger. will default to window. This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return cloneElement(children, { elevation: trigger ? 0.32 : 0 });
  }