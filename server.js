const os = require("os");
const fs = require("fs");
const path = require("path");
const http = require("http");

// Lấy thông tin cấu hình máy tính
const systemInfo = {
    OSType: os.type(),
    Platform: os.platform(),
    RAM: os.totalmem(),
    USEDRAM: os.totalmem() - os.freemem(),
    CPU: os.cpus(),
};

// Lưu thông tin vào file
const folderPath = "D:/LTMNM";
const filePath = path.join(folderPath, "systemInfo.json");

fs.mkdir(folderPath, { recursive: true }, (err) => {
    if (err) {
        console.error("Lỗi tạo thư mục:", err);
        return;
    }
    fs.writeFile(filePath, JSON.stringify(systemInfo, null, 2), (err) => {
        if (err) {
            console.error("Lỗi ghi tệp:", err);
            return;
        }
        console.log("Ghi tệp thành công!");
        console.log("Completed task!");
    });
});

// Tạo server hiển thị thông tin
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(systemInfo, null, 2));
});

// Server chạy trên cổng 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});