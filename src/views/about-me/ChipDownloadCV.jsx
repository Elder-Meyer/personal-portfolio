import { FileDownloadOutlined } from "@mui/icons-material";
import { Chip } from "@mui/material";
import CVElderMeyer from "../../assets/docs/CV-ElderMeyer.pdf"
import { useTranslation } from "react-i18next";

export const ChipDownloadCV = () => {
  const { t } = useTranslation()
  return (
    <Chip
      onClick={handleChipClick}
      label={t("aboutMe.downloadCv")}
      icon={<FileDownloadOutlined/>}
    />
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