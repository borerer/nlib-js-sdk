class nlib {
    api: string = '';
    appID: string = '';

    constructor(api: string, appID: string) {
        this.api = api;
        this.appID = appID;
    }

    async getFile(file: string): Promise<Blob> {
        const url = `${this.api}/file/get?app=${this.appID}&file=${encodeURIComponent(file)}`;
        const res = await fetch(url);
        return await res.blob();
    }

    async putFile(file: string, blob: Blob) {
        const url = `${this.api}/file/put?app=${this.appID}&file=${encodeURIComponent(file)}`;
        const options = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: blob
        }
        const res = await fetch(url, options);
        await res.json();
    }
}

export default nlib;
