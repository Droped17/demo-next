export default async function POST(req: Request){
try {
    const {username,password} = await req.json();
    console.log({username,password});
} catch (e) {
    console.log({e});
}
}