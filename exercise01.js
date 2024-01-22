let input1=document.getElementById('input1')
let input2=document.getElementById('input2')
let str1, str2
function validation(){
    str1=input1.value
    str2=input2.value
    if(str1.length<12){
        alert('inter a valid username')
    }
    if(str2.length<8){
        // alert('inter a valid pasword')
        modal('inter valid pasword')
    }
}