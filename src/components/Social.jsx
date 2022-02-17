
export default function Social(props) {
    return (
        <div style={{
            width: '50px',
            cursor: 'pointer',
        }} className='mx-2'>
            <a rel="noreferrer" target={'_blank'} href={props.href}>
            <img style={{
                width: '40px',
                height: '40px'
            }} className='mx-2' src={props.src} alt="" />
            </a>
        </div>
    )
}