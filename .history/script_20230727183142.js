document.addEventListener("DOMContentLoaded", init);

const URL_API = 'https://localhost:7286/api/'

var contactos = [];

function init()
{
   search()
}

async function search()
{
    var url = URL_API + 'DatosContacto'
    
    var response = await fetch(url, {

        "method": "GET",
        "headers": {
            "Content-Type": 'application/json'
        }
    })    

    contactos = await response.json();
    
    var html = ''

    for (contacto of contactos)
    {
         var row = `<tr>
            <td>${contacto.firstName}</td>
            <td>${contacto.secondName}</td>
            <td>${contacto.age}</td>
            <td>${contacto.address}</td>
            <td>${contacto.dateOfBirth}</td>
            <td>${contacto.phoneNumber}</td>
            <td>${contacto.urlFoto}</td>
            <td>
            <a href="#" onclick="edit(${contacto.id})" class="myButton">Edit</a>
            <a href="#" onclick="remove(${contacto.id})" class="btnDelete">Delete</a>
            </td>
            </tr>`

          html = html + row
    }

     document.querySelector('#customers > tbody').outerHTML = html
}

async function remove(id)
{
   respuesta = confirm('¿Esta seguro que desea eliminarlo?')

   if (respuesta)
   {
       var url = URL_API + 'DatosContacto/' + id
       var response = await fetch(url, {
        "method": "DELETE",
        "headers": {
            "Content-Type": 'application/json'
        }
       })
       window.location.reload()
   }
}
 
async function save()
{   
    var data ={
        "firstName": document.getElementById('txtFirstName').value,
        "secondName": document.getElementById('txtSecondName').value,
        "age": document.getElementById('txtAge').value,
        "address": document.getElementById('txtAddress').value,
        "dateOfBirth": document.getElementById('txtDateBirth').value,
        "phoneNumber": document.getElementById('txtPhoneNumber').value,
        "urlFoto": document.getElementById('txtFoto').value,
    }
    
    var id = document.getElementById('txtId').value

    if (id =! '') {
        data.id = id
    }

    var url = URL_API + 'DatosContacto'
    var response = await fetch(url, {
    "method": id =! '' ? 'PUT': 'POST',
    "body": JSON.stringify(data),
    "headers": {
        "Content-Type": 'application/json'
    }
    })

    window.location.reload()

}

 function createContact(){
    htmlModal = document.getElementById("modal");
    htmlModal.setAttribute("class", "modale opened");
}

function cerrarModal(){
    htmlModal = document.getElementById("modal");
    htmlModal.setAttribute("class", "modale");
}

async function edit(id)
{
   createContact()
   var result =  contactos.find(x => x.id == id)
    
    document.getElementById('txtId').value = result.id
    document.getElementById('txtFirstName').value = result.firstName
    document.getElementById('txtSecondName').value = result.secondName
    document.getElementById('txtAge').value = result.age
    document.getElementById('txtAddress').value = result.address
    document.getElementById('txtDateBirth').value = result.dateOfBirth
    document.getElementById('txtPhoneNumber').value = result.phoneNumber
    document.getElementById('txtFoto').value = result.urlFoto
}

function clean()
{
    document.getElementById('txtId').value = ''
    document.getElementById('txtFirstName').value = ''
    document.getElementById('txtSecondName').value = ''
    document.getElementById('txtAge').value = ''
    document.getElementById('txtAddress').value = ''
    document.getElementById('txtDateBirth').value = ''
    document.getElementById('txtPhoneNumber').value = ''
    document.getElementById('txtFoto').value = ''
}

function agregar()
{
    clean()
    createContact()
}