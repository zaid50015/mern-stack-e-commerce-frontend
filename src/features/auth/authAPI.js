export function createUser(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch("/auth/signup", {
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

export function loginUser(loginInfo) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("/auth/login", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        body: JSON.stringify(loginInfo),
        headers: {
          "content-type": "application/json",
        },
        // 'Content-Type': 'application/x-www-form-urlencoded',
      });
     
      if (response.ok) {
        const data = await response.json();

        resolve({ data });
      } else {
        const err = await response.text();
        reject( err );
      }
    } catch (error) {
      reject( error );
    }
  });
}

export function checkAuth() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("/auth/checkAuth")
     
      if (response.ok) {
        const data = await response.json();

        resolve({ data });
      } else {
        const err = await response.text();
        reject( err );
      }
    } catch (error) {
      reject( error );
    }
  });
}

export function logOut(userId) {
  return new Promise(async (resolve, reject) => {
    resolve({ message: "Successfully" });
  });
}
