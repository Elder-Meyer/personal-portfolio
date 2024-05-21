import { FileDownloadOutlined } from "@mui/icons-material";
import { Button, Chip } from "@mui/material";
import CVElderMeyer from "../../assets/docs/CV-ElderMeyer.pdf"
import { useTranslation } from "react-i18next";

export const ChipDownloadCV = () => {
  const { t } = useTranslation()
  return (
    <Button
      onClick={handleChipClick}
      endIcon={<FileDownloadOutlined/>}
      variant="contained"
      sx={{borderRadius: 5}}
      disableElevation
    >
      {t("aboutme.downloadcv")}
    </Button>
  )
}


function handleChipClick() {
    const link = document.createElement('a');
    link.href = CVElderMeyer;
    link.target = '_blank';
    link.download = 'CV-ElderMeyer';
    // Simular un clic en el enlace para iniciar la descarga
    document.body.appendChild(link);
    link.click();
    // Limpiar el elemento de enlace después de la descarga
    document.body.removeChild(link);
  }