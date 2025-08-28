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
let deshbtn = document.querySelector('#desh-btn');
let probtn = document.querySelector('#pro-btn');
let orderbtn = document.querySelector('#order-btn');

probtn.addEventListener('click', function () {
  if (deshboard.style.display = 'none') {
    product.style.display = 'block';
  }

});

deshbtn.addEventListener('click', function () {
  product.style.display = 'none';
  deshboard.style.display = 'block';
});