console.log("START");

function login(email, pwd, callback) {
    setTimeout(() => {
        callback({
            uname: email,
            isLoggedIn: true,
            message: "LOGIN successful"
        });
    }, 1000);
}

function VIDLIST(LIST) {
    setTimeout(() => {
        LIST("LIST OF VIDEOS");
        console.log("array1")
        console.log("array2")
        console.log("array3")
    }, 3000);
}


function VIDEO(VIDS) {
    setTimeout(() => {
        VIDS("1,2,3,4");
    }, 1000);
}


login("user@example.com", "password111", (data) => {
    console.log(data);
    VIDLIST((data)=>{
        console.log(data)
        VIDEO((data)=>{console.log(data)});
        
    });
});
console.log("END");
