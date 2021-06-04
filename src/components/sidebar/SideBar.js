const links=[{name:'home', display:'HOME'},
{name:'new-archival-initiation', display:'NEW ARCHIVAL INITIATION'},
{name:'contact-us', display:'CONTACT US'}];

export function SideBar(){
return (
<div className="sidebar">
<div className="header">
AIDE
</div>

{
links.map((l,index)=>(<LinkItem item={l}/>))
}

</div>
)
}

function LinkItem({item}){
return (
<div className="link-item">{item.display}</div>
)
}