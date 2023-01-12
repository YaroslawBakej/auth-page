let sign = document.querySelector(".sign")

function checkLogin() {
    const mail = document.querySelector(".mail-or-phone")
    const pwd = document.querySelector(".pwd")
    let confrimpwd = document.querySelector(".confrimpwd")
    if (/^[\w\d]+@[\w]+.[\w]{1,4}$/g.test(mail).value) throw new Error("wrong mail or phone number")
    if (pwd.value.length < 8) throw new Error("short password")
    if (pwd.value != confrimpwd.value) throw new Error("Пароли не совпадают")
    return true
}

sign.addEventListener("click", () => {
    try {
        alert("Вы успешно авторизованы в системе")
    } catch (error) {
        alert(error.message)
    }
})
