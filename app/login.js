let login=document.querySelector(".login")

login.addEventListener("click",()=>{
    let mail=document.querySelector(".mail-or-phone")
    let pwd=document.querySelector(".pwd")
    try {
        if(/^[a-zA-Z0-9_]+@[a-zA-Z]+.[a-zA-Z]{1,4}/g.test(mail).value) throw new Error("wrong mail or phone number")
        if(pwd.value.length<8) throw new Error("short password")
        alert("Вы успешно авторизованы в системе")
    } catch (error) {
        alert(error.message)
    }
})
