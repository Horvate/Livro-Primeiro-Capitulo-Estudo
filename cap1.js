
   const nome = prompt("Qual é o seu nome?");
   alert("Olá " + nome);

  
    const a = "20";
    const b = a * 2;  // b = 40
    const c = a / 2;  // c = 10
    const d = a - 2;  // d = 18
    const e = a + 2;  // e = 202 ???
    alert("e: " + e);
   

      const fruta = "Banana";
      const preco1 = 3.5;
      const levar = true;
      let novoValor;
      console.log(typeof fruta);     // string
      console.log(typeof preco1);     // number
      console.log(typeof levar);     // boolean
      console.log(typeof novoValor); // undefined
 
    console.log(Number.isInteger(12));    // true
    console.log(Number.isInteger(3.50));  // false
 
  
     const num = prompt("Número é: ");          // ler o dado de entrada
     const dobro = num * 2;                     // calculo do dobro
     alert("O dobro é: " + dobro);              // exibe a resposta
  
  
    const numero1 = Number(prompt("O número é: "));
    alert("Número ultilizado! " + numero1);
  
 
    const num1 = Number(prompt("1° Número: "));  //lẽ os números
    const num2 = Number(prompt("2° Número: "));
    const soma = num1 + num2;                   // calcula a soma
    alert("Soma é: " + soma);                   // exibe o resultado
 
  
    const jantar = Number(prompt("Valor do jantar R$: "));  // Lẽ o valor do jantar
    const garcon = jantar * 0.10;                           // calcula as variáveis de saída
    const total = jantar + garcon;
    alert("Taxa do Garçon R$: " + garcon.toFixed(2) + "\nTotal R$: " + total.toFixed(2));
  
  
    const dias = Number(prompt("N° Dias:"));       //lẽ os dados de entrada 
    const horas = Number(prompt("N° Horas:"));
    const total3 = (dias * 24) + horas;            // calcula a duração
    alert("Total de Horas " + total3);             // exibe o total 
  
  
    const numero2 = Number(prompt("Números:"));
    const vizinhoAnt = numero2 - 1;
    const vizinhoPros = numero2 + 1;
    alert("Vizinho Anterior: " + vizinhoAnt + "\nVizinho Porterior: " + vizinhoPros);
  
   
     const conta = Number(prompt("Valor da conta: "));               //lẽ os dados de entrada
     const clientes = Number(prompt("Números de clientes: "));
     const total1 = conta / clientes;                                 // calculo total
     alert("Total a pagar para cada cliente: " + total1.toFixed(2));  // exibe o total
   
  
    const preco2 = Number(prompt("Preço R$: "));
    const aVista = preco * 0.10;
    const vezes3 = preco / 3;
    alert("Valor a vista R$: "+ preco2 + "\nOu 3x de R$: " + vezes3);
    
  
    const nota1 = Number(prompt("1° Nota: "));
    const nota2 = Number(prompt("2° Nota : "));
    const total2 = nota1 + nota2;
    const media = total2 / 2;
    alert("Média: " + media);