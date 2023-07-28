document.addEventListener("DOMContentLoaded", init);

const URL_API = 'https://localhost:7019/Contacto/'

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

    for (contacto in resultado)
    {
         var row = `<tr>
       <td>Yisel</td>
       <td>Perez</td>
       <td>34</td>
       <td>Calle Republica Final</td>
       <td>10-05-1988</td>
       <td>54961464</td>
       <td>https://mifoto.com</td>
       <td>
        <a href="#" class="myButton">Edit</a>
        <a href="#" class="btnDelete">Delete</a>
       </td>
       </tr>`

       html = html + row
    }

     document.querySelector('#customers > tbody').outerHTML = html
}

