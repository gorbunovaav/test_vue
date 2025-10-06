export async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    if (!res.ok) throw new Error(`HTTP error ${res.status}`)
    return await res.json()
    }