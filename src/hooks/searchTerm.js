export const getSearchTerm = ()=>{
    return localStorage.getItem('search');
}

export const setSearchTerm = (searchTerm)=>{
    localStorage.setItem('search',searchTerm);
}