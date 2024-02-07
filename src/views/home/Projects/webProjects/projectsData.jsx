// imagenes
// project 01
import pri_proj_view_01 from '../../../../assets/img/img-projects/pri_proj_view_01.webp'
import proj_01_xl from '../../../../assets/img/img-projects/proj_01_xl.webp'
import proj_01_lg from '../../../../assets/img/img-projects/proj_01_lg.webp'
import proj_01_md from '../../../../assets/img/img-projects/proj_01_md.webp'
import proj_01_sm from '../../../../assets/img/img-projects/proj_01_sm.webp'
import proj_01_xs from '../../../../assets/img/img-projects/proj_01_xs.webp'
// project 02
import pri_proj_view_02 from '../../../../assets/img/img-projects/pri_proj_view_02.webp'
import proj_02_xl from '../../../../assets/img/img-projects/proj_02_xl.webp'
import proj_02_lg from '../../../../assets/img/img-projects/proj_02_lg.webp'
import proj_02_md from '../../../../assets/img/img-projects/proj_02_md.webp'
import proj_02_sm from '../../../../assets/img/img-projects/proj_02_sm.webp'
import proj_02_xs from '../../../../assets/img/img-projects/proj_02_xs.webp'
// project 03
import pri_proj_view_03 from '../../../../assets/img/img-projects/pri_proj_view_03.webp'
import proj_03_xl from '../../../../assets/img/img-projects/proj_03_xl.webp'
import proj_03_lg from '../../../../assets/img/img-projects/proj_03_lg.webp'
import proj_03_md from '../../../../assets/img/img-projects/proj_03_md.webp'
import proj_03_sm from '../../../../assets/img/img-projects/proj_03_sm.webp'
import proj_03_xs from '../../../../assets/img/img-projects/proj_03_xs.webp'
// project 04
import pri_proj_view_04 from '../../../../assets/img/img-projects/pri_proj_view_04.webp'
import proj_04_xl from '../../../../assets/img/img-projects/proj_04_xl.webp'
import proj_04_lg from '../../../../assets/img/img-projects/proj_04_lg.webp'
import proj_04_md from '../../../../assets/img/img-projects/proj_04_md.webp'
import proj_04_sm from '../../../../assets/img/img-projects/proj_04_sm.webp'
import proj_04_xs from '../../../../assets/img/img-projects/proj_04_xs.webp'

export const projects = [
    {
      id: "project-01-corazon-huasteco",
      title: "Corazón Huasteco",
      date: "Dec 1, 2023",
      dateTime: "01-12-2023",
      category: {title: 'Cultura', href: '#'},
      techs: ["React Js", "Firebase", "Material UI", "Google Analytics", "PWA"],
      shortDescription: "Sitio web para la preservación de la cultura.",
      largeDescription: "Sitio web desarrollado con el objetivo de preservar la cultura de la ciudad de Huejutla de Reyes Hgo. por medio de un sitio web, alojando articulos interesantes y siendo accesible para todos",
      imgPrincipal: pri_proj_view_01,
      imgXl: proj_01_xl,
      imgLg: proj_01_lg,
      imgMd: proj_01_md,
      imgSm: proj_01_sm,
      imgXs: proj_01_xs,
      href: "https://corazon-huasteco.com",
      repo: "https://github.com/Eduardo1802/Corazon_Huasteco"
    },
    {
      id: "project-02-app-caih",
      title: "App CAIH",
      date: "Aug 15, 2022",
      dateTime: "15-08-2022",
      category: {title: 'Arquitectura', href: '#'},
      techs: ["React Js", "Material UI", "Leaflet", "CSS", "HTML", "JavaScript"],
      shortDescription: "Sitio web para colegio de arquitectos",
      largeDescription: "Plataforma web desarrollada como proyecto de estadía de TSU (Tecnico Superior Universitario), para el colegio de arquitectos e ingenieros (CAIH)",
      imgPrincipal: pri_proj_view_02,
      imgXl: proj_02_xl,
      imgLg: proj_02_lg,
      imgMd: proj_02_md,
      imgSm: proj_02_sm,
      imgXs: proj_02_xs,
      href: "https://huasteca-mx.web.app",
      repo: "https://github.com/"
    },
    {
      id: "project-03-dulce-delicia",
      title: "Dulce Delicia",
      date: "Nov 28, 2023",
      dateTime: "28-11-2023",
      category: {title: 'Dulceria', href: '#'},
      techs: ["React Js", "JavaScript", "HTML", "CSS", "PWA", "Firebase"],
      shortDescription: "Sitio web con tematica de dulceria",
      largeDescription: "Sitio web desarrollado como practica individual para la creación de una PWA (progressive web app), tomando coo referencia un  sitio existente llamado 'azucar dulcerias'",
      imgPrincipal: pri_proj_view_03,
      imgXl: proj_03_xl,
      imgLg: proj_03_lg,
      imgMd: proj_03_md,
      imgSm: proj_03_sm,
      imgXs: proj_03_xs,
      href: "https://dulce-delicia-b3afa.web.app/inicio", 
      repo: "https://github.com/Elder-Meyer/dulce-delicia"
    },
    {
      id: "project-04-fashion-fusion",
      title: "Fashion Fusion",
      date: "Aug 15, 2023",
      dateTime: "15-08-2023",
      category: {title: 'DevOps', href: '#'},
      techs: ["React Js", "Materail UI", "Firebase", "Markdown", "Git"],
      shortDescription: "Sitio web con tematica de tienda de ropa",
      largeDescription: "Sitio web desarrollado con el proposito de poner en practica la mejora continua devops y el sitema de gestión de versiones git y github",
      imgPrincipal: pri_proj_view_04,
      imgXl: proj_04_xl,
      imgLg: proj_04_lg,
      imgMd: proj_04_md,
      imgSm: proj_04_sm,
      imgXs: proj_04_xs,
      href: "https://fashion-fusion-65eb8.web.app/",
      repo: "https://github.com/Elder-Meyer/fashion-fusion"
    },
  ];