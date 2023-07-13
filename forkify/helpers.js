
import { TIME_OUT_SEC } from './config.js'

const timeout = function (s) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject(new Error(`Request took long ! Timeout after ${s} seconds`), s * 1000)
        })
    })
}

export const getJSON = async function (url) {
    try {
        const res = await fetch(url);
        // const res = await Promise.race([fetch(url), timeout(TIME_OUT_SEC)]);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.error} (${res.status})`);

        return data;
    } catch (err) {
        throw err; //rejecting promise
    }

}
