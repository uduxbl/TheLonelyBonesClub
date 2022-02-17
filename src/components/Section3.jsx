import Nft from './Nft'

function Section3() {
  return (
    <div id='section3' className='section is-relative p-0' style={{
    }}>
        <div style={{
            marginTop: '-590px',
            width: '100%',
            // background: '#16202a',
        }} className='d1 is-flex is-flex-direction-row is-justify-content-center'>
            <img style={{
                    width: '100%',
                }} className='mt-6' src='/images/NFT bg-t.png' alt=''/>
        </div>
        <div style={{
            background: '#960e12',
            width: '100%',
            marginTop: '-45px',
            paddingBottom: '30px'
        }} className='is-flex is-flex-direction-row is-justify-content-center'>
            <div className="px-4 pt-6 ">
                <div id='NftsTop' className='columns is-multiline is-mobile '>
                    <div className='column is-half-mobile is-one-fifth-desktop is-flex is-flex-direction-row is-justify-content-center'>
                        <Nft src='/images/Group 18.png' />
                    </div>
                    <div className='column is-half-mobile is-one-fifth-desktop is-flex is-flex-direction-row is-justify-content-center'>
                        <Nft src='/images/Group 19.png' />
                    </div>
                    <div className='column is-half-mobile is-offset-one-quarter-mobile is-one-fifth-desktop is-flex is-flex-direction-row is-justify-content-center'>
                        <Nft src='/images/Group 21.png' />
                    </div>
                    <div className='column is-half-mobile is-one-fifth-desktop is-flex is-flex-direction-row is-justify-content-center'>
                        <Nft src='/images/Group 20.png' />
                    </div>
                    <div className='column is-half-mobile is-one-fifth-desktop is-flex is-flex-direction-row is-justify-content-center'>
                        <Nft src='/images/Group 22.png' />
                    </div>
                </div>
                <div id='NftsBottom' className='columns is-multiline mt-6 is-mobile mb-6 '>
                    <div className='column is-half-mobile is-one-fifth-desktop is-flex is-flex-direction-row is-justify-content-center'>
                        <Nft src='/images/Group 25.png' />
                    </div>
                    <div className='column is-half-mobile is-one-fifth-desktop is-flex is-flex-direction-row is-justify-content-center'>
                        <Nft src='/images/Group 24.png' />
                    </div>
                    <div className='column is-half-mobile is-offset-one-quarter-mobile is-one-fifth-desktop is-flex is-flex-direction-row is-justify-content-center'>
                        <Nft src='/images/Group 26.png' />
                    </div>
                    <div className='column is-half-mobile is-one-fifth-desktop is-flex is-flex-direction-row is-justify-content-center'>
                        <Nft src='/images/Group 23.png' />
                    </div>
                    <div className='column is-half-mobile is-one-fifth-desktop is-flex is-flex-direction-row is-justify-content-center'>
                        <Nft src='/images/Group 27.png' />
                    </div>
                </div>
            </div>
        </div>
        <div style={{
            // marginTop: '-150px',
            background: '#fede91'
        }} className='nftBottomImg'>
            <img style={{
                    width: '100%',
                }} src='/images/NFT bg-b.png' alt=''/>
        </div>
    </div>
  )
}

export default Section3