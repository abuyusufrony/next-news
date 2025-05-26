export default async function Allblog() {
    const res = await fetch('https://dev.to/api/articles/latest?per_page=13&top=7')
    return res.json()
}