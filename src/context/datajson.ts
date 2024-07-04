import dashboard from "../../public/asset/image/sidebar/dashboard.png"
import master from "../../public/asset/image/sidebar/master.png"
import asset from "../../public/asset/image/sidebar/asset.png"
import accessories from "../../public/asset/image/sidebar/accessories.png"
import licsence from "../../public/asset/image/sidebar/license.png"
import components from "../../public/asset/image/sidebar/components.png"
import settings from "../../public/asset/image/sidebar/settings.png"
import request from "../../public/asset/image/sidebar/request.png"
import consumable from "../../public/asset/image/sidebar/consumable.png"

export const sidebar = [
    {
        title:"dashboard",
        link:"/",
        icon:dashboard
    },
    {
        title:"masters",
        link:"/masters",
        icon:master
    },
    {
        title:"asset",
        link:"/asset",
        icon:asset
    },
    {
        title:"accessories",
        link:"/accessories",
        icon:accessories
    },
    {
        title:"licsence",
        link:"/licsence",
        icon:licsence
    },
    {
        title:"components",
        link:"/components",
        icon:components
    },
    {
        title:"consumables",
        link:"/consumables",
        icon: consumable
    },
    {
        title:"requestables",
        link:"/requestables",
        icon: request
    },
    {
        title:"settings",
        link:"/settings",
        icon:settings
    },
];
export const dashboardWidgets = [
    {
        id: 1,
        cardColor: "primary",
        label: "Assets",
        badge: "ri-barcode-box-line",
        badgeClass: "success",
        percentage: "+16.24",
        counter: 500,
        link: "/asset/list",
        bgcolor: "success",
        icon: "ri-barcode-box-line",
    },
    {
        id: 2,
        cardColor: "secondary",
        label: "Licence",
        badge: "ri-key-2-line",
        badgeClass: "danger",
        percentage: "-3.57",
        counter:1276,
        link: "View all orders",
        bgcolor: "info",
        icon: "ri-key-2-line",
    },
    {
        id: 3,
        cardColor: "success",
        label: "Accessory",
        badge: "ri-keyboard-line",
        badgeClass: "success",
        percentage: "+29.08",
        counter: 832,
        link: "See details",
        bgcolor: "warning",
        icon: "ri-keyboard-line",
    },
    {
        id: 4,
        cardColor: "info",
        label: "Components",
        badgeClass: "ri-stack-fill",
        percentage: "+560",
        counter: 166,
        link: "Withdraw money",
        bgcolor: "primary",
        icon: "ri-stack-fill",
    },
];
