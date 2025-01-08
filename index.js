let car = {
    name: 'than cua vuong',
    speed: '10000000000',
}

console.log(car);

let content = "hello file node.js";
const fs = require("fs");
fs.writeFile("demo.txt", "vuongwdz ","utf8",(err) => {
    console.log(err);
  });
fs.readFile("demo.txt", "utf8", (err, data) => {
    if (err) {
        console.error(err); // Xử lý lỗi
        return;
    }
    console.log(data); // In nội dung file
});

const os = require('os');

// Lấy thông tin hệ điều hành
const platform = os.platform(); // e.g., 'win32', 'linux', 'darwin'
const arch = os.arch(); // e.g., 'x64', 'arm'
const release = os.release(); // e.g., '10.0.19042'

// Lấy thông tin CPU
const cpus = os.cpus(); // Mảng chứa thông tin về CPU
const cpuModel = cpus[0].model; // Model của CPU (ví dụ: 'Intel(R) Core(TM)...')
const cpuCores = cpus.length; // Số lõi CPU

// Lấy thông tin RAM
const totalRAM = os.totalmem() / (1024 ** 3); // Tổng RAM (GB)
const freeRAM = os.freemem() / (1024 ** 3); // RAM còn trống (GB)
const usedRAM = totalRAM - freeRAM; // RAM đã sử dụng (GB)

// Hiển thị thông tin hệ thống
console.log('=== Cấu hình máy tính ===');
console.log(`Hệ điều hành: ${platform} ${release} (${arch})`);
console.log(`CPU: ${cpuModel} (${cpuCores} lõi)`);
console.log(`Tổng RAM: ${totalRAM.toFixed(2)} GB`);
console.log(`RAM đã sử dụng: ${usedRAM.toFixed(2)} GB`);
console.log(`RAM còn trống: ${freeRAM.toFixed(2)} GB`);

