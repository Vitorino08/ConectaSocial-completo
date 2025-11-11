// storage.js - localStorage
const KEY = 'conectasocial_cadastros';

export function saveSubmission(data){
  const atual = JSON.parse(localStorage.getItem(KEY) || '[]');
  atual.push({ ...data, createdAt: new Date().toISOString() });
  localStorage.setItem(KEY, JSON.stringify(atual));
}

export function listSubmissions(){
  return JSON.parse(localStorage.getItem(KEY) || '[]');
}
