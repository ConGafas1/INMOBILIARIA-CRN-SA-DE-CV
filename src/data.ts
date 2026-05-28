/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, Project } from './types';

// Paths to generated images matching user's uploaded portfolio
const materiales1 = "/src/assets/images/materiales1_1779957193566.png";
const materiales2 = "/src/assets/images/materiales2_1779957218246.png";
const materiales3 = "/src/assets/images/materiales3_1779957233853.png";
const materiales4 = "/src/assets/images/materiales4_1779957252547.png";
const materiales5 = "/src/assets/images/materiales5_1779957269713.png";
const materiales6 = "/src/assets/images/materiales6_1779957283106.png";
const materiales7 = "/src/assets/images/materiales7_1779957300646.png";
const materiales8 = "/src/assets/images/materiales8_1779957322381.png";
const materiales9 = "/src/assets/images/materiales9_1779957340920.png";
const materiales10 = "/src/assets/images/materiales10_1779957358748.png";

export const COMPANY_INFO = {
  name: "Inmobiliaria CRM S.A. de C.V.",
  phone: "55 1407-7706",
  email: "contacto@inmobiliariacrm.com",
  altEmail: "cotizaciones@inmobiliariacrm.com",
  address: "TECUANTITLA No. 6 FUENTES DE TEPEPAN, ALCALDÍA DE TLALPAN, C.P. 14643, CIUDAD DE MÉXICO.",
  foundedYear: 1996,
  incorporatedYear: 1999,
  website: "www.inmobiliariacrm.com",
  author: "inkmark.mx"
};

export const ABOUT_US_TEXT = {
  paragraph1: "Esta empresa fue creada en el año de 1996 con el nombre de Ing. Mauricio Ramírez Gómez. Nace primeramente de su fundador, por desarrollarse dentro del ámbito de la construcción privada y en 1999 cambia a Inmobiliaria CRM S.A. de C.V., para poderse sumar al grupo de empresas serias, honestas y responsables, que actualmente operan en nuestro país, centralmente en el área de la construcción.",
  paragraph2: "Es por esta razón que los miembros que conforman esta empresa, concientes del gran reto que día con día nos impone la construcción, ponemos a sus órdenes nuestros servicios en el área de construcción de obras en general, remodelación, conservación, mantenimiento a inmuebles, pavimentaciones y acabados. Seguros de que si ustedes aceptan que esta empresa sea su opción para el desarrollo de sus proyectos, les aseguramos que sabremos cumplir de manera altamente profesional y ética con la confianza que nos ordenen.",
  paragraph3: "Con la certeza de que nos brindaran la oportunidad para demostrar nuestra capacidad y conocimientos, ponemos a su alta consideración nuestro portafolio de servicios, donde de manera detallada relacionamos las soluciones especializadas para cumplir debidamente con sus metas constructivas."
};

export const SERVICES_DATA: Service[] = [
  {
    id: "pavimentos",
    title: "Pavimentos",
    slug: "pavimentos",
    iconName: "Hammer", // Will map to a real Lucide Icon component
    subtitle: "Soluciones de alta resistencia y durabilidad",
    shortDescription: "Construcción y conservación de pavimentos de concreto hidráulico, asfálticos y adoquín para bodegas, andenes, vialidades y patios de maniobras.",
    fullDescription: "Nos especializamos en la planeación y colado de pavimentos para tráfico pesado e industrial. Ofrecemos acabados pulidos, rayados y escobillados, asegurando que cada metro cuadrado cumpla con las especificaciones de carga exactas, con un rebarzado de acero adecuado y juntas de dilatación tratadas.",
    benefits: [
      "Concreto hidráulico premezclado de alta resistencia (MR-40, MR-45)",
      "Patios de maniobras y pisos industriales ultra-planos",
      "Terminados especiales antiderrapantes y sellos acrílicos",
      "Restauración, bacheo y mantenimiento preventivo continuo"
    ],
    image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "terracerias",
    title: "Terracerías",
    slug: "terracerias",
    iconName: "TrendingUp",
    subtitle: "La base firme de toda gran obra de ingeniería",
    shortDescription: "Preparación de suelos, desmontes, excavaciones, compactaciones, cortes y rellenos con maquinaria pesada, asegurando estabilidad y seguridad.",
    fullDescription: "Garantizamos la correcta cimentación de su obra mediante estudios, nivelación de suelos, mejoramiento de terrenos naturales mediante cal o cemento, y acarreo de materiales. La excelencia de una estructura radica en la firmeza implacable de sus bases.",
    benefits: [
      "Nivelaciones topográficas digitales de altísima precisión",
      "Cortes de terreno masivos y excavaciones estructurales",
      "Estabilización y saneamiento de suelos inestables",
      "Compactación óptima certificada con laboratorio"
    ],
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "acabados",
    title: "Acabados",
    slug: "acabados",
    iconName: "Compass",
    subtitle: "El toque final de sofisticación y confort",
    shortDescription: "Instalación de yeso, texturizados, colocación de pisos cerámicos, porcelanatos, mármoles, pintura profesional, carpintería y remodelaciones integrales.",
    fullDescription: "Realizamos acabados arquitectónicos residenciales, comerciales e institucionales de primer nivel. Transformamos espacios optimizando la estética y durabilidad, empleando materiales de calidad acreditada y mano de obra sumamente calificada.",
    benefits: [
      "Remodelaciones interiores y fachadas corporativas",
      "Pintura y colocación de texturas resistentes a la intemperie",
      "Instalación perfecta de azulejos, porcelanatos y carpinterías",
      "Atención rigurosa a las tolerancias físicas y estéticas"
    ],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "tablaroca",
    title: "Tablaroca",
    slug: "tablaroca",
    iconName: "Grid",
    subtitle: "Sistemas prefabricados ligeros y versátiles",
    shortDescription: "Muros divisorios permanentes o temporales, plafones falsos acústicos, cajillos de iluminación indirecta y protecciones contra fuego y humedad.",
    fullDescription: "Económico, rápido y limpio. Diseñamos mamparas, nichos y plafones suspendidos utilizando bastidores metálicos de calidad estructural, con paneles de yeso estándar, resistentes al fuego (Type X) o especiales para humedad, logrando acabados tersos y continuos listos para decorar.",
    benefits: [
      "Muros divisorios termo-acústicos con colchoneta de fibra de vidrio",
      "Plafones reticulares para fácil mantenimiento de instalaciones",
      "Cajillos perimetrales para iluminación LED indirecta moderna",
      "Estructuras ligeras ideales para reacondicionamiento rápido de oficinas"
    ],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop"
  }
];

