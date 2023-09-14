
// ALL NEWS LIST API URL
export const NewsListApiHandler=()=>{
    return `/news-lists?populate=image&populate=author&populate=categories&sort=createdAt:desc`;
}
// FILTER NEWS LIST API URL
export const NewsListFilterApiHandler=()=>{
    return `/news-lists?populate=image&populate=author&populate=categories&sort=createdAt:desc`;
}

// NEWS DETAIL API URL
export const NewsDetailApiHandler=(slug:any)=>{
    return `/news-lists/?populate=image&populate=content&filters[slug][$eq]=${slug}&populate=author`;
}

// POST CREATE API
export const PostNewsLetterHandler=()=>{
    return `/join-newsletters`;
}