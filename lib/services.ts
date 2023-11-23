export function isAdmin(token:string) {
    //returns true or false
}

export function isModerator(token:string) {
    //returns true or false
}

export function isLoggedIn(token:string) {
    //returns true or false
}

export function hasAccess(token:string) {
    //returns true or false, used for blocked users
}

export function sendDiscordNotification(message:string){
     //returns true or false depending on success of sending
}
