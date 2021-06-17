

async function main(){
    const data = await fetch('/api/episodes').then(res=>res.json());
    const list = document.querySelector("#ep-list");
    const items = [];
    for(const ep of data){
        const li = document.createElement("li");
        const{season,episode,title} = ep;
        li.textContent = `season ${season} episode ${episode} : ${title}`;
        items.push(li);
    }
    list.append(...items);
};
main();