/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuração para exportação estática
  output: 'export',
  distDir: 'out',

  // SOLUÇÃO: Desativa o otimizador de imagens do servidor
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;