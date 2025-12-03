/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  // Configuração para exportação estática
  output: 'export',
  // Define o diretório de saída como 'out'
  distDir: 'out',

  // SOLUÇÃO: Desativa o otimizador de imagens do servidor
  images: {
    unoptimized: true,
  },

  // Importante: Adicione o basePath apenas em produção (ex.: GitHub Pages)
  // Em desenvolvimento isso causa 404 ao acessar '/' localmente.
  basePath: isProd ? '/EstudeFacil-Front' : undefined,
};

module.exports = nextConfig;