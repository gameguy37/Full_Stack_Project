export const createFriendship = (user) => {
    let name = user.name;
    let email = user.email;
    let password = 'password123';

    // if (user.includes('@')) {
    //     email = user;
    //     name = user.split('@')[0];
    // } else {
    // }

    return $.ajax({
        method: 'POST',
        url: 'api/friendships',
        data: {
            name: name,
            email: email,
            password: password,
        },
    });
};