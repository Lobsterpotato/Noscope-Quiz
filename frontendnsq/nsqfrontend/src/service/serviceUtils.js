import Swal from 'sweetalert2';

export const urlBackend = 'http://localhost:8181';
export const methods = {
    POST: 'POST',
    GET: 'GET',
    PUT: 'PUT',
    DELETE: 'DELETE'
}
export const requestInit = (method, body, isString) => {
    let value = {
        method: method,
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }

    if (body && (method === methods.POST || method === methods.PUT)) {
        if (isString)
            value['body'] = body
        else
            value['body'] = JSON.stringify(body)
    }
    return value
}

export const swalErr = Swal.mixin({
    icon: 'error',
    title: 'Oops...',
});
export const toast = Swal.mixin({
    toast: true,
    icon: 'success',
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 2500,
});
export const toastErr = Swal.mixin({
    toast: true,
    icon: 'error',
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 3000,
});


