// Dados de entrada
var l = 20; // largura
var c = 50; // comprimento
var qs = 1; // quartos sem suíte
var qc = 1; // quartos com suíte
var b = 2;  // banheiros
var as = 1; // área de serviço
var p = 1;  // piscina

// Cálculos
var a = l * c; // área do terreno

var mo = Math.ceil(a / 10); // metros de obra
var s = mo * 2; // serventes
var e = Math.ceil(a / 100); // engenheiros

var cb = mo * 4500; // custo base
var cqs = qs * 12000; // custo quartos sem suíte
var cqc = qc * 17000; // custo quartos com suíte
var cbn = b * 5000; // custo banheiros
var cas = as * 15000; // custo área de serviço
var cp = p * 27550; // custo piscina

var cm = cb + cqs + cqc + cbn + cas + cp; // custo total material

var cmo = mo * 3500; // custo mestre de obra
var cs = s * 1900; // custo serventes
var ce = e * 11000; // custo engenheiros

var cmoTotal = cmo + cs + ce; // custo total mão de obra

var tmo = cm + cmoTotal; // total da obra com mão de obra
var lucro = tmo * 0.25; // lucro da empresa
var totalReceber = tmo + lucro; // total a receber

console.log("Área do terreno:", a);
console.log("Profissionais necessários:", "Mestres de obra:", mo, "Serventes:", s, "Engenheiros:", e);
console.log("Subtotal materiais:", cm);
console.log("Custo com mão de obra:", cmoTotal);
console.log("Total da obra (sem mão de obra):", cm);
console.log("Total da obra (com mão de obra):", tmo);
console.log("Lucro da empresa:", lucro);
console.log("Total a receber:", totalReceber);
