//alert('Olá Javascript')

// function exibirAlerta(valor){
//     alert(valor)
// }

// exibirAlerta('Este alerta é feito por uma função')

// var f = document.forms[0];
// f.addEventListener("submit", function(e){
//     alert(f.a.value)
//     return false;
// })

// f.a.addEventListener("keyup", function(e){
//     f.a.value = f.a.value.toUpperCase()
// })

// let {title, except, body, tags} = post;
// var postHtml = `<article>
// <header>´

// var listaClientes = [
//     "José",
//     "Maria",
//     "Jonas",
//     "João"
// ];

// for(clientes in listaClientes){ //clientes recebe o index (posição no objeto)
//     console.log(clientes)
// }

// for(clientes in listaClientes){ //
//     console.log(listaClientes[clientes])
// }

// var inc = 0;
// while (inc < 10) {
//     console.log(inc);
//     inc++;
// }

// var listaClientes = [
//     "José",
//     "Maria",
//     "Jonas",
//     "João"
// ];

// for(let index = 0; index < listaClientes.length; index++){
//     console.log(listaClientes[index])
// }



$(function(){                           //inicialização do jquery (tudo o que está dentro das chaves faz parte do escopo do jquery)
    var estados = {   
        '12': 'Acre',
        '27': 'Alagoas',
        '16': 'Amapá',
        '13': 'Amazonas',
        '29': 'Bahia',
        '23': 'Ceará',
        '53': 'Distrito Federal',
        '32': 'Espírito Santo',
        '52': 'Goías',
        '21': 'Maranhão',
        '51': 'Mato Grosso',
        '50': 'Mato Grosso do Sul',
        '31': 'Minas Gerais',
        '15': 'Pará',
        '25': 'Paraíba',
        '41': 'Paraná',
        '26': 'Pernambuco',
        '22': 'Piauí',
        '33': 'Rio de Janeiro',
        '24': 'Rio Grande do Norte',
        '43': 'Rio Grande do Sul',
        '11': 'Rondônia',
        '14': 'Roraíma',
        '42': 'Santa Catarina',
        '35': 'São Paulo',
        '28': 'Sergipe',
        '17': 'Tocantins'
    }
    
    let options = `<option value=""> Selecione um estado</option>`;

    for (i in estados){
        options += `<option value = "${i}">${estados[i]}</option>`;
    }

    $('select[name="estados"]').html(options);

    $('.estados').change(function(){
        let estado = $(this).val();
        $(this).addClass('estadosDoBrasil')
        console.log(estado);
    })
})