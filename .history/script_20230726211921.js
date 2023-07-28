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
            "Content-Type": "application/json",
        }
    })

    var resultado = await response.json();

    var html = ''

    for (customer of resultado)
    {
         var row = `<tr>
            <td>${customer.firstName}</td>
            <td>${customer.secondName}</td>
            <td>${customer.age}</td>
            <td>${customer.address}</td>
            <td>${customer.dateOfBirth}</td>
            <td>${customer.phoneNumber}</td>
            <td>${customer.urlFoto}</td>
            <td>
            <a href="#" class="myButton">Edit</a>
            <a href="#" class="btnDelete">Delete</a>
            </td>
            </tr>`

       html = html + row
    }

     document.querySelector('#customers > tbody').outerHTML = html
}

