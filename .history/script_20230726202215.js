document.addEventListener("DOMContentLoaded", init);

function init()
{
   search()
}

function search()
{
    var url = 'https://localhost:7019/Contacto'
    var resultado = fetch(url, {

        "method": "GET",
        "headers": {
            "Content-Type": "application/json",
        }
    })

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

document.querySelector('#customers > tbody').outerHTML = row
}

