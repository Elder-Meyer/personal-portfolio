import { useTheme } from '@emotion/react'
import { Box } from '@mui/material'

export const WavyDivider = () => {
    const theme = useTheme()
    const styles = `
        .editorial { display: block; width: 100%; height: 40px; max-height: 40px; margin: 0; z-index:5; }
        
        .parallax1 > use {
            animation: move-forever1 10s linear infinite;
            &:nth-child(1) { animation-delay: -2s; }
        }
        .parallax2 > use {
            animation: move-forever2 8s linear infinite;
            &:nth-child(1) { animation-delay: -2s; }
        }
        .parallax3 > use {
            animation: move-forever3 6s linear infinite;
            &:nth-child(1) { animation-delay: -2s; }
        }
        .parallax4 > use {
            animation: move-forever4 4s linear infinite;
            &:nth-child(1) { animation-delay: -2s; }
        }
        @keyframes move-forever1 {
            0% { transform: translate(85px, 0%); }
            100% { transform: translate(-90px, 0%); }
        }
        @keyframes move-forever2 {
            0% { transform: translate(-90px, 0%); }
            100% { transform: translate(85px, 0%); }
        }
        @keyframes move-forever3 {
            0% { transform: translate(85px, 0%); }
            100% { transform: translate(-90px, 0%); }
        }
        @keyframes move-forever4 {
            0% { transform: translate(-90px, 0%); }
            100% { transform: translate(85px, 0%); }
        }
    `

  return (
    <Box sx={{backgroundColor: theme.palette.background.default}}>
        <style>{styles}</style>
        <svg className="editorial" xmlns="http://www.w3.org/2000/svg" xmlnsxlinkk="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none">
            <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="parallax1">
                <use xlinkHref="#gentle-wave" x="50" y="3" fill={theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.background.paper}/>
            </g>
            <g className="parallax2">
                <use xlinkHref="#gentle-wave" x="50" y="0" fill={theme.palette.mode === 'dark' ? theme.palette.primary.main : theme.palette.secondary.main}/>
            </g>
            <g className="parallax3">
                <use xlinkHref="#gentle-wave" x="50" y="9" fill={theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light}/>
            </g>
            <g className="parallax4">
                <use xlinkHref="#gentle-wave" x="50" y="6" fill={theme.palette.mode === 'dark' ? theme.palette.background.paper : theme.palette.primary.main}/>  
            </g>
        </svg>
    </Box>
  )
}