export const PROJECTS_SLIDER: Project[] = [
  {
    id: "proj-1",
    title: "Colado de Pavimento Hidráulico",
    category: "Pavimentos",
    image: materiales1,
    fallbackImage: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=1200",
    description: "Esparcido, vibrado y nivelado de concreto premezclado de alta resistencia F'c 300 con malla electrosoldada para resistir tráfico pesado.",
    year: "2024",
    location: "Tlalpan, Ciudad de México"
  },
  {
    id: "proj-2",
    title: "Excavación y Compactación de Terreno",
    category: "Terracerías",
    image: materiales2,
    fallbackImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200",
    description: "Preparación de suelos y cortes mecánicos ópticos mediante maquinaria pesada para el desplante de cimentaciones sumamente firmes.",
    year: "2024",
    location: "Naucalpan, Edo. de México"
  },
  {
    id: "proj-3",
    title: "Instalación de Pisos y Acabados de Madera",
    category: "Acabados",
    image: materiales3,
    fallbackImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200",
    description: "Aplicación y colocación de recubrimientos tecnológicos y madera de alta resistencia para modernizar oficinas y espacios de trabajo corporativos.",
    year: "2025",
    location: "Polanco, Ciudad de México"
  },
  {
    id: "proj-4",
    title: "Instalación de Estructura de Drywall",
    category: "Tablaroca",
    image: materiales4,
    fallbackImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200",
    description: "Montaje de bastidor de canal de carga de calidad estructural y forrado con paneles de yeso estándar y aislante termoacústico.",
    year: "2025",
    location: "Santa Fe, Ciudad de México"
  },
  {
    id: "proj-5",
    title: "Alisado y Terminado de Pisos Industriales",
    category: "Pavimentos",
    image: materiales5,
    fallbackImage: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?q=80&w=1200&auto=format&fit=crop",
    description: "Terminado pulido de concreto hidráulico por medio de llanas mecánicas garantizando niveles exactos para patios de maniobra y almacenes.",
    year: "2024",
    location: "Chalco, Edo. de México"
  },
  {
    id: "proj-6",
    title: "Particiones de Cristal Templado y Aluminio",
    category: "Acabados",
    image: materiales6,
    fallbackImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    description: "Nivelación e instalación de herrajes para cancelaría de aluminio anodizado y cristales templados con control acústico superior.",
    year: "2025",
    location: "Lomas de Chapultepec, CDMX"
  },
  {
    id: "proj-7",
    title: "Plafones Modulares Suspendidos",
    category: "Tablaroca",
    image: materiales7,
    fallbackImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200",
    description: "Fijación de suspensión metálica reticular y colocación de placas termoacústicas ideales para alojar instalaciones hidráulicas y eléctricas.",
    year: "2025",
    location: "Coyoacán, Ciudad de México"
  },
  {
    id: "proj-8",
    title: "Nivelación Topográfica Mecanizada",
    category: "Terracerías",
    image: materiales8,
    fallbackImage: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1200",
    description: "Trazo y nivelación topográfica digital con estabilización de taludes y mejoramiento de terreno natural a gran escala.",
    year: "2024",
    location: "Tlalpan, Ciudad de México"
  },
  {
    id: "proj-9",
    title: "Tratamiento de Muros y Pintura Premium",
    category: "Acabados",
    image: materiales9,
    fallbackImage: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=1200",
    description: "Aplicación de yeso fino, pasta texturizada de alta adherencia y selladores acrílicos previos a la pintura definitiva.",
    year: "2024",
    location: "Huixquilucan, Edo. de México"
  },
  {
    id: "proj-10",
    title: "Sellado de Juntas de Dilatación",
    category: "Pavimentos",
    image: materiales10,
    fallbackImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200",
    description: "Corte preventivo y limpieza de juntas, con inserción de cordón de respaldo y aplicación de sellador elastomérico de alto desempeño.",
    year: "2025",
    location: "Tlalpan, Ciudad de México"
  }
];
