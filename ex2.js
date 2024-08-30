// Dados de entrada
const l = 20; // largura
const c = 50; // comprimento
const qs = 1; // quartos sem suíte
const qc = 1; // quartos com suíte
const b = 2;  // banheiros
const as = 1; // área de serviço
const p = 1;  // piscina

// Cálculos
const a = l * c; // área do terreno

const mo = Math.ceil(a / 10); // metros de obra
const s = mo * 2; // serventes
const e = Math.ceil(a / 100); // engenheiros

const cb = mo * 4500; // custo base
const cqs = qs * 12000; // custo quartos sem suíte
const cqc = qc * 17000; // custo quartos com suíte
const cbn = b * 5000; // custo banheiros
const cas = as * 15000; // custo área de serviço
const cp = p * 27550; // custo piscina

const cm = cb + cqs + cqc + cbn + cas + cp; // custo total material

const cmo = mo * 3500; // custo mestre de obra
const cs = s * 1900; // custo serventes
const ce = e * 11000; // custo engenheiros

const cmoTotal = cmo + cs + ce; // custo total mão de obra

const tmo = cm + cmoTotal; // total da obra com mão de obra
const lucro = tmo * 0.25; // lucro da empresa
const totalReceber = tmo + lucro; // total a receber

console.log("Área do terreno:", a);
console.log("Profissionais necessários:", "Mestres de obra:", mo, "Serventes:", s, "Engenheiros:", e);
console.log("Subtotal materiais:", cm);
console.log("Custo com mão de obra:", cmoTotal);
console.log("Total da obra (sem mão de obra):", cm);
console.log("Total da obra (com mão de obra):", tmo);
console.log("Lucro da empresa:", lucro);
console.log("Total a receber:", totalReceber);
