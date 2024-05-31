import React, { useState, useEffect } from 'react';
import { Box, Fade, Tooltip, useScrollTrigger } from '@mui/material';
import { useLocation } from 'react-router-dom';

export function IconScrolled(props) {
    const { children, window } = props;
    const [screenHeight, setScreenHeight] = useState(0);
    const location = useLocation()
    const isHome = location.pathname === "/home" || location.pathname === "/";

    useEffect(() => {
        const height = window ? window().innerHeight : globalThis.innerHeight;
        const width = window ? window().innerWidth : globalThis.innerWidth;

        if (width < 350) {
            setScreenHeight(height * 0.84);
        } else if (width < 900) {
            setScreenHeight(height * 0.81);
        } else {
            setScreenHeight(height * 0.60);
        }
    }, [window]);

    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: screenHeight, // Usar la altura de la pantalla como umbral
    });

    return (
        <>
            { isHome ? (
                <Fade in={trigger}>
                    <Box>
                        {children}
                    </Box>
                </Fade>
            ) : (
                <Box>
                    {children}
                </Box>
            ) }
        </>
    );
}
