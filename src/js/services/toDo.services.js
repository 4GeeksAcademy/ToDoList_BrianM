export const getUser = async (setTasks) => {
   try {
       const responseData = await fetch (`https://playground.4geeks.com/todo/users/Brian`, {
           method: "GET",
       });

       const data = await responseData.json();
       setTasks(data.todos)
       console.log(data)
       return data

   } catch (error) {
       console.error(`Error al registrar al obtener la lista de tareas :${JSON.stringify(err)}`)
   }
};


export const postTask = async (userName,inputValue,setTasks) => {
    try {
        const taskToAdd = {
            label: inputValue,
            is_done: false
        };
        const responseData = await fetch (`https://playground.4geeks.com/todo/todos/${userName}`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(taskToAdd) 
        })   
        const json = await responseData.json ();
        getUser(setTasks)
            if (!responseData.ok) {
                throw new Error (json);
            };
    }
    catch (err){
        console.error (`Error al agregar ${inputValue} al usuario ${userName}:${err}`);
    }
}

