export const getPayments = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/payments'
    });
};

export const getPayment = (id) => {
    return $.ajax({
        method: 'GET',
        url: `api/payments/${id}`
    });
};

export const createPayment = payment => {
    return $.ajax({
        method: 'POST',
        url: 'api/payments',
        data: payment
    });
};

export const updatePayment = payment => {
    return $.ajax({
        method: 'PATCH',
        url: `api/payments/${payment.id}`,
        data: payment
    });
};

export const destroyPayment = id => {

    return $.ajax({
        method: 'DELETE',
        url: `api/payments/${id}`,
    });
};