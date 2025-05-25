export default async function SingleAr(id) {
    const res = await fetch(`https://dev.to/api/articles/${id}`)
    return res.json()
}


