function createEvent(event){
    
    const registeredUsers=[];
    

    function registerUser(username){
        if (!registeredUsers.includes(username)){
            registeredUsers.push(username);
            console.log(`${username} has registered for event ${event}`);

        }
        else {
            console.log(`${username} is already registered for event ${event}`);

        }
    }
    function checkregistration(username){
        if (registeredUsers.includes(username)){
            return `${username} is registered for event ${event}`;

        }
        else {
            return `${username} is not registered for event ${event}`;

        }

    }
    return {
        registerUser,
        checkregistration,
    };

    }
    const coding=createEvent("coding event");
    const data=createEvent("data boot event");
    coding.registerUser("jane");
    coding.registerUser("juma");

    console.log(coding.checkregistration("jane"));
    console.log(coding.checkregistration("peter"));

    data.registerUser("amon");
    data.registerUser("bib");

    console.log(data.checkregistration("bib"));
    console.log(data.checkregistration("jane"));
