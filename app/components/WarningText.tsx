const WarningText = ({ text }: { text: string }) => {
    return (
        <div className="text-lg h-screen w-full flex justify-center items-center">
            <p className="text-red-500">{text}</p>
        </div>
    )
}

export default WarningText