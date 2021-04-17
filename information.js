function send(){
    var arr = document.getElementsByTagName('input');
     var name = arr[0].value;
     var phone = arr[1].value;
     var img = arr[2].value;
     var email = document.getElementById('email');
     if(name == "" || phone == "" ||img == "" ||email == "" ){
          alert("Please fill out this field ");
     }
    if(isNaN(phone)){
        alert("phone must be a numer");
    } else if (phone.length<10) {
        alert("ko đủ 10 số");
            return false; 
        
        
    } 
        confirm('body\n'+txt_name+"\n"+txt_phone+"\n"+img+"\n"+txt_email+"\n")
}
    


  