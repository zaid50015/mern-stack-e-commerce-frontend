export function createUser(userData) {
  return new Promise(async (resolve) => {

    const response = await fetch('http://localhost:8080/users', {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      body: JSON.stringify(userData),
      headers: {
        "content-type": "application/json",
      },
      // 'Content-Type': 'application/x-www-form-urlencoded',
    });

    const data = await response.json();
    resolve({ data });
  });
}


export function checkUser(loginInfo) {
  return new Promise(async (resolve,reject) => {
     const email=loginInfo.email;
     const password=loginInfo.password
    const response = await fetch('http://localhost:8080/users?email='+email)
    const data = await response.json();
    console.log(data);
    if(data.length){
      if(data[0].password===password){
        resolve({data:data[0]});
      }
      else{
        reject({message:"Invalid credentails"})
      }
    }
    else{
      reject({message:"Invalid credentails"})
    }

  });
}