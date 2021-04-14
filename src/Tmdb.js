const API_KEY = 'cd8be560ba65c8bb7dc27a500eff5bd2';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
}

export default {
  getDataList: async () => {
    return [
      {
        main: await basicFetch(`/tv/60735?api_key=${API_KEY}`),
        persons: await basicFetch(`/tv/60735/credits?api_key=${API_KEY}`)
      }      
    ]
  }
}