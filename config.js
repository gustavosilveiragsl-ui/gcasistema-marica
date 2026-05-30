// ═══════════════════════════════════════
// GCA Sistema — Configuração do Backend
// ═══════════════════════════════════════

const GCA_CONFIG = {
  // URL do backend novo
  API_URL: 'https://gca-backend-production.up.railway.app',
  
  // Unidade deste frontend
  UNIDADE: 'marica',
  
  // Versão
  VERSAO: '2.0.0'
};

// Função de chamada ao novo backend
async function gcaFetch(rota, metodo, corpo) {
  const token = localStorage.getItem('gca_token');
  const res = await fetch(GCA_CONFIG.API_URL + rota, {
    method: metodo || 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { 'Authorization': 'Bearer ' + token } : {})
    },
    ...(corpo ? { body: JSON.stringify(corpo) } : {})
  });
  return res.json();
}