let sign = document.querySelector(".sign")

sign.addEventListener("click", () => {
    let mail = document.querySelector(".mail-or-phone")
    let pwd = document.querySelector(".pwd")
    let confrimpwd=document.querySelector(".confrimpwd")
    try {
        if (/^[a-zA-Z0-9_]+@[a-zA-Z]+.[a-zA-Z]{1,4}/g.test(mail).value) throw new Error("Неправильно указан email или номер телефона")
        if (pwd.value.length < 8) throw new Error("Короткий пароль")
        if(pwd.value!=confrimpwd.value) throw new Error("Пароли не совпадают")
        alert("Вы успешно авторизованы в системе")
    } catch (error) {
        alert(error.message)
    }
})
