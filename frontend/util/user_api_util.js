export const fetchUser = userId => (
    $.ajax({
        url: `api/users/${userId}`,
        method: 'GET',
    })
);

export const fetchUsers = id => (
    $.ajax({
        url: `api/users/`,
        method: 'GET',
        data: { id }
    })
);

export const updateUser = (formdata, id) => {
    return (
        $.ajax({
            url: `api/users/${id}`,
            method: 'PATCH',
            data: formdata,
            contentType: false,
            processData: false
        })
    )
};