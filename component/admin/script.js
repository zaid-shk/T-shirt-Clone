const ctx = document.getElementById('salesChart').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      label: "Sales",
      data: [4000, 3700, 5000, 4200, 6900, 7200, 8000, 7700, 9000, 8700, 10500, 13000],
      borderColor: "#000",
      backgroundColor: "#000",
      fill: false,
      tension: 0.3,
      pointRadius: 5,
      pointBackgroundColor: "#000"
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 3500 }
      }
    }
  }
});

let deshboard = document.querySelector('#main #Deshboard');
let product = document.querySelector('#main #product-page');
let order = document.querySelector('#main #order-page');
let customer = document.querySelector('#main #customer-page');
let analetics = document.querySelector('#main #analetics');
let categories = document.querySelector('#main #categories');
let setting = document.querySelector('#main #setting-page');

let deshbtn = document.querySelector('#deshbtn-d');
let probtn = document.querySelector('#probtn-d');
let orderbtn = document.querySelector('#ordbtn-d');
let custbtn = document.querySelector('#custbtn-d');
let anabtn = document.querySelector('#anabtn-d');
let catebtn = document.querySelector('#catebtn-d');
let setbtn = document.querySelector('#setbtn-d');
let set2 = document.querySelector('#set2');


function pagetoggle() {
set2.addEventListener('click',function(){
    if(setting.style.display = 'block'){
            customer.style.display = 'none'
      categories.style.display = 'none'
      analetics.style.display = 'none'
      product.style.display = 'none';
      order.style.display = 'none'
      deshboard.style.display = 'none';
    }
})

  setbtn.addEventListener('click', function () {
    if (setting.style.display = 'block') {
      customer.style.display = 'none'
      categories.style.display = 'none'
      analetics.style.display = 'none'
      product.style.display = 'none';
      order.style.display = 'none'
      deshboard.style.display = 'none';
    }
  });
  catebtn.addEventListener('click', function () {
    if (categories.style.display = 'block') {
      customer.style.display = 'none'
      analetics.style.display = 'none'
      product.style.display = 'none';
      order.style.display = 'none'
      deshboard.style.display = 'none';
    }
  });
  anabtn.addEventListener('click', function () {
    if (analetics.style.display = 'block') {
      customer.style.display = 'none'
      product.style.display = 'none';
      order.style.display = 'none'
      deshboard.style.display = 'none';
    }
  });
  custbtn.addEventListener('click', function () {
    if (customer.style.display = 'block') {
      product.style.display = 'none';
      order.style.display = 'none'
      deshboard.style.display = 'none';
    }
  });
  orderbtn.addEventListener('click', function () {
    if (order.style.display = 'block') {
      product.style.display = 'none';
      deshboard.style.display = 'none';
      customer.style.display = 'none'
    }
  });
  probtn.addEventListener('click', function () {
    if (deshboard.style.display = 'none') {
      product.style.display = 'block';
      order.style.display = 'none'
      customer.style.display = 'none'
    }
  });

  deshbtn.addEventListener('click', function () {
    product.style.display = 'none';
    deshboard.style.display = 'block';
    order.style.display = 'none'
    customer.style.display = 'none'
    setting.style.display = 'none'
  });

}
pagetoggle() 