const Error = ({children}) => {
    return (
        <div className="bg-red-800 text-white text-center p-2 uppercase
        font-bold my-2 rounded-md">
            {children}
        </div>
    )
}

export default Error