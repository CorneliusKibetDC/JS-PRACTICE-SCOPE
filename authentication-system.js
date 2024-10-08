function loginUser(username, password){
    const recognizedusername= "cornel";
    const recognizedpassword= "101023";

    if(username===recognizedusername && password===recognizedpassword){
        const role=getUserRole(username);
        if (role==="admin"){
            console.log("Admin access granted");
        } else if(role==="editor"){
            console.log("Editor access granted.");
        } else if(role==="viewer"){
            console.log("Viewer access granted.");
        }
        else {
            console.log("User access granted.")
        } 
}
function getUserRole(username){
    const roles={
        cornel:"admin",
        jane:"editor",
        ben:"viewer"
    };
    return roles[username] || "user";
}
}
loginUser("cornel", "101023");