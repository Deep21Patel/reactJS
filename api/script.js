function regApi(){

    let uname=document.getElementById('uname').value;

    //console.log(uname);
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;
    let mobile=document.getElementById('mobile').value;

    const data={username:uname,email:email,password:password,mobile:mobile}
    console.log(data);
    fetch('',{method:'post',headers:{
        'content-type':'application/json','accept':'application/json',

    },body:JSON.stringify({allData:data})}).then(res=>res.json()).then(Responce=>{
        console.log(Responce);
        

        if(Responce.code==1)
        {
            localStorage.setItem('userid',Responce.data)

        }
        else{
            console.log("somthing want wrong");
        }
    })


}