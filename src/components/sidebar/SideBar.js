import {useCallback, useState} from 'react';

const links=[{name:'home', display:'HOME'},
{name:'new-archival-initiation', display:'NEW ARCHIVAL INITIATION'},
{name:'contact-us', display:'CONTACT US'}];

export function SideBar(){

const [selectedIndex, setSelectedIndex]=useState(0);

const handleClick=useCallback((index)=>{
setSelectedIndex(index);
},[]);

return (
<div className="sidebar">
<div className="header">
AIDE
</div>

{
links.map((l,index)=>(<LinkItem item={l} index={index} onClick={handleClick} isSelected={index===selectedIndex}/>))
}

</div>
)
}

function LinkItem({item, index, onClick, isSelected}){

const handleClick= useCallback(()=>{
onClick(index);
}, [index, onClick]);

const className=isSelected? "link-item selected": "link-item";

return (
<div className={className} onClick={handleClick}>{item.display}</div>
)
}