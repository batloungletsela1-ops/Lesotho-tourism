document.getElementById('regForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const p = this.password.value;
    const c = this.confirm.value;
    const msg = document.getElementById('msg');
    if (p !== c) {
        msg.textContent = "Passwords do not match!";
        msg.className = "mt-2 text-center text-danger";
        return;
    }
    msg.textContent = "Registration Successful!";
    msg.className = "mt-2 text-center text-success";
    this.reset();
});