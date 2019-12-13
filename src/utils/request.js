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

    get = (attachedUrl, callback = this.defaultCallback, params) => {
        if (params) {
            attachedUrl = this.addParamToUrl(attachedUrl, params);
        }
        return this.request.get(this.baseUrl + attachedUrl)
            .then(response => callback(response.data))
    };

    delete = (attachedUrl, callback = this.defaultCallback, params) => {
        if (params) {
            attachedUrl = this.addParamToUrl(attachedUrl, params);
        }
        return this.request.delete(this.baseUrl + attachedUrl)
            .then(response => callback(response.data))
    };

    post = (attachedUrl, callback = this.defaultCallback, data) => {
        return this.request.post(this.baseUrl + attachedUrl, data)
            .then(response => callback(response.data))
    };

    put = (attachedUrl, callback = this.defaultCallback, data) => {
        return this.request.put(this.baseUrl + attachedUrl, data)
            .then(response => callback(response.data))
    };

    defaultCallback = (status, data) => {
        console.log(status + data)
    };

    addParamToUrl = (url, params) => {
        let parsedParams = [];
        for (const param in params) {
            parsedParams.push(`${param}=${params[param]}`)
        }
        const joinedParams = parsedParams.join("&");
        return `${url}?${joinedParams}`;
    }
}
