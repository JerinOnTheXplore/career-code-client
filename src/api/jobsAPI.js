export const jobsCreatedByPromise = (email,accessToken)=>{
  return fetch(`https://career-code-server-one.vercel.app/jobs?email=${email}`,{
     headers: {
       authorization : `Bearer ${accessToken}`
     }
  })
  .then(res=>res.json())
}