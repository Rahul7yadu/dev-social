const page = () => {
  return (
    <div>
        <Login/>
    </div>
  )
}
export default page

const Login = ()=>{
    return (
        <form >
            <label>
                <p>Username</p>
                <input type="text" />
            </label>
            <label>
                <p>Password</p>
                <input type="password" />
            </label>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}