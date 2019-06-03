export const createFriendship = friendee => {
    return $.ajax({
        method: 'POST',
        url: 'api/friendships',
        data: friendee
    });
};

export const destroyFriendship = id => {

    return $.ajax({
        method: 'DELETE',
        url: `api/friendships/${id}`,
    });
};