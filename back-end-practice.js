
async function loadProducts() {
  const response = await fetch('https://supersimplebackend.dev/products'); // Waits here until data is back
  products = await response.json(); // Waits here until data is back
  render();
}

function render() {
  let html = '';
  
  // Now 'products' is guaranteed to be defined
  products.forEach((product) => {
    html += `<p><b>${product.name}</b> - ${product.id}</p>`;
  });
  
  document.body.innerHTML = html;
}

loadProducts();


/*let products;

// Pass 'render' as a callback
loadProducts(render);

function loadProducts(callback) {
  const xhr = new XMLHttpRequest();
  
  xhr.addEventListener('load', () => {
    products = JSON.parse(xhr.response);
    console.log('Data loaded:', products.length);
    
    // Execute the callback (render) only after data is ready
    callback(); 
  });

  xhr.open('GET', 'https://supersimplebackend.dev/products');
  xhr.send(); 
}

function render() {
  console.log('rendering');
  let html = '';
  
  // Now 'products' is guaranteed to be defined
  products.forEach((product) => {
    html += `<p><b>${product.name}</b> - ${product.id}</p>`;
  });
  
  document.body.innerHTML = html;
}*/

/*let products;


loadProducts(render);


function loadProducts(callback){
  
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load', ()=>{
    products = JSON.parse(xhr.response);
    console.log(products.length);
    callback();
  })
  xhr.open('GET', 'https://supersimplebackend.dev/products');
  xhr.send(); 
     //console.log('loaded');
     
}

function render (){
    console.log('rendering');
    let html ='';
    products.forEach((product)=>{
        html += `<p><b>${product.name}</b>- ${product.id}</p>`;
    });
    document.body.innerHTML = html;
}
*/
/*
new Promise((resolve)=>{
  loadProducts(()=>{
    console.log('about to resolve');
    resolve();
    console.log('resolved')
  });

}).then(()=>{
  console.log('about to render');
  render();
  console.log('rendered');
});
*/

/*let products;
const xhr = new XMLHttpRequest();

xhr.addEventListener('load', ()=>{
    console.log(xhr.response);
})
xhr.open('GET', 'https://supersimplebackend.dev/images/apple.jpg');
xhr.send();



new Promise((resolve)=>{
  loadProducts(()=>{
    console.log('about to resolve');
    resolve();
    console.log('resolved')
  });

}).then(()=>{
  console.log('about to render');
  renderProducts();
  console.log('rendered');
});

renderProducts();
*/