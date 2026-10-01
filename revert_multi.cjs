const fs = require('fs');

const backgroundHTML = `
    <!-- HIỆU ỨNG NỀN MA MỊ -->
    <div class="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div class="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-screen"></div>
        <div class="absolute inset-0 opacity-20 mix-blend-screen bg-[url('https://images.unsplash.com/photo-1509803874385-db7c23652552?q=80&w=1200')] bg-[length:1200px_auto] animate-[fog_60s_linear_infinite]"></div>
        <div class="absolute inset-0 opacity-15 mix-blend-screen bg-[url('https://images.unsplash.com/photo-1485236715568-ddc5ee6ca227?q=80&w=1200')] bg-[length:1200px_auto] animate-[fog_40s_linear_infinite_reverse]"></div>
        <div class="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blood/20 blur-[130px] mix-blend-screen animate-[blob_15s_infinite]"></div>
        <div class="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full bg-purple-900/20 blur-[150px] mix-blend-screen animate-[blob_20s_infinite_reverse]"></div>
        <div class="absolute top-[30%] left-[50%] w-[50%] h-[50%] rounded-full bg-red-900/10 blur-[120px] mix-blend-screen animate-[blob_18s_infinite]"></div>
    </div>
`;

const getNavbar = (active) => `
    <!-- NAVBAR -->
    <nav class="fixed w-full z-50 glass-nav transition-all duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-20">
                <a href="index.html" class="flex-shrink-0 flex items-center gap-3 cursor-pointer">
                    <img src="assets/img/logo-crest.png" alt="Logo Ma Sói" class="w-12 h-12 rounded-full border border-gray-700 shadow-[0_0_10px_rgba(220,38,38,0.5)]">
                    <span class="font-bold text-[24px] tracking-wider text-white hidden sm:block">MA SÓI<span class="text-blood">.</span></span>
                </a>
                <div class="hidden lg:block">
                    <div class="ml-10 flex items-baseline space-x-6">
                        <a href="index.html" class="${active === 'index' ? 'text-blood' : 'text-gray-300'} hover:text-red-500 px-2 py-2 rounded-md text-[14px] font-bold uppercase tracking-wider transition">Trang Chủ</a>
                        <a href="rules.html" class="${active === 'rules' ? 'text-blood' : 'text-gray-300'} hover:text-red-500 px-2 py-2 rounded-md text-[14px] font-bold uppercase tracking-wider transition">Luật Chơi</a>
                        <a href="characters.html" class="${active === 'characters' ? 'text-blood' : 'text-gray-300'} hover:text-red-500 px-2 py-2 rounded-md text-[14px] font-bold uppercase tracking-wider transition">Nhân Vật</a>
                        <a href="team.html" class="${active === 'team' ? 'text-blood' : 'text-gray-300'} hover:text-red-500 px-2 py-2 rounded-md text-[14px] font-bold uppercase tracking-wider transition">Đội Ngũ</a>
                    </div>
                </div>
                <div>
                    <a href="https://werewolf-cardless.vercel.app/" target="_blank" class="border border-blood/50 bg-black/50 hover:bg-blood text-white px-6 py-2 rounded-sm font-roboto font-bold tracking-widest transition duration-300">
                        VÀO LÀNG
                    </a>
                </div>
            </div>
        </div>
    </nav>
`;

const footerHTML = `
    <!-- FOOTER -->
    <footer class="bg-black py-8 border-t border-gray-900/50 relative z-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div class="flex items-center gap-3">
                <img src="assets/img/logo-crest.png" alt="Logo Ma Sói" class="w-10 h-10 rounded-full border border-gray-700 shadow-[0_0_10px_rgba(220,38,38,0.5)]">
                <span class="font-black text-[20px] tracking-wider text-white">MA SÓI<span class="text-blood">.</span></span>
            </div>
            <div class="text-gray-500 text-[14px]">Copyright © EDN Co.,Ltd. All Rights Reserved.</div>
            <div class="flex gap-4">
                <a href="#" class="text-gray-400 hover:text-white transition duration-300"><i class="fa-brands fa-facebook-f text-[20px]"></i></a>
                <a href="#" class="text-gray-400 hover:text-white transition duration-300"><i class="fa-brands fa-discord text-[20px]"></i></a>
                <a href="#" class="text-gray-400 hover:text-white transition duration-300"><i class="fa-brands fa-youtube text-[20px]"></i></a>
            </div>
        </div>
    </footer>
`;

const headTemplate = (title) => `<!DOCTYPE html>
<html lang="vi" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} | EDN Co.</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="/src/style.css">
</head>
<body class="font-roboto antialiased selection:bg-blood selection:text-white bg-[#030305]">
`;

const endTemplate = `
</body>
</html>
`;

