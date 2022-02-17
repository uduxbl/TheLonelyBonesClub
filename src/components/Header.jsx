import Social from './Social'

export default function Header(props) {
    return (
        <div id='sectionHeader' className='is-relative'>
            <div style={{
                    background: '#7e5455'
                }} className='hero is-clipped'>
                <div class="columns is-centered is-mobile">
                    <div class="column is-two-fifths-mobile is-three-quarters-desktop is-flex is-flex-direction-row pl-6">
                        <img id='logoTop' className='mt-3' src='/images/Logo.png' alt=''/>
                        <div class="is-flex is-flex-direction-row mt-5 ml-6 is-hidden-mobile">
                            <Social href="https://opensea.io/collection/the-lonely-bones-collection" src='/images/Opensea.svg' />
                            <Social href="https://discord.gg/ZWYeQdy6Ru" src='/images/Discord.svg' />
                            <Social href="https://instagram.com/thelonelybonesclub" src='/images/Ig.svg' />
                            <Social href="https://twitter.com/LonelyBoneClub" src='/images/Twitter.svg' />
                        </div>
                    </div>
                    <div className="column is-one-fifth is-hidden-tablet"></div>
                    <div class="column is-two-fifths-mobile mt-5 is-flex is-flex-direction-row is-justify-content-space-around">
                        <button className='connectBtn button font-jackarmstrong px-5 ml-4'>Connect</button>
                    </div>
                </div>
            </div>
            <img style={{
                width: '100%',
            }} src='/images/Nav rect.png' alt='' />
        </div>
    )
}
