/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuração para exportação estática
  output: 'export',
  // Define o diretório de saída como 'out'
  distDir: 'out',

  // SOLUÇÃO: Desativa o otimizador de imagens do servidor
  images: {
    unoptimized: true,
  },

  // Importante: Adicione o basePath para o GitHub Pages
  // Seu repositório é 'EstudeFacil-Front'
  basePath: '/EstudeFacil-Front',
};

module.exports = nextConfig;