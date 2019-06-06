export const getBills = () => {
    return $.ajax({
        method: 'GET',
        url: 'api/bills'
    });
};

export const getBill = (id) => {
    return $.ajax({
        method: 'GET',
        url: `api/bills/${id}`
    });
};

export const createBill = payload => {
    return $.ajax({
        method: 'POST',
        url: 'api/bills',
        data: payload
    });
};

export const updateBill = payload => {
    return $.ajax({
        method: 'PATCH',
        url: `api/bills/${payload.bill.id}`,
        data: payload
    });
};

export const destroyBill = id => {

    return $.ajax({
        method: 'DELETE',
        url: `api/bills/${id}`,
    });
};