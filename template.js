var number;
number=prompt("Sayı giriniz");
document.write("Verilen sayı : "+number+'<br>');
console.log(1)
if(isNumberSecretKey(number) && checkIfNumberUnder1(number)){
    console.log(1)
    howManyNumbers(number);
    console.log(2)
    plusAllNumber(number);
    console.log(3)
    oddNumber(number);
    console.log(4)
    plusOddNumber(number);
    console.log(5)
    showOddNumber(number);
    console.log(6)
    evenNumber(number);
    console.log(7)
    plusEvenNumber(number);
    console.log(8)
    showEvenNumber(number);
}

//1.adım: kaç tane sayı var ?
function howManyNumbers(number){
    var numberOfNumber=0;
    while ( numberOfNumber <= number) {
        if(checkIfExist7){
            continue;
        }
        if(checkIfMore100){
            break;
        }
        numberOfNumber++;
    }
    document.write("Sayı adeti : "+numberOfNumber+'<br>');
}
//2.adım: sayı toplamları var ?
function plusAllNumber(number) {
    var plus=0;
    for(var i=1 ; i<=number ; i++){
        if(checkIfExist7){
            continue;
        }
        if(checkIfMore100){
            break;
        }
        plus+=i;
    }
    document.write("Sayıların toplamı : "+plus+'<br>');
}
//3.adım: kaç tane tek  sayı var ?
function oddNumber(number){
    var oddNumberOfNumber=0;
    while( oddNumberOfNumber <= number){
        if(number%2==0 || checkIfExist7){
            continue;
        }
        if(checkIfMore100){
            break;
        }
        oddNumberOfNumber++;
    }
    document.write("Tek sayı adeti : "+oddNumberOfNumber+'<br>');
}
//4.adım: tek sayılar toplamı ?
function plusOddNumber(number){
    var plusOdd=0;
    for(var i=1 ; i<=number ; i++){
        if(number%2==0 || checkIfExist7){
            continue;
        }
        if(checkIfMore100){
            break;
        }
        plusOdd+=i;
    }
    document.write("Tek sayıların toplamı : "+plusOdd+'<br>');
}
//5.adım: tek sayılar gösterelim ?
function showOddNumber(number){
    document.write("Tek sayılar : 0");
    for(var i=1; i<=number; i++){
        if(number%2==0 || checkIfExist7){
            continue;
        }
        if(checkIfMore100){
            break;
        }
        document.write("-"+i);
    }
    document.write('<br>');  
}
//6.adım: kaç tane çift  sayı var ?
function evenNumber(number){
    var evenNumberOfNumber=0;
    while( evenNumberOfNumber <= number){
        if(number%2==1){
            continue;
        }
        if(checkIfMore100){
            break;
        }
        evenNumberOfNumber++;
    }
    document.write("Çift sayı adeti : "+evenNumberOfNumber+'<br>');
}
//7.adım: çift sayılar toplamı ?
function plusEvenNumber(number){
    var plusEven=0;
    for(var i=1 ; i<=number ; i++){
        if(number%2==1){
            continue;
        }
        if(checkIfMore100){
            break;
        }
        plusEven+=i;
    }
    document.write("Çift sayıların toplamı : "+plusEven+'<br>');
}
//8.adım: çift sayılar gösterelim ?
function showEvenNumber(number){
    document.write("Çift sayılar : 0");
    for(var i=1; i<=number; i++){
        if(number%2==1 ){
            continue;
        }
        if(checkIfMore100){
            break;
        }
        document.write("-"+i);
    }
    document.write('<br>');  
}
//Eğer verilen sayılarda 7 sayısı varsa bunu eklemesin (continue)
function checkIfExist7(number){
    if(number >= 7){
        return true;
    }
    return false;
}
//Eğer bitiş sayısı 100 fazla ise 100'e kadar olanlar toplansın (break)
function checkIfMore100(number){
    if(number > 100){
        return true;
    }
    return false;
}
//Eğer kullanıcı başlangıç sayıdan küçük girerse uyaralım başlangıçtan büyük girmesini isteyelim
function checkIfNumberUnder1(number) {
    if(number<1){
        alert("Başlangıç sayısından büyük bir değer giriniz.");
        return false;
    }
    return true;
}
//Eğer kullanıcı secret-key girerse yani 44 sayısını girerse program çalışmadan dursun 
function isNumberSecretKey(number) {
    if(number==44){
        return false;
    }
    return true;
}