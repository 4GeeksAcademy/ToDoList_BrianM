export const addUser = async (UserName) => {
    try {
        const responseData = await fetch (`https://playground.4geeks.com/todo/users/${UserName}`, {
         method: "POST",
         headers: {
          "Content-Type": "application/json"
        },   
        body: JSON.stringify({})
    });
    const json = await responseData.json();
    if (!responseData.ok) {
        console.error(json);
        throw new Error(json);
    }
    return json;
 }
 catch(err) {
    console.error(`Error al registrar al usuario ${UserName}:${JSON.stringify(err)}`)
 }
}

