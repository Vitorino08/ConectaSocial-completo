// forms.js - máscaras e validações
import { $, $$ } from './dom.js';
import { saveSubmission, listSubmissions } from './storage.js';

const patterns = {
  cpf: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
  telefone: /^\(\d{2}\) \d{5}-\d{4}$/,
  cep: /^\d{5}-\d{3}$/,
  email: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
};

function maskCPF(v){ return v.replace(/\D/g,'').replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d{1,2})$/,'$1-$2'); }
function maskPhone(v){ return v.replace(/\D/g,'').replace(/^(\d{2})(\d)/g,'($1) $2').replace(/(\d{5})(\d{4})$/,'$1-$2'); }
function maskCEP(v){ return v.replace(/\D/g,'').replace(/(\d{5})(\d)/,'$1-$2'); }

export function initForm(){
  const form = $('#formCadastro');
  if(!form) return;

  const cpf = $('#cpf'), tel = $('#telefone'), cep = $('#cep');
  cpf?.addEventListener('input', ()=> cpf.value = maskCPF(cpf.value));
  tel?.addEventListener('input', ()=> tel.value = maskPhone(tel.value));
  cep?.addEventListener('input', ()=> cep.value = maskCEP(cep.value));

  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());

    // consistência básica
    const erros = [];
    if(!patterns.email.test(data.email)) erros.push('E-mail inválido');
    if(!patterns.cpf.test(data.cpf)) erros.push('CPF no formato 000.000.000-00');
    if(!patterns.telefone.test(data.telefone)) erros.push('Telefone no formato (00) 00000-0000');
    if(!patterns.cep.test(data.cep)) erros.push('CEP no formato 00000-000');
    if(!data.nome?.trim()) erros.push('Nome é obrigatório');
    if(!data.estado) erros.push('Selecione um estado');
    if(!data.tipo) erros.push('Selecione o tipo de participação');

    const feedback = $('#feedback');
    if(erros.length){
      feedback.textContent = 'Corrija: ' + erros.join(' · ');
      feedback.className = 'alert erro';
      return;
    }

    saveSubmission(data);
    feedback.textContent = 'Cadastro enviado com sucesso!';
    feedback.className = 'alert sucesso';
    form.reset();
  });

  // exemplo: listar últimos envios (se desejar, renderizar)
  const historico = listSubmissions();
  // console.log('Histórico:', historico);
}
