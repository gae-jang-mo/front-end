import axios from 'axios';

export default class Request {
    constructor(baseUrl = '') {
        let request = axios.create({
            headers: {csrf: 'token'}
        });
        request.interceptors.response.use(this.handleSuccess, this.handleError);
        this.request = request;
        this.baseUrl = baseUrl;
    }

    handleSuccess(response) {
        return response;
    }

    handleError = (error) => {
        return Promise.reject(console.log(error.response.data));
    };

    get = (attachedUrl, callback = this.defaultCallback) => {
        return this.request.get(this.baseUrl + attachedUrl)
            .then(response => callback(response.status, response.data))
    };

    delete = (attachedUrl, callback = this.defaultCallback) => {
        return this.request.delete(this.baseUrl + attachedUrl)
            .then(response => callback(response.status, response.data))
    };

    post = (attachedUrl, data, callback = this.defaultCallback) => {
        return this.request.post(this.baseUrl + attachedUrl, data)
            .then(response => callback(response.status, response.data))
    };

    put = (attachedUrl, data, callback = this.defaultCallback) => {
        return this.request.put(this.baseUrl + attachedUrl, data)
            .then(response => callback(response.status, response.data))
    };

    defaultCallback = (status, data) => {
        console.log(status + data)
    }
}
