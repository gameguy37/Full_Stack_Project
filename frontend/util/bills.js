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

export const createBill = bill => {
    return $.ajax({
        method: 'POST',
        url: 'api/bills',
        data: bill
    });
};

export const updateBill = bill => {
    return $.ajax({
        method: 'PATCH',
        url: `api/bills/${bill.id}`,
        data: bill
    });
};

export const destroyBill = id => {

    return $.ajax({
        method: 'DELETE',
        url: `api/bills/${id}`,
    });
};