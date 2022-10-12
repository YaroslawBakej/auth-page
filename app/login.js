let login = document.querySelector(".login")

function checkLogin(mail, pwd) {
    const mail = document.querySelector(".mail-or-phone")
    const pwd = document.querySelector(".pwd")
    if (/^[\w\d]+@[\w]+.[\w]{1,4}$/g.test(mail).value) throw new Error("wrong mail or phone number")
    if (pwd.value.length < 8) throw new Error("short password")
    return true
}

login.addEventListener("click", () => {
    try {
        if (checkLogin(mail, pwd))
            alert("Вы успешно авторизованы в системе")
    } catch (error) {
        alert(error.message)
    }
})
