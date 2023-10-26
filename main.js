function submit(){
    const fname = document.registerForm.fname.value;
    const lname = document.registerForm.lname.value;
    const fullname = fname + lname;
    document.getElementById('data').innerHTML = fullname;
    console.log(fullname);
}

function countPara(){
    const totalpara = document.getElementsByName("p")
    const totalHead = document.getElementsByName("h1");
    alert(`Tatal p tags are: ${totalpara.length}`);
    console.log(`Tatal h1 tags are: ${totalHead.length}`);
}

function totalElement(){
    const genders = document.getElementsByName("gender");
    console.log(genders.length);
    alert("Total genders " + genders.length);
}

function printvalue(){
    const name = document.form1.name.value //จะมี;หรือไม่มีก็ได้
    const address = document.form1.address.value
    console.log("Hello" + name + address)
    alert( `Hello: Mr.${name}\n Address: ${address}`)
}