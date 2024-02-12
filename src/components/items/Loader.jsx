import { useTheme } from '@emotion/react'
export const Loader = () => {
    const theme = useTheme()
    const estilos = `.container{ max-width: 100%; height: 100vh; display: flex; justify-content: center; align-items: center; background-color: ${theme.palette.background.default}; flex-direction: column; }
    .loader { width: 65px; aspect-ratio: 1; position: relative; }
    .loader:before, .loader:after { content: ""; position: absolute; border-radius: 50px; box-shadow: 0 0 0 3px inset ${theme.palette.primary.main}; animation: l5 2.5s infinite; }
    .loader:after { animation-delay: -1.25s; border-radius: 0; }
    @keyframes l5{ 0%{inset:0 35px 35px 0 } 12.5%{inset:0 35px 0 0 } 25%{inset:35px 35px 0 0 } 37.5%{inset:35px 0 0 0 } 50%{inset:35px 0 0 35px} 62.5%{inset:0 0 0 35px} 75%{inset:0 0 35px 35px} 87.5%{inset:0 0 35px 0 } 100% {inset:0 35px 35px 0 } }`
  return ( <div className='container'> <style>{estilos}</style> <div className='loader'></div> </div> )
}