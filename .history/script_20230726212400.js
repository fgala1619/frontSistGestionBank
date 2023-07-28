document.addEventListener("DOMContentLoaded", init);

const URL_API = 'https://localhost:7019/Contacto'

function init()
{
   search()
}

async function search()
{
    var url = URL_API
    var response = await fetch(url, {

        "method": "GET",
        "headers": {
            "Content-Type": 'application/await'
        }
    })

    var resultado = await response.json();

    var html = ''

    for (contacto of resultado)
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
            <a href="#" class="myButton">Edit</a>
            <a href="#" class="btnDelete">Delete</a>
            </td>
            </tr>`

       html = html + row
    }

     document.querySelector('#customers > tbody').outerHTML = html
}

