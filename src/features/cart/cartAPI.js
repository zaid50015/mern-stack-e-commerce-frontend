export function addToCart(cartData) {
  return new Promise(async (resolve) => {

    const response = await fetch('http://localhost:8080/cart', {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      body: JSON.stringify(cartData),
      headers: {
        "content-type": "application/json",
      },
      // 'Content-Type': 'application/x-www-form-urlencoded',
    });

    const data = await response.json();
    // console.log(data);
    resolve({ data });
  });
}

export function fetchItemsByUserId(userId){
  return new Promise(async (resolve) =>{
    //TODO: we will not hard-code server URL here
    const response = await fetch("http://localhost:8080/cart?user="+userId); 
    const data = await response.json()
    resolve({data})
  }
  );
}

export function upadteCart(update) {
  return new Promise(async (resolve) => {

    const response = await fetch('http://localhost:8080/cart/'+update.id, {
      method: "PATCH", // *GET, POST, PUT, DELETE, etc.
      body: JSON.stringify(update),
      headers: {
        "content-type": "application/json",
      },
      // 'Content-Type': 'application/x-www-form-urlencoded',
    });

    const data = await response.json();
    // console.log(data);
    resolve({ data });
  });
}


export function deleteItemFromCart(itemId) {
  return new Promise(async (resolve) => {

    const response = await fetch('http://localhost:8080/cart/'+itemId, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "content-type": "application/json",
      },
      // 'Content-Type': 'application/x-www-form-urlencoded',
    });

    const data = await response.json();
    // console.log(data);
    resolve({ data:{id:itemId} });
  });
}