const createFriendship = (invitee) => {
    debugger
    let email = invitee;
    let parts = invitee.split("@");
    console.log(parts);
    let name = parts[0];
    let password = 'password123';

    // create a new user (without their permission and with a default password) in the users table with an ajax request
    const newUser = $.ajax({
        method: 'POST',
        url: 'api/users',
        data: {
            email: email,
            name: name,
            password: password,
        },
    })

    debugger
    //now that user exists, get their user_id and use it as friend_id in the creation of a 1-way friendship

    return $.ajax({
        method: 'POST',
        url: 'api/friendships',
        data: {
            // friend_id: some number
        },
    });
};

export default createFriendship;