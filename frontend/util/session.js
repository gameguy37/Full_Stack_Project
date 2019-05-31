export const createNewUser = (user) => {
    return $.ajax({
        method: 'POST',
        url: 'api/users',
        data: { user },
    });
};

export const createSession = (user) => {
    debugger
    return $.ajax({
        method: 'POST',
        url: 'api/session',
        data: user,
    });
};

export const destroySession = () => {
    return $.ajax({
        method: 'DELETE',
        url: 'api/session',
    });
};