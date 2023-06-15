export default function getUserData() {
    return new Promise(async (resolve, reject) => {
        const userData = await JSON.parse(sessionStorage.getItem('userData'));
        resolve(userData)
    });
}