// INDEX.HTML
const indexContent = `
    ${backgroundHTML}
    ${getNavbar('index')}
    <!-- TRANG CHỦ (HERO) -->
    <header id="trang-chu" class="pt-32 pb-20 relative min-h-[90vh] flex items-center">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
                <div class="lg:w-1/2 text-left">
                    <p class="text-blood font-bold tracking-[0.2em] mb-4 text-[14px] uppercase">Trải nghiệm Boardgame đỉnh cao</p>
                    <h1 class="text-[48px] md:text-[72px] font-black text-white mb-6 leading-tight tracking-widest uppercase">
                        Cuộc Đấu Trí<br/>Giữa <span class="text-blood drop-shadow-[0_0_15px_rgba(220,38,38,0.8)]">Làng</span>
                    </h1>
                    <p class="text-gray-300 mb-8 text-[18px] md:text-[20px] max-w-lg leading-relaxed">
                        Không cần bài vật lý, không cần quản trò chuyên nghiệp. Chỉ cần điện thoại, một nhóm bạn, và sự tin tưởng giữa đêm tối.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4">
                        <a href="https://werewolf-cardless.vercel.app/" target="_blank" class="bg-blood hover:bg-red-700 text-white font-bold py-4 px-8 rounded-sm text-center transition duration-300 uppercase tracking-widest shadow-[0_0_20px_rgba(220,38,38,0.4)]">
                            Tạo Phòng Ngay
                        </a>
                        <a href="rules.html" class="border border-gray-600 hover:border-white text-white font-bold py-4 px-8 rounded-sm text-center transition duration-300 uppercase tracking-widest bg-black/40 backdrop-blur-sm">
                            Xem Luật Chơi
                        </a>
                    </div>
                </div>
                
                <div class="lg:w-1/2 relative">
                    <div class="absolute inset-0 bg-blood/20 blur-[100px] rounded-full"></div>
                    <div class="relative bg-black/60 backdrop-blur-md border border-gray-800 rounded-2xl p-6 shadow-2xl blood-border transform rotate-2 hover:rotate-0 transition duration-500">
                        <div class="flex items-center justify-between border-b border-gray-800 pb-4 mb-4">
                            <span class="text-red-500 text-[12px] font-bold tracking-widest uppercase">Đêm Thứ 1</span>
                            <span class="text-gray-400 text-[12px] flex items-center gap-2"><div class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div> Sói đang tỉnh</span>
                        </div>
                        <div class="bg-gray-900/80 rounded-lg p-4 mb-4 border border-gray-800">
                            <p class="text-gray-400 text-[12px] mb-1 uppercase tracking-wider">Vai Trò Của Bạn</p>
                            <h3 class="text-[24px] font-bold text-white uppercase">Tiên Tri</h3>
                        </div>
                        <div class="bg-gray-900/80 rounded-lg p-4 border border-gray-800">
                            <p class="text-gray-400 text-[12px] mb-1 uppercase tracking-wider">Nhiệm Vụ</p>
                            <p class="text-[14px] text-gray-300 leading-relaxed">Soi danh tính 1 người, giữ bí mật và dẫn dắt làng về phía đúng.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <!-- TÍNH NĂNG -->
    <section class="py-20 bg-transparent border-t border-gray-900/50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="text-center mb-16">
                <h2 class="text-[14px] font-bold text-blood tracking-[0.3em] uppercase mb-3">Tính Năng Cốt Lõi</h2>
                <h3 class="text-[28px] md:text-[48px] font-black text-white uppercase tracking-wider">Cuộc Cách Mạng <span class="text-blood">Ma Sói</span></h3>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="relative group cursor-pointer">
                    <div class="absolute -inset-0.5 bg-gradient-to-b from-blood to-black rounded-2xl blur opacity-0 group-hover:opacity-40 transition duration-700"></div>
                    <div class="relative bg-[#0a0a0f] border border-gray-800/80 rounded-2xl h-full flex flex-col items-center text-center transform transition-all duration-500 group-hover:-translate-y-3 overflow-hidden shadow-2xl">
                        <div class="h-48 w-full relative overflow-hidden">
                            <img src="assets/img/feature_1_phone.jpg" alt="Điện Thoại Là Lá Bài" class="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition duration-700 group-hover:scale-110 filter contrast-125">
                            <div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent"></div>
                        </div>
                        <div class="p-8 pt-4">
                            <div class="w-12 h-12 rounded-full bg-blood/10 flex items-center justify-center mx-auto mb-4 border border-blood/30 group-hover:bg-blood/20 transition">
                                <i class="fa-solid fa-mobile-screen-button text-blood text-[20px]"></i>
                            </div>
                            <h4 class="text-[20px] font-bold text-white mb-3 uppercase tracking-wider">Điện Thoại Là Lá Bài</h4>
                            <p class="text-gray-400 text-[14px] leading-relaxed">Mỗi người chơi thao tác trực tiếp trên màn hình, xem vai, chọn mục tiêu và vote theo nhịp của trận đấu.</p>
                        </div>
                    </div>
                </div>
                <div class="relative group cursor-pointer">
                    <div class="absolute -inset-0.5 bg-gradient-to-b from-blood to-black rounded-2xl blur opacity-0 group-hover:opacity-40 transition duration-700"></div>
                    <div class="relative bg-[#0a0a0f] border border-gray-800/80 rounded-2xl h-full flex flex-col items-center text-center transform transition-all duration-500 group-hover:-translate-y-3 overflow-hidden shadow-2xl">
                        <div class="h-48 w-full relative overflow-hidden">
                            <img src="assets/img/feature_2_forest.jpg" alt="Trải Nghiệm Điện Ảnh" class="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition duration-700 group-hover:scale-110 filter contrast-125">
                            <div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent"></div>
                        </div>
                        <div class="p-8 pt-4">
                            <div class="w-12 h-12 rounded-full bg-blood/10 flex items-center justify-center mx-auto mb-4 border border-blood/30 group-hover:bg-blood/20 transition">
                                <i class="fa-solid fa-film text-blood text-[20px]"></i>
                            </div>
                            <h4 class="text-[20px] font-bold text-white mb-3 uppercase tracking-wider">Trải Nghiệm Điện Ảnh</h4>
                            <p class="text-gray-400 text-[14px] leading-relaxed">Giao diện dark fantasy, sương mù chuyển động, hiệu ứng chuyển cảnh và nhịp hành động như phim Hollywood.</p>
                        </div>
                    </div>
                </div>
                <div class="relative group cursor-pointer">
                    <div class="absolute -inset-0.5 bg-gradient-to-b from-blood to-black rounded-2xl blur opacity-0 group-hover:opacity-40 transition duration-700"></div>
                    <div class="relative bg-[#0a0a0f] border border-gray-800/80 rounded-2xl h-full flex flex-col items-center text-center transform transition-all duration-500 group-hover:-translate-y-3 overflow-hidden shadow-2xl">
                        <div class="h-48 w-full relative overflow-hidden">
                            <img src="assets/img/feature_3_master.jpg" alt="Tự Động Quản Trò" class="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition duration-700 group-hover:scale-110 filter contrast-125">
                            <div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent"></div>
                        </div>
                        <div class="p-8 pt-4">
                            <div class="w-12 h-12 rounded-full bg-blood/10 flex items-center justify-center mx-auto mb-4 border border-blood/30 group-hover:bg-blood/20 transition">
                                <i class="fa-solid fa-robot text-blood text-[20px]"></i>
                            </div>
                            <h4 class="text-[20px] font-bold text-white mb-3 uppercase tracking-wider">Trợ Lý Quản Trò</h4>
                            <p class="text-gray-400 text-[14px] leading-relaxed">Hệ thống ghi nhận hành động, tính toán logic và hỗ trợ quản trò để không mất thời gian xử lý sai sót.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- KẾT NỐI CỘNG ĐỒNG -->
    <section class="py-20 bg-black/40 border-t border-gray-900/50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
                <div class="lg:w-1/2 text-left order-2 lg:order-1">
                    <p class="text-blue-500 font-bold tracking-[0.2em] mb-4 text-[14px] uppercase">Độc Quyền JChat</p>
                    <h1 class="text-[36px] md:text-[48px] font-black text-white mb-6 leading-tight tracking-widest uppercase">
                        Kết Nối <span class="text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]">Cộng Đồng</span>
                    </h1>
                    <p class="text-gray-300 mb-8 text-[18px] max-w-lg leading-relaxed">
                        Không cần tạo tài khoản rườm rà. Chỉ cần đăng nhập qua Jchat, tạo phòng và mời bạn bè tham gia ván bài ma sói cực kỳ nhanh chóng.
                    </p>
                    <ul class="text-gray-400 space-y-4 mb-8">
                        <li class="flex items-center gap-3"><i class="fa-solid fa-check text-green-500"></i> Đăng nhập SSO Jchat nhanh chóng</li>
                        <li class="flex items-center gap-3"><i class="fa-solid fa-check text-green-500"></i> Mời bạn bè chỉ bằng một link</li>
                        <li class="flex items-center gap-3"><i class="fa-solid fa-check text-green-500"></i> Lưu lịch sử trận đấu và xếp hạng</li>
                    </ul>
                </div>
                <div class="lg:w-1/2 relative order-1 lg:order-2 w-full">
                    <div class="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full"></div>
                    <div class="relative bg-black/60 backdrop-blur-md border border-gray-800 rounded-2xl p-6 shadow-2xl border-l-[4px] border-l-blue-500 transform -rotate-2 hover:rotate-0 transition duration-500">
                        <div class="flex items-center justify-between border-b border-gray-800 pb-4 mb-4">
                            <span class="text-red-500 text-[12px] font-bold tracking-widest uppercase">Đêm Thứ 1</span>
                        </div>
                        <h3 class="text-[24px] font-bold text-white uppercase mb-4">Sói Ơi, Dậy Đi</h3>
                        <div class="space-y-3">
                            <div class="bg-gray-900/80 rounded-lg p-3 border border-gray-800 flex justify-between">
                                <span class="text-gray-300">Phù Thủy</span><span class="text-green-500 text-[14px]">Còn 1 bình</span>
                            </div>
                            <div class="bg-gray-900/80 rounded-lg p-3 border border-gray-800 flex justify-between">
                                <span class="text-gray-300">Tiên Tri</span><span class="text-blue-500 text-[14px]">Đang soi</span>
                            </div>
                            <div class="bg-gray-900/80 rounded-lg p-3 border border-gray-800 flex justify-between">
                                <span class="text-gray-300">Ma Sói</span><span class="text-red-500 text-[14px]">Cố gắng lừa dối</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- REVIEWS -->
    <section class="py-20 bg-transparent border-t border-gray-900/50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="text-center mb-16">
                <h2 class="text-[14px] font-bold text-red-500 tracking-[0.3em] uppercase mb-3">Cộng Đồng Lên Tiếng</h2>
                <h3 class="text-[28px] md:text-[36px] font-black text-white uppercase tracking-wider">Mỗi Ván Thi Đấu <span class="text-red-500">Rất Khó Quên</span></h3>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 hover:border-red-500/50 transition">
                    <p class="text-gray-400 italic mb-4">"Từ ngày có app này, nhóm mình không cần mang bài rườm rà nữa. Quản trò tự động đọc tên siêu nhanh và rất tiện."</p>
                </div>
                <div class="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 hover:border-red-500/50 transition">
                    <p class="text-gray-400 italic mb-4">"Giao diện dark fantasy nhìn như phim. Phần âm thanh và điều khiển ban đêm làm mình thấy như đang ở trong một bộ phim kinh dị."</p>
                </div>
                <div class="bg-[#0a0a0f] border border-gray-800 rounded-xl p-6 hover:border-red-500/50 transition">
                    <p class="text-gray-400 italic mb-4">"SSO Jchat mượt mà, mời bạn bè chỉ bằng link. Điều quan trọng nhất là không ai phải ngồi đếm phiếu thủ công nữa."</p>
                </div>
            </div>
        </div>
    </section>
    ${footerHTML}
`;
fs.writeFileSync('index.html', headTemplate('Trang Chủ') + indexContent + endTemplate, 'utf8');

