function buat_login(){
	var hapus = document.getElementById("X");
	hapus.parentElement.removeChild(hapus);

	var p = document.createElement("P");
	p.className = "tulisan_login";
	p.innerHTML = "Silahkan Login";
	var element = document.getElementsByTagName("div")[0];
	element.appendChild(p)

	var form = document.createElement("FORM");
	// form.className = "tulisan_login";
	element.appendChild(form);

	var label = document.createElement("LABEL");
	label.innerHTML = "Nama User"
	form.appendChild(label)

	var input = document.createElement("INPUT");
	input.type = "text"
	input.className = "form_login";
	input.name = "nama_user"
	input.placeholder = "Nama User.."
	form.appendChild(input)

	var label2 = document.createElement("LABEL");
	label2.innerHTML = "Nomor Handphone"
	form.appendChild(label2)

	var input2 = document.createElement("INPUT");
	input2.type = "text"
	input2.className = "form_login";
	input2.name = "Nomor_handphone"
	input2.placeholder = "Nomor Handphone."
	form.appendChild(input2)

	var label3 = document.createElement("LABEL");
	label3.innerHTML = "User Name"
	form.appendChild(label3)

	var input3 = document.createElement("INPUT");
	input3.type = "email"
	input3.className = "form_login";
	input3.name = "email"
	input3.placeholder = "username atau email."
	form.appendChild(input3)

	var label4 = document.createElement("LABEL");
	label4.innerHTML = "Password"
	form.appendChild(label4)

	var input4 = document.createElement("INPUT");
	input4.type = "password"
	input4.className = "form_login";
	input4.name = "password"
	input4.placeholder = "Password.."
	form.appendChild(input4)

	var input5 = document.createElement("INPUT");
	input5.type = "submit"
	input5.className = "tombol_login";
	input5.innerHTML = "DAFTAR SEKARANG"
	form.appendChild(input5)




}