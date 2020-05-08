export const fetchUser = userId => (
    $.ajax({
        url: `api/users/${userId}`,
        method: 'GET',
    })
);

export const fetchUsers = serverId => (
    $.ajax({
        url: `api/servers/${serverId}`,
        method: 'GET',
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