export default function RoadmapMapEntry(props) {
    return (
        <div className="container">
            <div className="columns is-centered">
                <div className="column is-one-fifth is-flex is-flex-direction-row is-justify-content-center">
                    <img style={{
                        width: '90px',
                        height: '90px',
                        marginLeft: '60px',
                        marginTop: '-30px'
                    }} className='is-hidden-mobile' src={props.entryImg} alt="" />
                </div>
                <div className="roadMapEntry column is-three-fifths">
                    <div className="">
                        <div className="is-hidden-tablet">
                            <img style={{
                                width: '90px',
                            }} className='' src={props.entryImg} alt="" />
                        </div>
                        <div  className="">
                            <p className="is-size-4 font-jackarmstrong font-dark roadMapEntryTopic">{props.entryTopic}</p>
                        </div>
                    </div>

                    <div className="font-trashhand is-size-4 mt-5 font-dark">
                    {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
}