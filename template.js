// Örnek:1ile kullanıcının vereceği(prompt)bitiş sayısına göre
// kullanci:5verdi diyelim1<=X<=5
//1.adım:kaç tane sayı var?
//2.adım:sayı toplamları var?
//3.adım:kaç tane tek sayı var?
//4.adım:tek sayılar toplamı?
//5.adım:tek sayılar gösterelim?
//6.adım:kaç tane çift sayı var?
//7.adım:çift sayılar toplamı?
//8.adım:çift sayılar gösterelim?
// Eğer verilen sayılarda7sayısı varsa bunu eklemesin(continue)
// Eğer bitiş sayısı 100 fazla ise 100'e kadar olanlar toplansın(break)
// Eğer kullanıcı başlangıç sayıdan küçük girerse uyaralım başlangıçtan büyük girmesini isteyelim
// Eğer kullanıcı secret-key girerse yani 44 sayısını girerse program çalışmayı direk durdursun
var number;
number=prompt("Sayı giriniz");
document.write("Verilen sayı : "+number+'<br>');
if(isNumberSecretKey(number) && checkIfNumberUnder1(number)){
    allNumbers(number);
    oddNumber(number);
    evenNumber(number);
}
function allNumbers(number){ //tüm sayılar için
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
function oddNumber(number){ //tek sayılar için
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
function evenNumber(number){ //çift sayılar için
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
function checkIfExist7(number){ //sayıda 7 var mı kontrolü
    if(number == 7){
        return true;
    }
    return false;
}
function checkIfMore100(number){ //sayı 100'den büyük mü kontrolü
    if(number >= 100){
        return true;
    }
    return false;
}
function checkIfNumberUnder1(number) { //sayı 1'den küçük mü kontrolü
    if(number<1){
        alert("Başlangıç sayısından büyük bir değer giriniz.");
        return false;
    }
    return true;
}
function isNumberSecretKey(number) { //sayı 44 mü kontrolü
    if(number==44){
        return false;
    }
    return true;
}