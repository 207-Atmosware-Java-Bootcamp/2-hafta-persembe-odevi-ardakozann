var number;
number=prompt("Sayı giriniz");
document.write("Verilen sayı : "+number+'<br>');
if(isNumberSecretKey(number) && checkIfNumberUnder1(number)){
    howManyNumbers(number);
    oddNumber(number);
    evenNumber(number);
}

//1.adım: kaç tane sayı var ?
function howManyNumbers(number){
    var numberOfNumber=0;
    var plus=0;
    for (var i=1; i <= number; i++) {
        if(checkIfExist7(i)){
            continue;
        }
        if(checkIfMore100(i)){
            break;
        }
        numberOfNumber++;
        plus+=i;
    }
    document.write("Sayı adeti : "+numberOfNumber+'<br>');
    document.write("Sayıların toplamı : "+plus+'<br>');
}
//3.adım: kaç tane tek  sayı var ?
function oddNumber(number){
    var oddNumberOfNumber=0;
    var plusOdd=0;
    document.write("Tek sayılar : 0");
    for(var i=1; i <= number; i++){
        if(i%2==0 || checkIfExist7(i)){
            continue;
        }
        if(checkIfMore100(i)){
            break;
        }
        oddNumberOfNumber++;
        plusOdd+=i;
        document.write("-"+i);
    }
    document.write('<br>'+"Tek sayı adeti : "+oddNumberOfNumber);
    document.write('<br>'+"Tek sayıların toplamı : "+plusOdd+'<br>');
}
//6.adım: kaç tane çift  sayı var ?
function evenNumber(number){
    var evenNumberOfNumber=0;
    var plusEven=0;
    document.write("Çift sayılar : 0");
    for(var i=1; i <= number; i++){
        if(i%2==1){
            continue;
        }
        if(checkIfMore100(i)){
            break;
        }
        document.write("-"+i);
        evenNumberOfNumber++;
        plusEven+=i;
    }
    document.write('<br>'+"Çift sayı adeti : "+evenNumberOfNumber);
    document.write('<br>'+"Çift sayıların toplamı : "+plusEven);
}
//Eğer verilen sayılarda 7 sayısı varsa bunu eklemesin (continue)
function checkIfExist7(number){
    if(number == 7){
        return true;
    }
    return false;
}
//Eğer bitiş sayısı 100 fazla ise 100'e kadar olanlar toplansın (break)
function checkIfMore100(number){
    if(number >= 100){
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