// RULES.HTML
const rulesContent = `
    ${backgroundHTML}
    ${getNavbar('rules')}
    <main class="mx-auto max-w-6xl px-4 pb-20 pt-32 min-h-screen relative z-10">
        <section class="mb-12 text-center">
            <p class="text-[14px] font-bold uppercase tracking-[0.35em] text-red-500">Cẩm Nang Sinh Tồn</p>
            <h1 class="mt-4 text-[36px] font-black uppercase text-white md:text-[48px]">Luật Chơi <span class="text-red-500">Ma Sói</span></h1>
            <p class="mx-auto mt-6 max-w-2xl text-[18px] text-gray-300">Hiểu rõ vòng đêm, vòng ngày và quy trình vote để không bị treo cổ oan uổng.</p>
        </section>

        <section class="grid gap-8 md:grid-cols-5">
            <div class="rounded-xl border border-gray-800 bg-white/5 p-6 md:col-span-2 hover:border-blood/50 transition">
                <h2 class="mb-4 text-[24px] font-black uppercase text-white">1. Bắt Đầu Trò Chơi</h2>
                <p class="text-gray-300">Mỗi người chơi nhận vai trò bí mật. Một số người là dân làng, một số là sói, và một số bản năng được phong cho vai đặc biệt. Không ai biết ai là ai trừ chính mình.</p>
            </div>
            <div class="rounded-xl border border-gray-800 bg-white/5 p-6 md:col-span-3 hover:border-blood/50 transition">
                <h2 class="mb-4 text-[24px] font-black uppercase text-white">2. Đêm Đầu Tiên</h2>
                <p class="text-gray-300">Khi đêm xuống, vai trò đặc biệt lần lượt thức dậy để thực hiện hành động của mình: soi, bảo vệ, giết, cứu người, hoặc dùng kỹ năng cá nhân.</p>
            </div>
            <div class="rounded-xl border border-gray-800 bg-white/5 p-6 md:col-span-3 hover:border-blood/50 transition">
                <h2 class="mb-4 text-[24px] font-black uppercase text-white">3. Bình Minh Thức Giấc</h2>
                <p class="text-gray-300">Hệ thống thông báo người chết trong đêm. Những người còn sống sẽ bắt đầu tranh luận, suy đoán và tìm ra kẻ giả vờ là người tốt.</p>
            </div>
            <div class="rounded-xl border border-gray-800 bg-white/5 p-6 md:col-span-2 hover:border-blood/50 transition">
                <h2 class="mb-4 text-[24px] font-black uppercase text-white">4. Biểu Quyết Treo Cổ</h2>
                <p class="text-gray-300">Cuối một vòng nghị luận, cả làng cùng vote. Người nhận nhiều phiếu nhất sẽ bị treo cổ, nếu hòa phiếu thì không ai chết.</p>
            </div>
            <div class="rounded-xl border border-gray-800 bg-white/5 p-6 md:col-span-5 hover:border-blood/50 transition">
                <h2 class="mb-4 text-[24px] font-black uppercase text-white">5. Vòng Lặp Và Kết Thúc</h2>
                <p class="text-gray-300">Trò chơi kết thúc khi số lượng sói bằng hoặc vượt trên số dân làng, hoặc khi tất cả sói bị tiêu diệt. Người nào giành chiến thắng cuối cùng sẽ được tuyên bố toàn thắng.</p>
            </div>
        </section>

        <section class="mt-16 rounded-2xl border border-red-500/30 bg-white/5 p-8">
            <h2 class="mb-6 text-[28px] font-black uppercase text-white">Nguyên Tắc Chơi</h2>
            <div class="grid gap-6 md:grid-cols-3">
                <div class="rounded-xl border border-gray-800 bg-black/20 p-5">
                    <h3 class="mb-2 text-[20px] font-bold uppercase text-white">Giữ Bí Mật</h3>
                    <p class="text-gray-300">Không lộ vai trò của mình nếu không thật sự cần thiết. Tuyệt đối không nói thừa trong lúc đêm bắt đầu.</p>
                </div>
                <div class="rounded-xl border border-gray-800 bg-black/20 p-5">
                    <h3 class="mb-2 text-[20px] font-bold uppercase text-white">Phán Đoán Cẩn Thận</h3>
                    <p class="text-gray-300">Mọi lời nói đều có thể là giả vờ. Hãy quan sát hành vi của người khác trước khi lên tiếng kết luận.</p>
                </div>
                <div class="rounded-xl border border-gray-800 bg-black/20 p-5">
                    <h3 class="mb-2 text-[20px] font-bold uppercase text-white">Vừa Chơi Vừa Hài Hước</h3>
                    <p class="text-gray-300">Ma Sói chính là trò chơi tâm lý, nên sự bất ngờ và sự đáng yêu của các câu nói đều là phần của ván cờ.</p>
                </div>
            </div>
        </section>
    </main>
    ${footerHTML}
`;
fs.writeFileSync('rules.html', headTemplate('Luật Chơi') + rulesContent + endTemplate, 'utf8');

