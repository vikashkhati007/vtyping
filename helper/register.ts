export const RegisterUser = async (userdata:any) =>{
    const response = await fetch("http://localhost:3000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the JSON content type
      },
      body: JSON.stringify(userdata), // Serialize the data to JSON
    });

    if (response.status === 201) {
       return console.log("Sucesfully User registered");
    } else {
      return console.log("User Not Registered Sucesfully");
    }

}