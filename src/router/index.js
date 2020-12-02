import loadable from 'react-loadable'
import Loading from '../components/Loading'
const Detail = loadable({loader:()=>import("../views/Detail"),loading:Loading})
const Home = loadable({loader:()=>import("../views/Home"),loading:Loading})
const One = loadable({loader:()=>import("../views/One"),loading:Loading})
const Two = loadable({loader:()=>import("../views/Two"),loading:Loading})
const Three = loadable({loader:()=>import("../views/Three"),loading:Loading})

const routes = [
    // type:默认为正常route type为Redirect是为重定向
    // from:当type为Redirect时启用属性
    // to:当type为Redirect时启用属性
    // exact:是否严格匹配
    //path:路由路径
    //component:组件
    {
        type:'Redirect',
        from:'/',
        to:'/Home',
        exact:true
    },
    {
        path:"/Home",
        component: Home,
        exact: true,
    },
    {
        path: "/Detail",
        component: Detail,
        exact: false,
        children: [
            {
                path:"/Detail/One",
                component: One,
                exact: true,
            },{
                path:"/Detail/Two",
                component: Two,
                exact: true,
            },{
                path:"/Detail/Three",
                component: Three,
                exact: true,
            },
        ]
    }
]

export default routes