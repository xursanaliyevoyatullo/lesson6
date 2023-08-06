
// MATHS


// 1 calculator
// let result;


// const operator = prompt("Enter operator (either +, -, * or / ): ")


// const number1 = +prompt('Enter first number: ')

// const number2 = +prompt('Enter second number: ')


// switch(operator) {
//     case '+':
//         result = number1 + number2;
//         console.log(`${number1} + ${number2} = ${result}`);
//         break;
//     case '-':
//         result = number1 - number2;
//         console.log(`${number1} - ${number2} = ${result}`);
//         break;
//     case '*':
//         result = number1 * number2;
//         console.log(`${number1} * ${number2} = ${result}`);
//         break;
//     case '/':
//         result = number1 / number2;
//         console.log(`${number1} / ${number2} = ${result}`);
//         break;
    
//     default:
//     console.log('Invalid operator');
//     break;
// }



// For

// let n = 5 //355
// let s = 0;

// for(let i = 0; i <= n; i++) {
//     s += (n + i)**2
// }

// console.log(s);



//if1
// const son = +prompt("Sonni kiriting ")
// if(son > 0) { 
//     console.log(son + 1);
// }else{
//     console.log(son - 2);
// }



//if2
// let a = +prompt("A butun sonni kiriting ")
// let b = +prompt("B butun sonni kiriting ")
// let c = +prompt("C butun sonni kiriting ")

// let musbat = 0;
// let manfiy = 0;

// if(a > 0) {
//     musbat++
// }else {
//     manfiy++
// }if (b > 0) {
//     musbat++
// }else{
//     manfiy++
// }if(c > 0) {
//     musbat++
// }else{
//     manfiy++
// }
// console.log(`Musbatlar soni: ${musbat}`);
// console.log(`Manfiylar soni: ${manfiy}`);



//if3
// let a = +prompt("A sonini kiriting ")
// let b = +prompt("B sonini kiriting ")
// let c = +prompt("C sonini kiriting ")

// let kichigi = Math.min(a,b,c)
// let kattasi = Math.max(a,b,c)

// alert(`kichik son : ${kichigi}`);
// alert(`katta son : ${kattasi}`);


//if4
// xxxxxxxx



//if5
//xxxxxxxxxxx



//if6
//xxxxxxxxxxx

///////////////////////////////////////////////////////////////////////////////

//CASE

// const son = +prompt("Sonni kiriting: (1<son , son<=7)")

// switch(son){
//     case 1:{
//         console.log("Dushanba");
//         break
//     }
//     case 2:{
//         console.log("Seshanba");
//         break
//     }
//     case 3:{
//         console.log("Chorshanba");
//         break
//     }
//     case 4:{
//         console.log("Payshanba");
//         break
//     }
//     case 5:{
//         console.log("Juma");
//         break
//     }
//     case 6:{
//         console.log("Shanba");
//         break
//     }
//     case 7:{
//         console.log("Yakshanba");
//         break
//     }
//     default:
//         console.log("Iltimos 1 dan 7 gacha son kiriting")
//         break
// }



//case2

// let result = 0;

// const amallar = +prompt("Amallar tartib raqamini kiriting: (+, -, /, *)") 
// let a = +prompt("A butun sonni kiriting: ")
// let b = +prompt("B butun sonni kiriting: ")

// switch(amallar){
//     case 1:
//         result = a + b;
//         console.log(result);
//         break
//     case 2:
//         result = a - b;
//         console.log(result);
//         break ;
//     case 3:
//         result = a / b;
//         console.log(result);
//         break
//     case 4:
//         result = a * b;
//         console.log(result);
//         break
// }


//case3

// let yosh = 20 

