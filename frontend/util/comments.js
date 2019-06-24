export const getComments = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/comments'
    });
};

export const getComment = (id) => {
    return $.ajax({
        method: 'GET',
        url: `api/comments/${id}`
    });
};

export const createComment = payload => {
    return $.ajax({
        method: 'POST',
        url: 'api/comments',
        data: payload
    });
};

export const destroyComment = id => {
    return $.ajax({
        method: 'DELETE',
        url: `api/comments/${id}`,
    });
};