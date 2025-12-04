/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const isVercel = process.env.VERCEL === '1'

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
  // Não aplicar basePath quando rodando no Vercel — Vercel serve no domínio raiz.
  basePath: isProd && !isVercel ? '/EstudeFacil-Front' : undefined,
};

module.exports = nextConfig;