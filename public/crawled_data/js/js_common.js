/**
 * HỆ THỐNG QUẢN LÝ NGƯỜI DÙNG - APTIS KEY 2026
 * Mọi thông tin đều được lấy từ Server thông qua API /api/me
 */

// 1. Hàm khởi tạo chính khi trang web tải xong
document.addEventListener("DOMContentLoaded", async () => {
    await initializeUser();
});

async function initializeUser() {
    const statusEl = document.getElementById("status_hocvien");
    const nameEl = document.getElementById("userName");
    const authBtn = document.getElementById("signOutBtn");
    const tabProfile = document.getElementById("tabprofile");
    const xProfile = document.getElementById("xProfile");

    try {
        // 1. Gọi API lấy thông tin
        const response = await fetch('/api/me');

        // 2. KIỂM TRA PHẢN HỒI: Nếu lỗi 401 (Unauthorized) hoặc không OK
        if (!response.ok) {
            console.log("Hệ thống: Chế độ khách (Chưa đăng nhập)");
            updateUIForGuest(nameEl, statusEl, authBtn, tabProfile, xProfile);
            return;
        }

        // 3. KIỂM TRA KIỂU DỮ LIỆU: Đảm bảo là JSON để tránh lỗi "Unexpected token <"
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
            throw new TypeError("Server không trả về JSON hợp lệ!");
        }

        const data = await response.json();

        // 4. CẬP NHẬT GIAO DIỆN NẾU THÀNH CÔNG
        if (data.success) {
            updateUIForUser(data, nameEl, statusEl, authBtn, tabProfile, xProfile);
            
            // Nếu trang hiện tại có các nút admin, hãy kiểm tra quyền admin luôn
            if (typeof checkAdminUI === 'function') {
                checkAdminUI(); 
            }
        } else {
            updateUIForGuest(nameEl, statusEl, authBtn, tabProfile, xProfile);
        }

    } catch (err) {
        // Khi có lỗi (mất mạng, server sập, hoặc parse JSON lỗi), mặc định là Khách
        console.warn("Lỗi xác thực, chuyển về chế độ khách:", err.message);
        updateUIForGuest(nameEl, statusEl, authBtn, tabProfile, xProfile);
    }
}

// 2. Cập nhật giao diện cho khách
function updateUIForGuest(nameEl, statusEl, authBtn, tabProfile, xProfile) {
    if (nameEl) nameEl.textContent = "Khách";
    if (tabProfile) tabProfile.classList.add("d-none");
    if (xProfile) xProfile.style.display = "none";
    
    if (statusEl) {
        statusEl.innerHTML = `
            Khách trải nghiệm
            <small>Bạn chưa đăng ký học</small>
        `;
    }

    if (authBtn) {
        authBtn.textContent = "Đăng nhập";
        authBtn.onclick = () => window.location.href = "/login.html";
    }
}

// 3. Cập nhật giao diện cho học viên
function updateUIForUser(data, nameEl, statusEl, authBtn, tabProfile, xProfile) {
    if (nameEl) nameEl.textContent = data.fullName;
    if (tabProfile) tabProfile.classList.remove("d-none");
    if (xProfile) xProfile.style.display = "inline-block";

    // Xử lý nút Đăng xuất
    if (authBtn) {
        authBtn.textContent = "Đăng xuất";
        authBtn.onclick = handleLogout;
    }

    // Xử lý trạng thái tài khoản & ngày hết hạn
    if (statusEl) {
        const expireDateObj = new Date(data.expiredAt);
        const now = new Date();
        
        // Format ngày theo kiểu Việt Nam: dd/mm/yyyy hh:mm
        const formattedDate = expireDateObj.toLocaleString('vi-VN', {
            year: 'numeric', month: '2-digit', day: '2-digit',
            hour: '2-digit', minute: '2-digit'
        });

        if (expireDateObj < now) {
            // Đã hết hạn
            statusEl.innerHTML = `
                Học viên đăng ký
                <small style="color:yellow; font-weight:normal;">
                    Tài khoản của bạn đã hết hạn! 
                    <a href="/gia-han" style="color:lime; text-decoration:underline; margin-left:5px;">
                        Gia hạn thêm
                    </a>
                </small>
            `;
        } else {
            // Còn hạn
            statusEl.innerHTML = `
                Học viên chính thức
                <small>Ngày hết hạn: ${formattedDate}</small>
            `;
        }
    }
}

// 4. Hàm xử lý đăng xuất
async function handleLogout(e) {
    e.preventDefault();
    try {
        await fetch('/logout', { method: 'GET' });
        // Hiệu ứng chờ một chút cho chuyên nghiệp
        document.body.style.opacity = "0.5";
        setTimeout(() => {
            window.location.href = '/';
        }, 1000);
    } catch (err) {
        console.error("Lỗi đăng xuất:", err);
        window.location.href = '/';
    }
}