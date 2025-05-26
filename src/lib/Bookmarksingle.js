
export async function getSingleArticle(id) {
    const res = await fetch(`https://dev.to/api/articles/${id}`);
    console.log("Status:", res.status);
    if (!res.ok) {
        throw new Error(`Failed to fetch article. Status: ${res.status}`);
    }
    return await res.json();
}

