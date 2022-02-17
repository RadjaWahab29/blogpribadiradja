function submitData() {
  // di dalam fungsi ini adalah logic atau tugas yang akan dilakukan
  console.log('function dieksekusi')

  // DOM: Document Object Modeling
  let name = document.getElementById('name').value
  let email = document.getElementById('email').value
  let phone = document.getElementById('phone').value
  let pesan = document.getElementById('pesan').value

  //concatenation
  //alert(name + '\n' + email + '\n' + phone + '\n' + subject + '\n' + pesan)

  //validation
  if(name == "") {
      alert('input name must not be empty')
  } else if(email == "") {
      alert('input email must not be empty')
  } else if(phone == "") {
      alert('input phone must not be empty')
  } else if(pesan == "") {
      alert('input pesan must not be empty')
  } else {
      // buat elemen a
      let a = document.createElement('a') 
      // beri nilai pada atribut href
      a.href = "mailto:radjaaw29112005@gmail.com?subject=" +"&body=" + pesan
      // trigger elemen a untuk click
      a.click()
  }
}