module.exports = class Logger {
    static info(text) {
        const msg = `[INFO] ${new Date().toLocaleTimeString()} ${text}`;
        console.log(msg);
    }

    static error(text) {
        const msg = `[ERROR] ${new Date().toLocaleTimeString()} ${text}`;
        console.log(msg);
    }
}