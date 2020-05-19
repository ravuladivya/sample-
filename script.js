// challenge:1 age in days

function ageInDays(){
    var birthyear = prompt ("what is your age");
    var ageInDayss =(2020-birthyear) *365;
    var h1= document.createElement('h1');
    var textAnswer = document.createTextNode('you are'+ageInDayss +'days old');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
    //console.log (ageInDayss);
}
function reset(){
    document.getElementById('ageInDays').remove();

}