import React,{Fragment} from 'react';
import {HashRouter,Route,Redirect,Switch,Link,NavLink} from 'react-router-dom'
import Routes from './router/index'
class App extends React.Component{
    constructor() {
        super();
    }
    render(){
        return (
            <HashRouter>
                <Switch>
                    {
                        Routes.map((item,index)=>{
                            if(item.type == 'Redirect'){
                                return (
                                    <Redirect key={index} from={item.from} to={item.to} exact={item.exact || false}/>
                                )
                            } else {
                                if (item.children !== undefined && item.children.length !== 0) {
                                    return (
                                        <Fragment key={index}>
                                            <Route path={item.path} exact={item.exact || false} render={()=>{
                                                return <item.component/>
                                            }}/>
                                            <Switch>
                                                {
                                                    item.children.map((items,indexs)=>{
                                                        return (
                                                            <Route key={indexs} path={items.path} exact={items.exact || false} render={()=>{
                                                                return <items.component/>
                                                            }}/>
                                                        )
                                                    })
                                                }
                                            </Switch>
                                        </Fragment>
                                    )
                                } else {
                                    return (
                                        <Route key={index}  path={item.path} exact={item.exact || false} render={()=>{
                                            return <item.component/>
                                        }}/>
                                    )
                                }
                            }
                        })
                    }
                </Switch>
            </HashRouter>
        )
    }
}
 export default App