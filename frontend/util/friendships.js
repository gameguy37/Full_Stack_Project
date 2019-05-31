const createFriendship = (invitee) => {
    debugger
    let email = invitee;
    let parts = invitee.split("@");
    console.log(parts);
    let name = parts[0];
    let password = 'password123';

    // create a new user (without their permission and with a default password) in the users table with an ajax request
    $.ajax({
        method: 'POST',
        url: 'api/users',
        data: {
            email: email,
            name: name,
            password: password,
        },
        success: function(user) {
            return $.ajax({
                method: 'POST',
                url: 'api/friendships',
                data: { friend_id: user.id },
            })
        }
    });
};

export default createFriendship;