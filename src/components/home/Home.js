import {Header} from '../header';
import {SideBar} from '../sidebar';
import {SideBarContent} from '../sidebar-content';

export function Home(){
return (<div className="home"><Header/>
<div className="home-content">
<SideBar/>
<SideBarContent/>
</div>
</div>
)
}