// switch(yosh) {
//     case 20:
//         console.log("Siz yigirma yoshdasiz")
//         break;
//     case 21:
//         console.log("Siz yigirma bir yoshdasiz")
//         break;
//     case 22:
//         console.log("Siz yigirma ikki yoshdasiz")
//         break;
//     case 23:
//         console.log("Siz yigirma uch yoshdasiz")
//         break;
//     case 24:
//         console.log("Siz yigirma to'rt yoshdasiz")
//         break;
//     case 25:
//         console.log("Siz yigirma besh yoshdasiz")
//         break;
//     case 26:
//         console.log("Siz yigirma olti yoshdasiz")
//         break;
//     case 27:
//         console.log("Siz yigirma yetti yoshdasiz")
//         break;
//     case 28:
//         console.log("Siz yigirma sakkiz yoshdasiz")
//         break;
//     case 29:
//         console.log("Siz yigirma to'qqiz yoshdasiz")
//         break;
//     case 30:
//         console.log("Siz o'ttiz yoshdasiz")
//         break;
//     case 31:
//         console.log("Siz o'ttiz bir yoshdasiz")
//         break;
//     case 32:
//         console.log("Siz o'ttiz ikki yoshdasiz")
//         break;
//     case 33:
//         console.log("Siz o'ttiz uch yoshdasiz")
//         break;
//     case 34:
//         console.log("Siz o'ttiz to'rt yoshdasiz")
//         break;
//     case 35:
//         console.log("Siz o'ttiz besh yoshdasiz")
//         break;
//     case 36:
//         console.log("Siz o'ttiz olti yoshdasiz")
//         break;
//     case 37:
//         console.log("Siz o'ttiz yetti yoshdasiz")
//         break;
//     case 38:
//         console.log("Siz o'ttiz sakkiz yoshdasiz")
//         break;
//     case 39:
//         console.log("Siz o'ttiz to'qqiz yoshdasiz")
//         break;
//     case 40:
//         console.log("Siz qirq yoshdasiz")
//         break;
// }   



//case4

// let k = +prompt("K sonni kiriting ")

// switch(k){
//     case 1:
//         console.log("Yomon");
//         break;
//     case 2:
//         console.log("Qoniqarsiz");
//         break;
//     case 3:
//         console.log("Qoniqarli");
//         break;
//     case 4:
//         console.log("Yaxshi");
//         break;
//     case 5:
//         console.log("A'lo");
//         break;
//     default:
//         console.log("Xato");
// }



//case4

// let oy = +prompt("Oy raqamini kiriting")

// switch(oy){
//     case 1:
//         console.log("Qish");
//         break;
//     case 2:
//         console.log("Qish");
//         break;
//     case 12:
//         console.log("Qish");
//         break;
//     case 3:
//         console.log("Baxor");
//         break;
//     case 4:
//         console.log("Baxor");
//         break;
//     case 5:
//         console.log("Baxor");
//         break;
//     case 6:
//         console.log("Yoz");
//         break;
//     case 7:
//         console.log("Yoz");
//         break;
//     case 8:
//         console.log("Yoz");
//         break;
//     case 9:
//         console.log("Kuz");
//         break;
//     case 10:
//         console.log("Kuz");
//         break;
//     case 11:
//         console.log("Kuz");
//         break;
//     default:
//         console.log("Xato");
//         break;
// }



//case5

// let oySon = +prompt("oy raqamini kiriting");

// switch (oySon) {
//   case 1:
//     console.log("Yanvar - 31 kun");
//     break;
//   case 2:
//     console.log("Fevral - 28 kun");
//     break;
//   case 3:
//     console.log("Mart - 31 kun");
//     break;
//   case 4:
//     console.log("Aprel - 30 kun");
//     break;
//   case 5:
//     console.log("May - 31 kun");
//     break;
//   case 6:
//     console.log("Iyun - 30 kun");
//     break;
//   case 7:
//     console.log("Iyul - 31 kun");
//     break;
//   case 8:
//     console.log("Avgust - 31 kun");
//     break;
//   case 9:
//     console.log("Sentyabr - 30 kun");
//     break;
//   case 10:
//     console.log("Oktyabr - 31 kun");
//     break;
//   case 11:
//     console.log("Noyabr - 30 kun");
//     break;
//   case 12:
//     console.log("Dekabr - 31 kun");
//     break;
//   default:
//     console.log("aka oylarni yaxshilab yodlang");
//     break;
// }