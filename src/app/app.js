export function createHeader(){
    let content = document.getElementById('content');
    let header = document.createElement('header');
    let title = document.createElement('h1')
    let nav = document.createElement('ul');
    for(let i = 0; i < 3; i++){
        nav.append(document.createElement('li'));
    }
    header.append(title);
    header.append(nav);
    content.append(header);
}