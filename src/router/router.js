// 0. 引用套件
import { createRouter, createWebHistory } from "vue-router";

// 1. 引用元件及子路由
// commmon 無須權限
import ContactUs from "@views/common/ContactUs.vue";
import Home from "@views/common/Home.vue";
import About from "@views/common/About.vue";

// 2. 定義路由
// 如果頁面不需要某些元件，請在導向該頁面的routes加入對應的meta屬性
// 例如：meta: { hideNavbar: true }, 或 meta: { hideFooter: true },
// 如果頁面需要登入或權限才能檢視，請在導向該頁面的routes加入：
// meta: { requiresAuth: true }, 或 permissions: ['xxx']}
const routes = [
    // commmon 無須權限
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/contact-us",
        name: "ContactUs",
        component: ContactUs,
    },
];




// 3. 建立路由實體並匯出
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;