// TEAM.HTML
const teamContent = `
    ${backgroundHTML}
    ${getNavbar('team')}
    <main class="mx-auto max-w-7xl px-4 pb-20 pt-32 min-h-screen relative z-10">
        <section class="mb-16 text-center">
            <p class="text-[14px] font-bold uppercase tracking-[0.35em] text-red-500">Những Con Người Đứng Sau</p>
            <h1 class="mt-4 text-[36px] font-black uppercase text-white md:text-[48px]">Đội Ngũ <span class="text-red-500">Phát Triển</span></h1>
            <p class="mx-auto mt-6 max-w-2xl text-[18px] text-gray-300">Mỗi người trong đội ngũ mang đến một góc nhìn khác nhau để biến trò chơi thành trải nghiệm sống động và đáng nhớ.</p>
        </section>

        <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            <div class="bg-[#0a0a0f] border border-gray-800 rounded-2xl p-6 text-center transform hover:-translate-y-2 transition duration-300 shadow-xl group">
                <div class="w-24 h-24 mx-auto rounded-full overflow-hidden mb-6 border-2 border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.3)]">
                    <img src="assets/img/thanh-duong.png" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500">
                </div>
                <h3 class="text-[20px] font-bold text-white uppercase mb-2">Nguyễn Thanh Dương</h3>
                <p class="text-[12px] text-red-500 font-bold uppercase tracking-widest mb-4">PM & Thiết Kế Game</p>
                <p class="text-[14px] text-gray-400">Xây dựng luật chơi, cân bằng hệ thống, và giữ nhịp cảm xúc cho từng ván đấu.</p>
            </div>
            <div class="bg-[#0a0a0f] border border-gray-800 rounded-2xl p-6 text-center transform hover:-translate-y-2 transition duration-300 shadow-xl group">
                <div class="w-24 h-24 mx-auto rounded-full bg-blue-900/20 flex items-center justify-center mb-6 border-2 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                    <i class="fa-solid fa-code text-blue-500 text-3xl"></i>
                </div>
                <h3 class="text-[20px] font-bold text-white uppercase mb-2">Lê Thành Đạo</h3>
                <p class="text-[12px] text-blue-500 font-bold uppercase tracking-widest mb-4">Lập Trình Viên</p>
                <p class="text-[14px] text-gray-400">Chuyển ý tưởng thành phòng chơi, tính toán logic và đảm bảo trận đấu mượt mà.</p>
            </div>
            <div class="bg-[#0a0a0f] border border-gray-800 rounded-2xl p-6 text-center transform hover:-translate-y-2 transition duration-300 shadow-xl group">
                <div class="w-24 h-24 mx-auto rounded-full overflow-hidden mb-6 border-2 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                    <img src="assets/img/minh-khoa.jpg" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500">
                </div>
                <h3 class="text-[20px] font-bold text-white uppercase mb-2">Lê Minh Khoa</h3>
                <p class="text-[12px] text-purple-500 font-bold uppercase tracking-widest mb-4">Thiết Kế UI/UX</p>
                <p class="text-[14px] text-gray-400">Tạo ra giao diện tối, lôi cuốn và dễ đọc cho cả người chơi lẫn người quản trò.</p>
            </div>
            <div class="bg-[#0a0a0f] border border-gray-800 rounded-2xl p-6 text-center transform hover:-translate-y-2 transition duration-300 shadow-xl group">
                <div class="w-24 h-24 mx-auto rounded-full overflow-hidden mb-6 border-2 border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                    <img src="assets/img/lam-dam.png" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500">
                </div>
                <h3 class="text-[20px] font-bold text-white uppercase mb-2">Lâm Đàm</h3>
                <p class="text-[12px] text-green-500 font-bold uppercase tracking-widest mb-4">Chuyên Viên QA/QC</p>
                <p class="text-[14px] text-gray-400">Kiểm tra lỗi, tối ưu trải nghiệm và đảm bảo mật độ chất lượng của từng ván trò chơi.</p>
            </div>
        </section>
        
        <!-- CUỐN PHIM CHẾ TÁC TRÊN TRANG ĐỘI NGŨ -->
        <section id="credits" class="py-10 bg-[#020202] relative overflow-hidden border border-gray-900/80 rounded-2xl">
            <div class="absolute left-2 md:left-10 top-0 bottom-0 w-8 flex flex-col justify-around opacity-30">
                <div class="w-4 h-6 bg-white/20 rounded-sm mb-4"></div><div class="w-4 h-6 bg-white/20 rounded-sm mb-4"></div><div class="w-4 h-6 bg-white/20 rounded-sm mb-4"></div><div class="w-4 h-6 bg-white/20 rounded-sm mb-4"></div><div class="w-4 h-6 bg-white/20 rounded-sm mb-4"></div><div class="w-4 h-6 bg-white/20 rounded-sm mb-4"></div><div class="w-4 h-6 bg-white/20 rounded-sm mb-4"></div><div class="w-4 h-6 bg-white/20 rounded-sm mb-4"></div><div class="w-4 h-6 bg-white/20 rounded-sm mb-4"></div><div class="w-4 h-6 bg-white/20 rounded-sm mb-4"></div>
            </div>
            <div class="absolute right-2 md:right-10 top-0 bottom-0 w-8 flex flex-col justify-around opacity-30 items-end">
                <div class="w-4 h-6 bg-white/20 rounded-sm mb-4"></div><div class="w-4 h-6 bg-white/20 rounded-sm mb-4"></div><div class="w-4 h-6 bg-white/20 rounded-sm mb-4"></div><div class="w-4 h-6 bg-white/20 rounded-sm mb-4"></div><div class="w-4 h-6 bg-white/20 rounded-sm mb-4"></div><div class="w-4 h-6 bg-white/20 rounded-sm mb-4"></div><div class="w-4 h-6 bg-white/20 rounded-sm mb-4"></div><div class="w-4 h-6 bg-white/20 rounded-sm mb-4"></div><div class="w-4 h-6 bg-white/20 rounded-sm mb-4"></div><div class="w-4 h-6 bg-white/20 rounded-sm mb-4"></div>
            </div>
            
            <div class="max-w-2xl mx-auto px-4 relative z-10 h-[50vh] overflow-hidden flex flex-col justify-end">
                <div class="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#020202] to-transparent z-20 pointer-events-none"></div>
                <div class="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#020202] to-transparent z-20 pointer-events-none"></div>
                
                <div class="animate-[credit-roll_25s_linear_infinite] text-center w-full absolute">
                    <img src="assets/img/logo-crest.png" alt="Logo" class="w-20 h-20 mx-auto mb-6 rounded-full border border-gray-700 opacity-80">
                    <h3 class="text-[28px] font-black text-white uppercase tracking-[0.3em] mb-20 drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]">Cuốn Phim Chế Tác</h3>
                    <div class="space-y-16">
                        <div>
                            <h4 class="text-[24px] text-white font-black uppercase">Nguyễn Thanh Dương</h4>
                            <p class="text-gray-500 mt-2 text-[14px] italic max-w-sm mx-auto">"Người thổi hồn vào từng ván cờ sinh tử."</p>
                        </div>
                        <div>
                            <h4 class="text-[24px] text-white font-black uppercase">Lê Thành Đạo</h4>
                            <p class="text-gray-500 mt-2 text-[14px] italic max-w-sm mx-auto">"Kiến trúc sư của bóng tối và logic."</p>
                        </div>
                        <div>
                            <h4 class="text-[24px] text-white font-black uppercase">Lê Minh Khoa</h4>
                            <p class="text-gray-500 mt-2 text-[14px] italic max-w-sm mx-auto">"Kẻ gieo rắc sự ám ảnh qua từng điểm ảnh."</p>
                        </div>
                        <div>
                            <h4 class="text-[24px] text-white font-black uppercase">Lâm Đàm</h4>
                            <p class="text-gray-500 mt-2 text-[14px] italic max-w-sm mx-auto">"Kẻ gác cổng bảo vệ sự công bằng cho Làng."</p>
                        </div>
                    </div>
                    <div class="mt-24 mb-[150vh]">
                        <p class="text-gray-600 text-[12px] uppercase tracking-[0.5em]">Một sản phẩm của EDN Co.</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
    ${footerHTML}
`;
fs.writeFileSync('team.html', headTemplate('Đội Ngũ') + teamContent + endTemplate, 'utf8');

