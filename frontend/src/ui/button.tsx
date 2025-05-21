

export function Button({ name, onClick, className }: {
    name: String,
    onClick: () => void,
    className?: string
}) {

    return <>
        <button className={`${className} px-4 py-1 rounded cursor-pointer text-lg font-medium text-center `} onClick={onClick} > {name}</button>
    </>
}