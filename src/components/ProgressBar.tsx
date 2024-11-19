
type Props = {
    value: number;
}

const ProgressBar = ({value}: Props) => {
    return (
        <div className='h-2 w-full rounded-lg bg-gray-300'>
            <div
                style={{ width: `${value*100}%`}}
                className={`h-full rounded-lg bg-gray-600`}>
            </div>
        </div>
    );
}

export default ProgressBar