// CHARACTERS.HTML
const charsContent = `
    ${backgroundHTML}
    ${getNavbar('characters')}
    <main class="mx-auto max-w-7xl px-4 pb-20 pt-32 min-h-screen relative z-10">
        <div class="text-center mb-12">
            <h1 class="text-[36px] md:text-[48px] font-black text-white uppercase tracking-wider">Các Vai Nhân Vật</h1>
            <p class="text-gray-400 max-w-2xl mx-auto text-[18px] leading-relaxed mt-4">
                Khám phá những kỹ năng bí ẩn và các phe phái trong cuộc chiến sinh tử tại ngôi làng Millers Hollow.
            </p>
        </div>

        <div class="flex flex-wrap justify-center gap-4 mb-16" id="filters">
            <button class="filter-btn active bg-blood text-white border-blood px-6 py-2 border rounded-full text-[14px] font-bold uppercase tracking-wider transition" data-filter="all">Tất Cả</button>
            <button class="filter-btn text-gray-300 px-6 py-2 border border-gray-700 rounded-full text-[14px] font-bold uppercase tracking-wider hover:border-blue-500 hover:text-blue-500 transition" data-filter="phe-dan">Phe Dân Làng</button>
            <button class="filter-btn text-gray-300 px-6 py-2 border border-gray-700 rounded-full text-[14px] font-bold uppercase tracking-wider hover:border-blood hover:text-blood transition" data-filter="phe-soi">Phe Sói</button>
            <button class="filter-btn text-gray-300 px-6 py-2 border border-gray-700 rounded-full text-[14px] font-bold uppercase tracking-wider hover:border-purple-500 hover:text-purple-500 transition" data-filter="phe-thu-3">Phe Thứ 3</button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" id="character-grid">
            <!-- Sói Pháp Sư -->
            <div class="character-card phe-soi perspective-1000 w-full h-[400px] cursor-pointer group" onclick="openCharacterModal('Sói Pháp Sư', 'The Werewolf Shaman', 'assets/img/wolf_shaman.jpg', 'Mỗi đêm cùng bầy sói cắn 1 người. Ngoài ra có thể dùng phép thuật để chặn kỹ năng của 1 người chơi khác.', 'Phe Sói', 'text-blood', 'border-blood')">
                <div class="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180 shadow-[0_10px_30px_rgba(0,0,0,0.8)] rounded-xl">
                    <div class="absolute inset-0 backface-hidden rounded-xl overflow-hidden border-2 border-[#b59045]/50 shadow-xl bg-black">
                        <img src="assets/img/card_back.jpg" class="w-full h-full object-cover filter brightness-[0.85] contrast-[1.1]">
                    </div>
                    <div class="absolute inset-0 backface-hidden rotate-y-180 bg-[#050508] rounded-xl overflow-hidden border border-blood shadow-[0_0_15px_rgba(220,38,38,0.3)]">
                        <div class="absolute top-4 right-4 bg-black/80 text-blood font-bold px-3 py-1 rounded text-[12px] border border-blood z-10 uppercase shadow-lg">Phe Sói</div>
                        <div class="h-3/4 relative overflow-hidden">
                            <img src="assets/img/wolf_shaman.jpg" alt="Sói Pháp Sư" class="object-cover w-full h-full opacity-90">
                            <div class="absolute inset-0 bg-gradient-to-t from-[#050508] to-transparent"></div>
                        </div>
                        <div class="h-1/4 p-4 relative z-20 flex flex-col justify-center items-center text-center bg-[#050508]">
                            <h3 class="text-[20px] font-black text-white mb-1 drop-shadow-md uppercase tracking-wider">Sói Pháp Sư</h3>
                            <p class="text-[12px] text-red-500 uppercase tracking-widest font-bold">The Werewolf Shaman</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Tiên Tri -->
            <div class="character-card phe-dan perspective-1000 w-full h-[400px] cursor-pointer group" onclick="openCharacterModal('Tiên Tri', 'The Seer', 'assets/img/seer.jpg', 'Mỗi đêm được quyền chỉ định 1 người chơi để soi xem người đó là Sói hay không phải Sói.', 'Phe Dân', 'text-blue-400', 'border-blue-400')">
                <div class="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180 shadow-[0_10px_30px_rgba(0,0,0,0.8)] rounded-xl">
                    <div class="absolute inset-0 backface-hidden rounded-xl overflow-hidden border-2 border-[#b59045]/50 shadow-xl bg-black">
                        <img src="assets/img/card_back.jpg" class="w-full h-full object-cover filter brightness-[0.85] contrast-[1.1]">
                    </div>
                    <div class="absolute inset-0 backface-hidden rotate-y-180 bg-[#050508] rounded-xl overflow-hidden border border-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.2)]">
                        <div class="absolute top-4 right-4 bg-black/80 text-blue-400 font-bold px-3 py-1 rounded text-[12px] border border-blue-400 z-10 uppercase shadow-lg">Phe Dân</div>
                        <div class="h-3/4 relative overflow-hidden">
                            <img src="assets/img/seer.jpg" alt="Tiên Tri" class="object-cover w-full h-full opacity-90">
                            <div class="absolute inset-0 bg-gradient-to-t from-[#050508] to-transparent"></div>
                        </div>
                        <div class="h-1/4 p-4 relative z-20 flex flex-col justify-center items-center text-center bg-[#050508]">
                            <h3 class="text-[20px] font-black text-white mb-1 drop-shadow-md uppercase tracking-wider">Tiên Tri</h3>
                            <p class="text-[12px] text-blue-400 uppercase tracking-widest font-bold">The Seer</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Phù Thủy -->
            <div class="character-card phe-dan perspective-1000 w-full h-[400px] cursor-pointer group" onclick="openCharacterModal('Phù Thủy', 'The Witch', 'assets/img/witch.jpg', 'Sở hữu 2 bình thuốc: 1 bình cứu sống người bị sói cắn, 1 bình độc để giết 1 người trong đêm. Mỗi bình dùng 1 lần.', 'Phe Dân', 'text-blue-400', 'border-blue-400')">
                <div class="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180 shadow-[0_10px_30px_rgba(0,0,0,0.8)] rounded-xl">
                    <div class="absolute inset-0 backface-hidden rounded-xl overflow-hidden border-2 border-[#b59045]/50 shadow-xl bg-black">
                        <img src="assets/img/card_back.jpg" class="w-full h-full object-cover filter brightness-[0.85] contrast-[1.1]">
                    </div>
                    <div class="absolute inset-0 backface-hidden rotate-y-180 bg-[#050508] rounded-xl overflow-hidden border border-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.2)]">
                        <div class="absolute top-4 right-4 bg-black/80 text-blue-400 font-bold px-3 py-1 rounded text-[12px] border border-blue-400 z-10 uppercase shadow-lg">Phe Dân</div>
                        <div class="h-3/4 relative overflow-hidden">
                            <img src="assets/img/witch.jpg" class="object-cover w-full h-full opacity-90">
                            <div class="absolute inset-0 bg-gradient-to-t from-[#050508] to-transparent"></div>
                        </div>
                        <div class="h-1/4 p-4 relative z-20 flex flex-col justify-center items-center text-center bg-[#050508]">
                            <h3 class="text-[20px] font-black text-white mb-1 uppercase tracking-wider">Phù Thủy</h3>
                            <p class="text-[12px] text-blue-400 uppercase tracking-widest font-bold">The Witch</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Kẻ Ngốc -->
            <div class="character-card phe-dan perspective-1000 w-full h-[400px] cursor-pointer group" onclick="openCharacterModal('Kẻ Ngốc', 'The Fool', 'assets/img/fool.jpg', 'Nếu bị dân làng vote treo cổ vào ban ngày, thân phận sẽ được lật mở và Kẻ Ngốc không bị chết (nhưng mất quyền vote).', 'Phe Dân', 'text-blue-400', 'border-blue-400')">
                <div class="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180 shadow-[0_10px_30px_rgba(0,0,0,0.8)] rounded-xl">
                    <div class="absolute inset-0 backface-hidden rounded-xl overflow-hidden border-2 border-[#b59045]/50 shadow-xl bg-black">
                        <img src="assets/img/card_back.jpg" class="w-full h-full object-cover filter brightness-[0.85] contrast-[1.1]">
                    </div>
                    <div class="absolute inset-0 backface-hidden rotate-y-180 bg-[#050508] rounded-xl overflow-hidden border border-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.2)]">
                        <div class="absolute top-4 right-4 bg-black/80 text-blue-400 font-bold px-3 py-1 rounded text-[12px] border border-blue-400 z-10 uppercase shadow-lg">Phe Dân</div>
                        <div class="h-3/4 relative overflow-hidden">
                            <img src="assets/img/fool.jpg" class="object-cover w-full h-full opacity-90">
                            <div class="absolute inset-0 bg-gradient-to-t from-[#050508] to-transparent"></div>
                        </div>
                        <div class="h-1/4 p-4 relative z-20 flex flex-col justify-center items-center text-center bg-[#050508]">
                            <h3 class="text-[20px] font-black text-white mb-1 uppercase tracking-wider">Kẻ Ngốc</h3>
                            <p class="text-[12px] text-blue-400 uppercase tracking-widest font-bold">The Fool</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Thợ Săn -->
            <div class="character-card phe-dan perspective-1000 w-full h-[400px] cursor-pointer group" onclick="openCharacterModal('Thợ Săn', 'The Hunter', 'assets/img/hunter.jpg', 'Khi chết (dù bị sói cắn hay bị treo cổ), Thợ săn có quyền bắn và kéo theo 1 người khác chết cùng ngay lập tức.', 'Phe Dân', 'text-blue-400', 'border-blue-400')">
                <div class="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180 shadow-[0_10px_30px_rgba(0,0,0,0.8)] rounded-xl">
                    <div class="absolute inset-0 backface-hidden rounded-xl overflow-hidden border-2 border-[#b59045]/50 shadow-xl bg-black">
                        <img src="assets/img/card_back.jpg" class="w-full h-full object-cover filter brightness-[0.85] contrast-[1.1]">
                    </div>
                    <div class="absolute inset-0 backface-hidden rotate-y-180 bg-[#050508] rounded-xl overflow-hidden border border-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.2)]">
                        <div class="absolute top-4 right-4 bg-black/80 text-blue-400 font-bold px-3 py-1 rounded text-[12px] border border-blue-400 z-10 uppercase shadow-lg">Phe Dân</div>
                        <div class="h-3/4 relative overflow-hidden"><img src="assets/img/hunter.jpg" class="object-cover w-full h-full opacity-90"><div class="absolute inset-0 bg-gradient-to-t from-[#050508] to-transparent"></div></div>
                        <div class="h-1/4 p-4 relative z-20 flex flex-col justify-center items-center text-center bg-[#050508]">
                            <h3 class="text-[20px] font-black text-white mb-1 uppercase tracking-wider">Thợ Săn</h3>
                            <p class="text-[12px] text-blue-400 uppercase tracking-widest font-bold">The Hunter</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bảo Vệ -->
            <div class="character-card phe-dan perspective-1000 w-full h-[400px] cursor-pointer group" onclick="openCharacterModal('Bảo Vệ', 'The Guard', 'assets/img/guard.jpg', 'Mỗi đêm thức dậy và chọn bảo vệ 1 người khỏi bị sói cắn. Không được bảo vệ 1 người trong 2 đêm liên tiếp.', 'Phe Dân', 'text-blue-400', 'border-blue-400')">
                <div class="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180 shadow-[0_10px_30px_rgba(0,0,0,0.8)] rounded-xl">
                    <div class="absolute inset-0 backface-hidden rounded-xl overflow-hidden border-2 border-[#b59045]/50 shadow-xl bg-black">
                        <img src="assets/img/card_back.jpg" class="w-full h-full object-cover filter brightness-[0.85] contrast-[1.1]">
                    </div>
                    <div class="absolute inset-0 backface-hidden rotate-y-180 bg-[#050508] rounded-xl overflow-hidden border border-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.2)]">
                        <div class="absolute top-4 right-4 bg-black/80 text-blue-400 font-bold px-3 py-1 rounded text-[12px] border border-blue-400 z-10 uppercase shadow-lg">Phe Dân</div>
                        <div class="h-3/4 relative overflow-hidden"><img src="assets/img/guard.jpg" class="object-cover w-full h-full opacity-90"><div class="absolute inset-0 bg-gradient-to-t from-[#050508] to-transparent"></div></div>
                        <div class="h-1/4 p-4 relative z-20 flex flex-col justify-center items-center text-center bg-[#050508]">
                            <h3 class="text-[20px] font-black text-white mb-1 uppercase tracking-wider">Bảo Vệ</h3>
                            <p class="text-[12px] text-blue-400 uppercase tracking-widest font-bold">The Guard</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Sói Thường -->
            <div class="character-card phe-soi perspective-1000 w-full h-[400px] cursor-pointer group" onclick="openCharacterModal('Ma Sói', 'The Werewolf', 'assets/img/wolf.jpg', 'Mỗi đêm thức dậy cùng đồng bọn để chọn 1 nạn nhân. Ban ngày trà trộn làm dân làng để sống sót.', 'Phe Sói', 'text-blood', 'border-blood')">
                <div class="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180 shadow-[0_10px_30px_rgba(0,0,0,0.8)] rounded-xl">
                    <div class="absolute inset-0 backface-hidden rounded-xl overflow-hidden border-2 border-[#b59045]/50 shadow-xl bg-black">
                        <img src="assets/img/card_back.jpg" class="w-full h-full object-cover filter brightness-[0.85] contrast-[1.1]">
                    </div>
                    <div class="absolute inset-0 backface-hidden rotate-y-180 bg-[#050508] rounded-xl overflow-hidden border border-blood shadow-[0_0_15px_rgba(220,38,38,0.3)]">
                        <div class="absolute top-4 right-4 bg-black/80 text-blood font-bold px-3 py-1 rounded text-[12px] border border-blood z-10 uppercase shadow-lg">Phe Sói</div>
                        <div class="h-3/4 relative overflow-hidden"><img src="assets/img/wolf.jpg" class="object-cover w-full h-full opacity-90"><div class="absolute inset-0 bg-gradient-to-t from-[#050508] to-transparent"></div></div>
                        <div class="h-1/4 p-4 relative z-20 flex flex-col justify-center items-center text-center bg-[#050508]">
                            <h3 class="text-[20px] font-black text-white mb-1 uppercase tracking-wider">Ma Sói</h3>
                            <p class="text-[12px] text-red-500 uppercase tracking-widest font-bold">The Werewolf</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Dân Làng -->
            <div class="character-card phe-dan perspective-1000 w-full h-[400px] cursor-pointer group" onclick="openCharacterModal('Dân Làng', 'The Villager', 'assets/img/villager.jpg', 'Không có kỹ năng ban đêm. Vũ khí duy nhất là khả năng suy luận và phiếu vote ban ngày để tìm ra sói.', 'Phe Dân', 'text-blue-400', 'border-blue-400')">
                <div class="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180 shadow-[0_10px_30px_rgba(0,0,0,0.8)] rounded-xl">
                    <div class="absolute inset-0 backface-hidden rounded-xl overflow-hidden border-2 border-[#b59045]/50 shadow-xl bg-black">
                        <img src="assets/img/card_back.jpg" class="w-full h-full object-cover filter brightness-[0.85] contrast-[1.1]">
                    </div>
                    <div class="absolute inset-0 backface-hidden rotate-y-180 bg-[#050508] rounded-xl overflow-hidden border border-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.2)]">
                        <div class="absolute top-4 right-4 bg-black/80 text-blue-400 font-bold px-3 py-1 rounded text-[12px] border border-blue-400 z-10 uppercase shadow-lg">Phe Dân</div>
                        <div class="h-3/4 relative overflow-hidden"><img src="assets/img/villager.jpg" class="object-cover w-full h-full opacity-90 filter grayscale sepia-[0.1]"><div class="absolute inset-0 bg-gradient-to-t from-[#050508] to-transparent"></div></div>
                        <div class="h-1/4 p-4 relative z-20 flex flex-col justify-center items-center text-center bg-[#050508]">
                            <h3 class="text-[20px] font-black text-white mb-1 uppercase tracking-wider">Dân Làng</h3>
                            <p class="text-[12px] text-blue-400 uppercase tracking-widest font-bold">The Villager</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Cupid -->
            <div class="character-card phe-thu-3 perspective-1000 w-full h-[400px] cursor-pointer group" onclick="openCharacterModal('Thần Tình Yêu', 'Cupid', 'assets/img/cupid.jpg', 'Đêm đầu tiên, gán ghép 2 người thành 1 cặp. Nếu 1 người chết, người kia chết theo. Thắng chung với cặp đôi.', 'Phe Thứ 3', 'text-purple-500', 'border-purple-500')">
                <div class="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180 shadow-[0_10px_30px_rgba(0,0,0,0.8)] rounded-xl">
                    <div class="absolute inset-0 backface-hidden rounded-xl overflow-hidden border-2 border-[#b59045]/50 shadow-xl bg-black">
                        <img src="assets/img/card_back.jpg" class="w-full h-full object-cover filter brightness-[0.85] contrast-[1.1]">
                    </div>
                    <div class="absolute inset-0 backface-hidden rotate-y-180 bg-[#050508] rounded-xl overflow-hidden border border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                        <div class="absolute top-4 right-4 bg-black/80 text-purple-500 font-bold px-3 py-1 rounded text-[12px] border border-purple-500 z-10 uppercase shadow-lg">Phe Thứ 3</div>
                        <div class="h-3/4 relative overflow-hidden"><img src="assets/img/cupid.jpg" class="object-cover w-full h-full opacity-90"><div class="absolute inset-0 bg-gradient-to-t from-[#050508] to-transparent"></div></div>
                        <div class="h-1/4 p-4 relative z-20 flex flex-col justify-center items-center text-center bg-[#050508]">
                            <h3 class="text-[20px] font-black text-white mb-1 uppercase tracking-wider">Thần Tình Yêu</h3>
                            <p class="text-[12px] text-purple-500 uppercase tracking-widest font-bold">Cupid</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    ${footerHTML}
    
    <!-- MODAL -->
    <div id="characterModal" class="fixed inset-0 z-[100] flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300">
        <div class="absolute inset-0 bg-black/80 backdrop-blur-sm" onclick="closeCharacterModal()"></div>
        <div class="relative bg-[#0a0a0f] border border-gray-800 rounded-2xl max-w-lg w-full mx-4 overflow-hidden transform scale-95 transition-transform duration-300 shadow-[0_0_40px_rgba(0,0,0,0.8)]" id="modalContent">
            <div class="h-64 relative border-b border-gray-800">
                <img id="modalImg" src="" alt="" class="w-full h-full object-cover opacity-50">
                <div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent"></div>
                <button onclick="closeCharacterModal()" class="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-black/50 border border-gray-700 rounded-full text-gray-400 hover:text-white hover:border-white transition z-10">
                    <i class="fa-solid fa-xmark"></i>
                </button>
                <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#0a0a0f] border-2 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.8)] z-10" id="modalBadgeBorder">
                    <img src="assets/img/logo-crest.png" class="w-10 h-10 object-contain opacity-80 drop-shadow-lg">
                </div>
            </div>
            <div class="pt-12 pb-8 px-8 text-center relative z-20">
                <h3 id="modalTitle" class="text-[28px] font-black text-white mb-1 uppercase tracking-wider drop-shadow-md"></h3>
                <p id="modalSubtitle" class="text-[14px] font-bold uppercase tracking-widest mb-6"></p>
                <div class="w-16 h-1 bg-gray-800 mx-auto mb-6 rounded-full" id="modalDivider"></div>
                <p id="modalDesc" class="text-gray-300 text-[16px] leading-relaxed"></p>
            </div>
        </div>
    </div>
    
    <script>
        const buttons = document.querySelectorAll('.filter-btn');
        const cards = document.querySelectorAll('.character-card');

        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                buttons.forEach(b => {
                    b.classList.remove('active', 'bg-blood', 'text-white', 'border-blood', 'bg-blue-600', 'border-blue-600', 'bg-purple-600', 'border-purple-600', 'text-gray-300');
                    b.classList.add('text-gray-300');
                });
                
                const filterValue = btn.getAttribute('data-filter');
                btn.classList.remove('text-gray-300');
                if(filterValue === 'all') {
                    btn.classList.add('bg-blood', 'text-white', 'border-blood');
                } else if(filterValue === 'phe-dan') {
                    btn.classList.add('bg-blue-600', 'text-white', 'border-blue-600');
                } else if(filterValue === 'phe-thu-3') {
                    btn.classList.add('bg-purple-600', 'text-white', 'border-purple-600');
                } else {
                    btn.classList.add('bg-blood', 'text-white', 'border-blood');
                }

                cards.forEach(card => {
                    if (filterValue === 'all' || card.classList.contains(filterValue)) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                });
            });
        });
        
        function openCharacterModal(title, subtitle, imgSrc, desc, faction, colorClass, borderClass) {
            document.getElementById('modalTitle').innerText = title;
            document.getElementById('modalSubtitle').innerText = subtitle;
            document.getElementById('modalSubtitle').className = 'text-[12px] font-bold uppercase tracking-widest mb-6 ' + colorClass;
            document.getElementById('modalImg').src = imgSrc;
            document.getElementById('modalDesc').innerText = desc;
            
            const badgeBorder = document.getElementById('modalBadgeBorder');
            badgeBorder.className = 'absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#0a0a0f] border-2 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.8)] z-10 ' + borderClass;
            
            const divider = document.getElementById('modalDivider');
            divider.className = 'w-16 h-1 mx-auto mb-6 rounded-full bg-current ' + colorClass;

            const modal = document.getElementById('characterModal');
            const modalContent = document.getElementById('modalContent');
            modal.classList.remove('opacity-0', 'pointer-events-none');
            modalContent.classList.remove('scale-95');
            modalContent.classList.add('scale-100');
            document.body.style.overflow = 'hidden';
        }
        
        function closeCharacterModal() {
            const modal = document.getElementById('characterModal');
            const modalContent = document.getElementById('modalContent');
            modal.classList.add('opacity-0', 'pointer-events-none');
            modalContent.classList.remove('scale-100');
            modalContent.classList.add('scale-95');
            document.body.style.overflow = '';
        }
    </script>
`;
fs.writeFileSync('characters.html', headTemplate('Nhân Vật') + charsContent + endTemplate, 'utf8');
