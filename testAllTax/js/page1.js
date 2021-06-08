let categorias = { 
    'comida' : {
            'arroz': {
                'coradini': {
                    'janeiro': 100,
                    'fevereiro': 50,
                    'marco': 200,
                    'abril': 150,
                },
                'fujini': {
                    'janeiro': 50,
                    'fevereiro': 100,
                    'marco': 250,
                    'abril': 80,
                }
            },
            'feijao': {
                'beta': {
                    'janeiro': 90,
                    'fevereiro': 120,
                    'marco': 180,
                    'abril': 60,
                },
                'urbano': {
                    'janeiro': 30,
                    'fevereiro': 100,
                    'marco': 200,
                    'abril': 300,
                }
            }
        },
    'carros' : {
        'sedan': {
            'Fiat': {
                'janeiro': 100,
                'fevereiro': 200,
                'marco': 300,
                'abril': 400,
            },
            'VW': {
                'janeiro': 100,
                'fevereiro': 50,
                'marco': 150,
                'abril': 300,
            }
        },
        'pickup': {
            'Toyota': {
                'janeiro': 50,
                'fevereiro': 200,
                'marco': 600,
                'abril': 500,
            },
            'Mitsubishi': {
                'janeiro': 100,
                'fevereiro': 60,
                'marco': 300,
                'abril': 230,
            }
        }
    }
}

//test
var one = 'comida';
var two = 'arroz';
var three = 'coradini';
var chart;

let renderCategory = () => {
    var labelCategory = document.createElement("label");
    labelCategory.innerHTML = 'Categoria:';

    var selectCategories = document.createElement("select");
    var categoriesList = Object.keys(categorias);
    var form = document.getElementById("selection1");

    form.appendChild(labelCategory);
    form.appendChild(selectCategories);

    for(var i=0; i< Object.keys(categorias).length; i++) {
        var option = document.createElement("option");
        option.value = categoriesList[i];
        option.text = categoriesList[i];
        selectCategories.appendChild(option);
    }

    

    if(!one){
        one = selectCategories.value;
    }

    selectCategories.onchange = (e) => {
        one = e.target.value;
        let aux = Object.keys(categorias[one])[0];
        two = categorias?.one?.aux;
        Array.prototype.slice.call(document.getElementById("selection2").children).forEach(
            function(item) {
              item.remove();
              // or item.parentNode.removeChild(item); for older browsers (Edge-)
          });

          Array.prototype.slice.call(document.getElementById("selection3").children).forEach(
            function(item) {
              item.remove();
              // or item.parentNode.removeChild(item); for older browsers (Edge-)
          }); 

          chart.destroy();

          renderProduct();
          renderBrand();
          renderGraph();
    }
}

let renderProduct = () => {
    var labelProduct = document.createElement("label");
    labelProduct.innerHTML = 'Produto:';

    var selectCategories2 = document.createElement("select");
    var categoriesList2 = Object.keys(categorias[one]);
    var form2 = document.getElementById("selection2");

    form2.appendChild(labelProduct);
    form2.appendChild(selectCategories2);

    for(var i=0; i<categoriesList2.length; i++) {
        var option = document.createElement("option");
        option.value = categoriesList2[i];
        option.text = categoriesList2[i];
        selectCategories2.appendChild(option);
    }
    selectCategories2.name = "produto";

    if(!two){
        two = selectCategories2.value;
    }

    selectCategories2.onchange = function(e) {
    two = e.target.value;
      Array.prototype.slice.call(document.getElementById("selection3").children).forEach(
        function(item) {
          item.remove();
      });

      chart.destroy();

      renderBrand();
      renderGraph();
}
}

let renderBrand = () => {
    var labelBrand = document.createElement("label");
    labelBrand.innerHTML = 'Marca:';

    var form3 = document.getElementById("selection3");
    form3.innerHtml = '';

    var categoriesList3 = Object.keys(categorias[one][two]);
    
    var selectCategories3 = document.createElement("select");
    form3.appendChild(labelBrand);
    form3.appendChild(selectCategories3);

    for(var i=0; i<categoriesList3.length; i++) {
        var option = document.createElement("option");
        option.value = categoriesList3[i];
        option.text = categoriesList3[i];
        selectCategories3.appendChild(option);

        three = selectCategories3.value;
}

selectCategories3.onchange = function(e) {
    three = selectCategories3.value;

    chart.destroy();

    renderGraph();
}
}

renderGraph = () => {
    var ctx = document.getElementById('myChart').getContext('2d');
    chart = new Chart(ctx, {
    type: 'bar',
    data: {
        datasets: [{
            label: 'Sales per Month',
            data: categorias[one][two][three],
            backgroundColor: [
                
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            }
        }
    }
});
}

renderCategory();
renderProduct();
renderBrand();
renderGraph();