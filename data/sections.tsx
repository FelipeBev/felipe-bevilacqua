import Blog from "../components/sections/blog/blog";
import Contato from "../components/sections/contato/contato";
import Portfolio from "../components/sections/portifolio/portifolio";
import Sobre from "../components/sections/sobre/sobre";

export const sectionsData = {
  sobre: {
    id: 'sobre',
    title: 'Sobre',
    slug: 'sobre'
  },
  portfolio: {
    id: 'portfolio',
    title: 'Portfólio',
    slug: 'portfolio'
  },
  blog: {
    id: 'blog',
    title: 'Blog',
    slug: 'blog'
  },
  contato: {
    id: 'contato',
    title: 'Contato',
    slug: 'contato'
  }
};

// Mapeamento de componentes
export const sectionComponents = {
  sobre: Sobre,
  portfolio: Portfolio,
  blog: Blog,
  contato: Contato,
};

export const menuItems = [
  { href: '/', label: 'Home' },
  { href: '/secao/sobre', label: 'Sobre' },
  { href: '/secao/portfolio', label: 'Portfólio' },
  { href: '/secao/blog', label: 'Blog' },
  { href: '/secao/contato', label: 'Contato' }
];

export const getSectionBySlug = (slug) => {
  return Object.values(sectionsData).find(section => section.slug === slug);
};

export const getAllSections = () => {
  return Object.values(sectionsData);
};